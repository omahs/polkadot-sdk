(function() {var type_impls = {
"asset_hub_rococo_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryConvert%3C%26PoolId,+AccountId%3E-for-AccountIdConverter%3CSeed,+PoolId%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_asset_conversion/types.rs.html#148-152\">source</a><a href=\"#impl-TryConvert%3C%26PoolId,+AccountId%3E-for-AccountIdConverter%3CSeed,+PoolId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Seed, PoolId, AccountId&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;PoolId</a>, AccountId&gt; for <a class=\"struct\" href=\"pallet_asset_conversion/types/struct.AccountIdConverter.html\" title=\"struct pallet_asset_conversion::types::AccountIdConverter\">AccountIdConverter</a>&lt;Seed, PoolId&gt;<div class=\"where\">where\n    PoolId: Encode,\n    AccountId: Decode,\n    Seed: Get&lt;<a class=\"struct\" href=\"frame_support/struct.PalletId.html\" title=\"struct frame_support::PalletId\">PalletId</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_convert\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_asset_conversion/types.rs.html#154\">source</a><a href=\"#method.try_convert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/traits/trait.TryConvert.html#tymethod.try_convert\" class=\"fn\">try_convert</a>(id: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;PoolId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;PoolId</a>&gt;</h4></section></summary><div class='docblock'>Attempt to make conversion. If returning <a href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html#variant.Err\" title=\"variant core::result::Result::Err\">Result::Err</a>, the inner must always be <code>a</code>.</div></details></div></details>","TryConvert<&PoolId, AccountId>","asset_hub_rococo_runtime::PoolIdToAccountId"]],
"asset_hub_westend_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryConvert%3C%26PoolId,+AccountId%3E-for-AccountIdConverter%3CSeed,+PoolId%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/pallet_asset_conversion/types.rs.html#148-152\">source</a><a href=\"#impl-TryConvert%3C%26PoolId,+AccountId%3E-for-AccountIdConverter%3CSeed,+PoolId%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Seed, PoolId, AccountId&gt; <a class=\"trait\" href=\"sp_runtime/traits/trait.TryConvert.html\" title=\"trait sp_runtime::traits::TryConvert\">TryConvert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;PoolId</a>, AccountId&gt; for <a class=\"struct\" href=\"pallet_asset_conversion/types/struct.AccountIdConverter.html\" title=\"struct pallet_asset_conversion::types::AccountIdConverter\">AccountIdConverter</a>&lt;Seed, PoolId&gt;<div class=\"where\">where\n    PoolId: Encode,\n    AccountId: Decode,\n    Seed: Get&lt;<a class=\"struct\" href=\"frame_support/struct.PalletId.html\" title=\"struct frame_support::PalletId\">PalletId</a>&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_convert\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/pallet_asset_conversion/types.rs.html#154\">source</a><a href=\"#method.try_convert\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"sp_runtime/traits/trait.TryConvert.html#tymethod.try_convert\" class=\"fn\">try_convert</a>(id: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;PoolId</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;AccountId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;PoolId</a>&gt;</h4></section></summary><div class='docblock'>Attempt to make conversion. If returning <a href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html#variant.Err\" title=\"variant core::result::Result::Err\">Result::Err</a>, the inner must always be <code>a</code>.</div></details></div></details>","TryConvert<&PoolId, AccountId>","asset_hub_westend_runtime::PoolIdToAccountId"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()