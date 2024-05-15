(function() {var type_impls = {
"bridge_hub_rococo_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ExportXcm-for-EthereumBlobExporter%3CUniversalLocation,+EthereumNetwork,+OutboundQueue,+AgentHashedDescription%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/snowbridge_router_primitives/outbound/mod.rs.html#29-35\">source</a><a href=\"#impl-ExportXcm-for-EthereumBlobExporter%3CUniversalLocation,+EthereumNetwork,+OutboundQueue,+AgentHashedDescription%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;UniversalLocation, EthereumNetwork, OutboundQueue, AgentHashedDescription&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/export/trait.ExportXcm.html\" title=\"trait staging_xcm_executor::traits::export::ExportXcm\">ExportXcm</a> for <a class=\"struct\" href=\"snowbridge_router_primitives/outbound/struct.EthereumBlobExporter.html\" title=\"struct snowbridge_router_primitives::outbound::EthereumBlobExporter\">EthereumBlobExporter</a>&lt;UniversalLocation, EthereumNetwork, OutboundQueue, AgentHashedDescription&gt;<div class=\"where\">where\n    UniversalLocation: Get&lt;<a class=\"enum\" href=\"staging_xcm/v4/junctions/enum.Junctions.html\" title=\"enum staging_xcm::v4::junctions::Junctions\">Junctions</a>&gt;,\n    EthereumNetwork: Get&lt;<a class=\"enum\" href=\"staging_xcm/v4/junction/enum.NetworkId.html\" title=\"enum staging_xcm::v4::junction::NetworkId\">NetworkId</a>&gt;,\n    OutboundQueue: <a class=\"trait\" href=\"snowbridge_core/outbound/trait.SendMessage.html\" title=\"trait snowbridge_core::outbound::SendMessage\">SendMessage</a>&lt;Balance = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u128.html\">u128</a>&gt;,\n    AgentHashedDescription: <a class=\"trait\" href=\"staging_xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait staging_xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;H256&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Ticket\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Ticket\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"staging_xcm_executor/traits/export/trait.ExportXcm.html#associatedtype.Ticket\" class=\"associatedtype\">Ticket</a> = (<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>])</h4></section></summary><div class='docblock'>Intermediate value which connects the two phases of the export operation.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/snowbridge_router_primitives/outbound/mod.rs.html#39-45\">source</a><a href=\"#method.validate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/export/trait.ExportXcm.html#tymethod.validate\" class=\"fn\">validate</a>(\n    network: <a class=\"enum\" href=\"staging_xcm/v4/junction/enum.NetworkId.html\" title=\"enum staging_xcm::v4::junction::NetworkId\">NetworkId</a>,\n    _channel: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a>,\n    universal_source: &amp;mut <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm/v4/junctions/enum.Junctions.html\" title=\"enum staging_xcm::v4::junctions::Junctions\">Junctions</a>&gt;,\n    destination: &amp;mut <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"staging_xcm/v4/junctions/enum.Junctions.html\" title=\"enum staging_xcm::v4::junctions::Junctions\">Junctions</a>&gt;,\n    message: &amp;mut <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/struct.Xcm.html\" title=\"struct staging_xcm::v4::Xcm\">Xcm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;(&lt;<a class=\"struct\" href=\"snowbridge_router_primitives/outbound/struct.EthereumBlobExporter.html\" title=\"struct snowbridge_router_primitives::outbound::EthereumBlobExporter\">EthereumBlobExporter</a>&lt;UniversalLocation, EthereumNetwork, OutboundQueue, AgentHashedDescription&gt; as <a class=\"trait\" href=\"staging_xcm_executor/traits/export/trait.ExportXcm.html\" title=\"trait staging_xcm_executor::traits::export::ExportXcm\">ExportXcm</a>&gt;::<a class=\"associatedtype\" href=\"staging_xcm_executor/traits/export/trait.ExportXcm.html#associatedtype.Ticket\" title=\"type staging_xcm_executor::traits::export::ExportXcm::Ticket\">Ticket</a>, <a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Assets.html\" title=\"struct staging_xcm::v4::asset::Assets\">Assets</a>), <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.SendError.html\" title=\"enum staging_xcm::v3::traits::SendError\">SendError</a>&gt;</h4></section></summary><div class='docblock'>Check whether the given <code>message</code> is deliverable to the given <code>destination</code> on <code>network</code>,\nspoofing its source as <code>universal_source</code> and if so determine the cost which will be paid by\nthis chain to do so, returning a <code>Ticket</code> token which can be used to enact delivery. <a href=\"staging_xcm_executor/traits/export/trait.ExportXcm.html#tymethod.validate\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deliver\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/snowbridge_router_primitives/outbound/mod.rs.html#125\">source</a><a href=\"#method.deliver\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/export/trait.ExportXcm.html#tymethod.deliver\" class=\"fn\">deliver</a>(blob: (<a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt;, [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>])) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.array.html\">32</a>], <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.SendError.html\" title=\"enum staging_xcm::v3::traits::SendError\">SendError</a>&gt;</h4></section></summary><div class='docblock'>Actually carry out the delivery operation for a previously validated message sending. <a href=\"staging_xcm_executor/traits/export/trait.ExportXcm.html#tymethod.deliver\">Read more</a></div></details></div></details>","ExportXcm","bridge_hub_rococo_runtime::bridge_to_ethereum_config::SnowbridgeExporter"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()