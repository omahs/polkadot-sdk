(function() {var type_impls = {
"asset_hub_rococo_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TransactAsset-for-NonFungiblesAdapter%3CAssets,+Matcher,+AccountIdConverter,+AccountId,+CheckAsset,+CheckingAccount%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#265-273\">source</a><a href=\"#impl-TransactAsset-for-NonFungiblesAdapter%3CAssets,+Matcher,+AccountIdConverter,+AccountId,+CheckAsset,+CheckingAccount%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Assets, Matcher, AccountIdConverter, AccountId, CheckAsset, CheckingAccount&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html\" title=\"trait staging_xcm_executor::traits::transact_asset::TransactAsset\">TransactAsset</a> for <a class=\"struct\" href=\"staging_xcm_builder/nonfungibles_adapter/struct.NonFungiblesAdapter.html\" title=\"struct staging_xcm_builder::nonfungibles_adapter::NonFungiblesAdapter\">NonFungiblesAdapter</a>&lt;Assets, Matcher, AccountIdConverter, AccountId, CheckAsset, CheckingAccount&gt;<div class=\"where\">where\n    Assets: <a class=\"trait\" href=\"frame_support/traits/tokens/nonfungibles/trait.Mutate.html\" title=\"trait frame_support::traits::tokens::nonfungibles::Mutate\">Mutate</a>&lt;AccountId&gt; + <a class=\"trait\" href=\"frame_support/traits/tokens/nonfungibles/trait.Transfer.html\" title=\"trait frame_support::traits::tokens::nonfungibles::Transfer\">Transfer</a>&lt;AccountId&gt;,\n    Matcher: <a class=\"trait\" href=\"staging_xcm_executor/traits/token_matching/trait.MatchesNonFungibles.html\" title=\"trait staging_xcm_executor::traits::token_matching::MatchesNonFungibles\">MatchesNonFungibles</a>&lt;&lt;Assets as <a class=\"trait\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::nonfungibles::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html#associatedtype.CollectionId\" title=\"type frame_support::traits::tokens::nonfungibles::Inspect::CollectionId\">CollectionId</a>, &lt;Assets as <a class=\"trait\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::nonfungibles::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html#associatedtype.ItemId\" title=\"type frame_support::traits::tokens::nonfungibles::Inspect::ItemId\">ItemId</a>&gt;,\n    AccountIdConverter: <a class=\"trait\" href=\"staging_xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait staging_xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt;,\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    CheckAsset: <a class=\"trait\" href=\"staging_xcm_builder/fungibles_adapter/trait.AssetChecking.html\" title=\"trait staging_xcm_builder::fungibles_adapter::AssetChecking\">AssetChecking</a>&lt;&lt;Assets as <a class=\"trait\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::nonfungibles::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html#associatedtype.CollectionId\" title=\"type frame_support::traits::tokens::nonfungibles::Inspect::CollectionId\">CollectionId</a>&gt;,\n    CheckingAccount: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AccountId&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.can_check_in\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#275\">source</a><a href=\"#method.can_check_in\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.can_check_in\" class=\"fn\">can_check_in</a>(\n    origin: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Ensure that <code>check_in</code> will do as expected. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.can_check_in\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_in\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#286\">source</a><a href=\"#method.check_in\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.check_in\" class=\"fn\">check_in</a>(origin: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>)</h4></section></summary><div class='docblock'>An asset has been teleported in from the given origin. This should do whatever housekeeping\nis needed. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.check_in\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.can_check_out\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#297\">source</a><a href=\"#method.can_check_out\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.can_check_out\" class=\"fn\">can_check_out</a>(\n    dest: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Ensure that <code>check_out</code> will do as expected. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.can_check_out\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_out\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#308\">source</a><a href=\"#method.check_out\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.check_out\" class=\"fn\">check_out</a>(dest: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>)</h4></section></summary><div class='docblock'>An asset has been teleported out to the given destination. This should do whatever\nhousekeeping is needed. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.check_out\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deposit_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#319\">source</a><a href=\"#method.deposit_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.deposit_asset\" class=\"fn\">deposit_asset</a>(\n    what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    who: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    context: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Deposit the <code>what</code> asset into the account of <code>who</code>. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.deposit_asset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.withdraw_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#330-334\">source</a><a href=\"#method.withdraw_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.withdraw_asset\" class=\"fn\">withdraw_asset</a>(\n    what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    who: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    maybe_context: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Withdraw the given asset from the consensus system. Return the actual asset(s) withdrawn,\nwhich should always be equal to <code>_what</code>. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.withdraw_asset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.transfer_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#345-350\">source</a><a href=\"#method.transfer_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.transfer_asset\" class=\"fn\">transfer_asset</a>(\n    what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    from: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    to: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Move an <code>asset</code> <code>from</code> one location in <code>to</code> another location. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.transfer_asset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.internal_transfer_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/traits/transact_asset.rs.html#111-116\">source</a><a href=\"#method.internal_transfer_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.internal_transfer_asset\" class=\"fn\">internal_transfer_asset</a>(\n    _asset: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    _from: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    _to: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    _context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Move an <code>asset</code> <code>from</code> one location in <code>to</code> another location. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.internal_transfer_asset\">Read more</a></div></details></div></details>","TransactAsset","asset_hub_rococo_runtime::xcm_config::UniquesTransactor"]],
"asset_hub_westend_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TransactAsset-for-NonFungiblesAdapter%3CAssets,+Matcher,+AccountIdConverter,+AccountId,+CheckAsset,+CheckingAccount%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#265-273\">source</a><a href=\"#impl-TransactAsset-for-NonFungiblesAdapter%3CAssets,+Matcher,+AccountIdConverter,+AccountId,+CheckAsset,+CheckingAccount%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Assets, Matcher, AccountIdConverter, AccountId, CheckAsset, CheckingAccount&gt; <a class=\"trait\" href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html\" title=\"trait staging_xcm_executor::traits::transact_asset::TransactAsset\">TransactAsset</a> for <a class=\"struct\" href=\"staging_xcm_builder/nonfungibles_adapter/struct.NonFungiblesAdapter.html\" title=\"struct staging_xcm_builder::nonfungibles_adapter::NonFungiblesAdapter\">NonFungiblesAdapter</a>&lt;Assets, Matcher, AccountIdConverter, AccountId, CheckAsset, CheckingAccount&gt;<div class=\"where\">where\n    Assets: <a class=\"trait\" href=\"frame_support/traits/tokens/nonfungibles/trait.Mutate.html\" title=\"trait frame_support::traits::tokens::nonfungibles::Mutate\">Mutate</a>&lt;AccountId&gt; + <a class=\"trait\" href=\"frame_support/traits/tokens/nonfungibles/trait.Transfer.html\" title=\"trait frame_support::traits::tokens::nonfungibles::Transfer\">Transfer</a>&lt;AccountId&gt;,\n    Matcher: <a class=\"trait\" href=\"staging_xcm_executor/traits/token_matching/trait.MatchesNonFungibles.html\" title=\"trait staging_xcm_executor::traits::token_matching::MatchesNonFungibles\">MatchesNonFungibles</a>&lt;&lt;Assets as <a class=\"trait\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::nonfungibles::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html#associatedtype.CollectionId\" title=\"type frame_support::traits::tokens::nonfungibles::Inspect::CollectionId\">CollectionId</a>, &lt;Assets as <a class=\"trait\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::nonfungibles::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html#associatedtype.ItemId\" title=\"type frame_support::traits::tokens::nonfungibles::Inspect::ItemId\">ItemId</a>&gt;,\n    AccountIdConverter: <a class=\"trait\" href=\"staging_xcm_executor/traits/conversion/trait.ConvertLocation.html\" title=\"trait staging_xcm_executor::traits::conversion::ConvertLocation\">ConvertLocation</a>&lt;AccountId&gt;,\n    AccountId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    CheckAsset: <a class=\"trait\" href=\"staging_xcm_builder/fungibles_adapter/trait.AssetChecking.html\" title=\"trait staging_xcm_builder::fungibles_adapter::AssetChecking\">AssetChecking</a>&lt;&lt;Assets as <a class=\"trait\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html\" title=\"trait frame_support::traits::tokens::nonfungibles::Inspect\">Inspect</a>&lt;AccountId&gt;&gt;::<a class=\"associatedtype\" href=\"frame_support/traits/tokens/nonfungibles/trait.Inspect.html#associatedtype.CollectionId\" title=\"type frame_support::traits::tokens::nonfungibles::Inspect::CollectionId\">CollectionId</a>&gt;,\n    CheckingAccount: Get&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;AccountId&gt;&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.can_check_in\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#275\">source</a><a href=\"#method.can_check_in\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.can_check_in\" class=\"fn\">can_check_in</a>(\n    origin: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Ensure that <code>check_in</code> will do as expected. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.can_check_in\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_in\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#286\">source</a><a href=\"#method.check_in\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.check_in\" class=\"fn\">check_in</a>(origin: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>)</h4></section></summary><div class='docblock'>An asset has been teleported in from the given origin. This should do whatever housekeeping\nis needed. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.check_in\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.can_check_out\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#297\">source</a><a href=\"#method.can_check_out\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.can_check_out\" class=\"fn\">can_check_out</a>(\n    dest: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Ensure that <code>check_out</code> will do as expected. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.can_check_out\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_out\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#308\">source</a><a href=\"#method.check_out\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.check_out\" class=\"fn\">check_out</a>(dest: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>, context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>)</h4></section></summary><div class='docblock'>An asset has been teleported out to the given destination. This should do whatever\nhousekeeping is needed. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.check_out\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deposit_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#319\">source</a><a href=\"#method.deposit_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.deposit_asset\" class=\"fn\">deposit_asset</a>(\n    what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    who: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    context: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Deposit the <code>what</code> asset into the account of <code>who</code>. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.deposit_asset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.withdraw_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#330-334\">source</a><a href=\"#method.withdraw_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.withdraw_asset\" class=\"fn\">withdraw_asset</a>(\n    what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    who: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    maybe_context: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Withdraw the given asset from the consensus system. Return the actual asset(s) withdrawn,\nwhich should always be equal to <code>_what</code>. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.withdraw_asset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.transfer_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_builder/nonfungibles_adapter.rs.html#345-350\">source</a><a href=\"#method.transfer_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.transfer_asset\" class=\"fn\">transfer_asset</a>(\n    what: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    from: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    to: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Move an <code>asset</code> <code>from</code> one location in <code>to</code> another location. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.transfer_asset\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.internal_transfer_asset\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm_executor/traits/transact_asset.rs.html#111-116\">source</a><a href=\"#method.internal_transfer_asset\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.internal_transfer_asset\" class=\"fn\">internal_transfer_asset</a>(\n    _asset: &amp;<a class=\"struct\" href=\"staging_xcm/v4/asset/struct.Asset.html\" title=\"struct staging_xcm::v4::asset::Asset\">Asset</a>,\n    _from: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    _to: &amp;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>,\n    _context: &amp;<a class=\"struct\" href=\"staging_xcm/v4/struct.XcmContext.html\" title=\"struct staging_xcm::v4::XcmContext\">XcmContext</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"staging_xcm_executor/assets/struct.AssetsInHolding.html\" title=\"struct staging_xcm_executor::assets::AssetsInHolding\">AssetsInHolding</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.Error.html\" title=\"enum staging_xcm::v3::traits::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Move an <code>asset</code> <code>from</code> one location in <code>to</code> another location. <a href=\"staging_xcm_executor/traits/transact_asset/trait.TransactAsset.html#method.internal_transfer_asset\">Read more</a></div></details></div></details>","TransactAsset","asset_hub_westend_runtime::xcm_config::UniquesTransactor"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()