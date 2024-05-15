(function() {var type_impls = {
"xcm_fuzzer":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SendXcm-for-ParachainXcmRouter%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/xcm_fuzzer/fuzz.rs.html#74-83\">source</a><a href=\"#impl-SendXcm-for-ParachainXcmRouter%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: Get&lt;ParaId&gt;&gt; <a class=\"trait\" href=\"staging_xcm/v4/traits/trait.SendXcm.html\" title=\"trait staging_xcm::v4::traits::SendXcm\">SendXcm</a> for <a class=\"struct\" href=\"xcm_fuzzer/struct.ParachainXcmRouter.html\" title=\"struct xcm_fuzzer::ParachainXcmRouter\">ParachainXcmRouter</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Ticket\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Ticket\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"staging_xcm/v4/traits/trait.SendXcm.html#associatedtype.Ticket\" class=\"associatedtype\">Ticket</a> = (Id, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, <a class=\"struct\" href=\"staging_xcm/v4/struct.Xcm.html\" title=\"struct staging_xcm::v4::Xcm\">Xcm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;)</h4></section></summary><div class='docblock'>Intermediate value which connects the two phases of the send operation.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/xcm_fuzzer/fuzz.rs.html#74-83\">source</a><a href=\"#method.validate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/v4/traits/trait.SendXcm.html#tymethod.validate\" class=\"fn\">validate</a>(\n    destination: &amp;mut <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>&gt;,\n    message: &amp;mut <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"staging_xcm/v4/struct.Xcm.html\" title=\"struct staging_xcm::v4::Xcm\">Xcm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;&gt;\n) -&gt; <a class=\"type\" href=\"staging_xcm/v4/traits/type.SendResult.html\" title=\"type staging_xcm::v4::traits::SendResult\">SendResult</a>&lt;(ParaId, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, <a class=\"struct\" href=\"staging_xcm/v4/struct.Xcm.html\" title=\"struct staging_xcm::v4::Xcm\">Xcm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;)&gt;</h4></section></summary><div class='docblock'>Check whether the given <code>_message</code> is deliverable to the given <code>_destination</code> and if so\ndetermine the cost which will be paid by this chain to do so, returning a <code>Validated</code> token\nwhich can be used to enact delivery. <a href=\"staging_xcm/v4/traits/trait.SendXcm.html#tymethod.validate\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deliver\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/xcm_fuzzer/fuzz.rs.html#74-83\">source</a><a href=\"#method.deliver\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"staging_xcm/v4/traits/trait.SendXcm.html#tymethod.deliver\" class=\"fn\">deliver</a>(triple: (ParaId, <a class=\"struct\" href=\"staging_xcm/v4/location/struct.Location.html\" title=\"struct staging_xcm::v4::location::Location\">Location</a>, <a class=\"struct\" href=\"staging_xcm/v4/struct.Xcm.html\" title=\"struct staging_xcm::v4::Xcm\">Xcm</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;)) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"type\" href=\"staging_xcm/v3/traits/type.XcmHash.html\" title=\"type staging_xcm::v3::traits::XcmHash\">XcmHash</a>, <a class=\"enum\" href=\"staging_xcm/v3/traits/enum.SendError.html\" title=\"enum staging_xcm::v3::traits::SendError\">SendError</a>&gt;</h4></section></summary><div class='docblock'>Actually carry out the delivery operation for a previously validated message sending.</div></details></div></details>","SendXcm","xcm_fuzzer::parachain::XcmRouter"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()