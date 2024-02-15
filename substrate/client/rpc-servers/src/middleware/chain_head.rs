// This file is part of Substrate.

// Copyright (C) Parity Technologies (UK) Ltd.
// SPDX-License-Identifier: GPL-3.0-or-later WITH Classpath-exception-2.0

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

//! RPC middleware to ensure chainHead methods are called from a single connection.

use std::{
	collections::HashSet,
	future::Future,
	pin::Pin,
	sync::Arc,
	task::{Context, Poll},
};

use jsonrpsee::{
	server::middleware::rpc::RpcServiceT,
	types::{Params, Request},
	MethodResponse,
};
use parking_lot::Mutex;
use pin_project::pin_project;

/// The per connectin data needed to manage chainHead subscriptions.
#[derive(Default)]
pub struct ConnectionData {
	/// Active `chainHeda_follow` subscriptions for this connection.
	subscriptions: HashSet<String>,
}

/// Layer to allow the `chainHead` RPC methods to be called from a single connection.
#[derive(Clone)]
pub struct ChainHeadLayer {
	connection_data: Arc<Mutex<ConnectionData>>,
}

impl ChainHeadLayer {
	/// Create a new [`ChainHeadLayer`].
	pub fn new(connection_data: Arc<Mutex<ConnectionData>>) -> Self {
		Self { connection_data }
	}
}

impl<S> tower::Layer<S> for ChainHeadLayer {
	type Service = ChainHeadMiddleware<S>;

	fn layer(&self, inner: S) -> Self::Service {
		ChainHeadMiddleware::new(inner, self.connection_data.clone())
	}
}

/// Chain head middleware.
#[derive(Clone)]
pub struct ChainHeadMiddleware<S> {
	service: S,
	connection_data: Arc<Mutex<ConnectionData>>,
}

impl<S> ChainHeadMiddleware<S> {
	/// Create a new chain head middleware.
	pub fn new(service: S, connection_data: Arc<Mutex<ConnectionData>>) -> ChainHeadMiddleware<S> {
		ChainHeadMiddleware { service, connection_data }
	}
}

impl<'a, S> RpcServiceT<'a> for ChainHeadMiddleware<S>
where
	S: Send + Sync + RpcServiceT<'a>,
{
	type Future = ResponseFuture<S::Future>;

	fn call(&self, req: Request<'a>) -> Self::Future {
		const CHAIN_HEAD_FOLLOW: &str = "chainHead_unstable_follow";
		const CHAIN_HEAD_CALL_METHODS: [&str; 8] = [
			"chainHead_unstable_body",
			"chainHead_unstable_header",
			"chainHead_unstable_call",
			"chainHead_unstable_unpin",
			"chainHead_unstable_continue",
			"chainHead_unstable_storage",
			"chainHead_unstable_stopOperation",
			"chainHead_unstable_unfollow",
		];

		let method_name = req.method_name();

		// Intercept the subscription ID returned by the `chainHead_follow` method.
		if method_name == CHAIN_HEAD_FOLLOW {
			return ResponseFuture::Register {
				fut: self.service.call(req.clone()),
				connection_data: self.connection_data.clone(),
			}
		}

		// Ensure the subscription ID of those methods corresponds to a subscription ID
		// of this connection.
		if CHAIN_HEAD_CALL_METHODS.contains(&method_name) {
			let params = req.params();
			let follow_subscription = get_subscription_id(params);

			if let Some(follow_subscription) = follow_subscription {
				if !self.connection_data.lock().subscriptions.contains(&follow_subscription) {
					return ResponseFuture::Ready {
						response: Some(MethodResponse::error(
							req.id(),
							jsonrpsee::types::error::ErrorObject::owned(
								-32602,
								"Invalid subscription ID",
								None::<()>,
							),
						)),
					};
				}
			}
		}

		ResponseFuture::Forward { fut: self.service.call(req.clone()) }
	}
}

/// Extract the subscription ID from the provided parameters.
///
/// We make the assumption that all `chainHead` methods are given the
/// subscription ID as a first parameter.
///
/// This method handles positional and named `camelCase` parameters.
fn get_subscription_id<'a>(params: Params<'a>) -> Option<String> {
	// Support positional parameters.
	if let Ok(follow_subscription) = params.sequence().next::<String>() {
		return Some(follow_subscription)
	}

	// Support named parameters.
	let Ok(value) = params.parse::<serde_json::Value>() else { return None };

	let serde_json::Value::Object(map) = value else { return None };
	if let Some(serde_json::Value::String(subscription_id)) = map.get("followSubscription") {
		return Some(subscription_id.clone())
	}

	None
}

/// Extract the result of a jsonrpc object.
///
/// The function extracts the `result` field from the JSON-RPC response.
///
/// In this example, the result is `tfMQUZekzJLorGlR`.
/// ```ignore
/// "{"jsonrpc":"2.0","result":"tfMQUZekzJLorGlR","id":0}"
/// ```
fn get_method_result(response: &MethodResponse) -> Option<String> {
	if response.is_error() {
		return None
	}

	let result = response.as_result();
	let Ok(value) = serde_json::from_str(result) else { return None };

	let serde_json::Value::Object(map) = value else { return None };
	let Some(serde_json::Value::String(res)) = map.get("result") else { return None };

	Some(res.clone())
}

/// Response future for chainHead middleware.
#[pin_project(project = ResponseFutureProj)]
pub enum ResponseFuture<F> {
	/// The response is propagated immediately without calling other layers.
	///
	/// This is used in case of an error.
	Ready {
		/// The response provided to the client directly.
		///
		/// This is `Option` to consume the value and return a `MethodResponse`
		/// from the projected structure.
		response: Option<MethodResponse>,
	},

	/// Forward the call to another layer.
	Forward {
		/// The future response value.
		#[pin]
		fut: F,
	},

	/// Forward the call to another layer and store the subscription ID of the response.
	Register {
		/// The future response value.
		#[pin]
		fut: F,
		/// Connection data that captures the subscription ID.
		connection_data: Arc<Mutex<ConnectionData>>,
	},
}

impl<'a, F> std::fmt::Debug for ResponseFuture<F> {
	fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
		f.write_str("ResponseFuture")
	}
}

impl<F: Future<Output = MethodResponse>> Future for ResponseFuture<F> {
	type Output = F::Output;

	fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
		let this = self.project();

		match this {
			ResponseFutureProj::Ready { response } =>
				Poll::Ready(response.take().expect("Value is set; qed")),
			ResponseFutureProj::Forward { fut } => fut.poll(cx),
			ResponseFutureProj::Register { fut, connection_data } => {
				let res = fut.poll(cx);
				if let Poll::Ready(response) = &res {
					if let Some(subscription_id) = get_method_result(response) {
						connection_data.lock().subscriptions.insert(subscription_id);
					}
				}
				res
			},
		}
	}
}
