(function() {var type_impls = {
"staging_xcm":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#273-327\">source</a><a href=\"#impl-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#275-277\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/v2/struct.Xcm.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create an empty instance.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#280-282\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/v2/struct.Xcm.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Return <code>true</code> if no instructions are held in <code>self</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.len\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#285-287\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/v2/struct.Xcm.html#tymethod.len\" class=\"fn\">len</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Return the number of instructions held in <code>self</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.or_else\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#291-297\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/v2/struct.Xcm.html#tymethod.or_else\" class=\"fn\">or_else</a>(self, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>() -&gt; Self) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Consume and either return <code>self</code> if it contains some instructions, or if it’s empty, then\ninstead return the result of <code>f</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.first\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#300-302\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/v2/struct.Xcm.html#tymethod.first\" class=\"fn\">first</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"enum\" href=\"staging_xcm/v2/enum.Instruction.html\" title=\"enum staging_xcm::v2::Instruction\">Instruction</a>&lt;RuntimeCall&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return the first instruction, if any.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.last\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#305-307\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/v2/struct.Xcm.html#tymethod.last\" class=\"fn\">last</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"enum\" href=\"staging_xcm/v2/enum.Instruction.html\" title=\"enum staging_xcm::v2::Instruction\">Instruction</a>&lt;RuntimeCall&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return the last instruction, if any.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.only\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#310-316\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/v2/struct.Xcm.html#tymethod.only\" class=\"fn\">only</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"enum\" href=\"staging_xcm/v2/enum.Instruction.html\" title=\"enum staging_xcm::v2::Instruction\">Instruction</a>&lt;RuntimeCall&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Return the only instruction, contained in <code>Self</code>, iff only one exists (<code>None</code> otherwise).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_only\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#320-326\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/v2/struct.Xcm.html#tymethod.into_only\" class=\"fn\">into_only</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"staging_xcm/v2/enum.Instruction.html\" title=\"enum staging_xcm::v2::Instruction\">Instruction</a>&lt;RuntimeCall&gt;, Self&gt;</h4></section></summary><div class=\"docblock\"><p>Return the only instruction, contained in <code>Self</code>, iff only one exists (returns <code>self</code>\notherwise).</p>\n</div></details></div></details>",0,"staging_xcm::v2::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#869-876\">source</a><a href=\"#impl-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.into\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#870-872\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/v2/struct.Xcm.html#tymethod.into\" class=\"fn\">into</a>&lt;C&gt;(self) -&gt; <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;C&gt;</h4></section><section id=\"method.from\" class=\"method\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#873-875\">source</a><h4 class=\"code-header\">pub fn <a href=\"staging_xcm/v2/struct.Xcm.html#tymethod.from\" class=\"fn\">from</a>&lt;C&gt;(xcm: <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;C&gt;) -&gt; Self</h4></section></div></details>",0,"staging_xcm::v2::opaque::Xcm"],["<section id=\"impl-EncodeLike-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#impl-EncodeLike-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; EncodeLike for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section>","EncodeLike","staging_xcm::v2::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#impl-PartialEq-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","staging_xcm::v2::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3CXcm%3CRuntimeCall%3E%3E-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#1032-1037\">source</a><a href=\"#impl-TryFrom%3CXcm%3CRuntimeCall%3E%3E-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"staging_xcm/v3/struct.Xcm.html\" title=\"struct staging_xcm::v3::Xcm\">Xcm</a>&lt;RuntimeCall&gt;&gt; for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#1034-1036\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(new_xcm: <a class=\"struct\" href=\"staging_xcm/v3/struct.Xcm.html\" title=\"struct staging_xcm::v3::Xcm\">NewXcm</a>&lt;RuntimeCall&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<Xcm<RuntimeCall>>","staging_xcm::v2::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#impl-Default-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","staging_xcm::v2::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3CVersionedXcm%3CRuntimeCall%3E%3E-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#491-504\">source</a><a href=\"#impl-TryFrom%3CVersionedXcm%3CRuntimeCall%3E%3E-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"enum\" href=\"staging_xcm/enum.VersionedXcm.html\" title=\"enum staging_xcm::VersionedXcm\">VersionedXcm</a>&lt;RuntimeCall&gt;&gt; for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a></h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/lib.rs.html#493-503\">source</a><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(x: <a class=\"enum\" href=\"staging_xcm/enum.VersionedXcm.html\" title=\"enum staging_xcm::VersionedXcm\">VersionedXcm</a>&lt;RuntimeCall&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<VersionedXcm<RuntimeCall>>","staging_xcm::v2::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#impl-TypeInfo-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; TypeInfo for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;<div class=\"where\">where\n    RuntimeCall: 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","staging_xcm::v2::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#266\">source</a><a href=\"#impl-Debug-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#266\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, __f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","staging_xcm::v2::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#impl-Clone-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","staging_xcm::v2::opaque::Xcm"],["<section id=\"impl-Eq-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#impl-Eq-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section>","Eq","staging_xcm::v2::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#impl-Decode-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; Decode for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy: Input&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Error&gt;</h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.77.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","staging_xcm::v2::opaque::Xcm"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-Xcm%3CRuntimeCall%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#265\">source</a><a href=\"#impl-Encode-for-Xcm%3CRuntimeCall%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;RuntimeCall&gt; Encode for <a class=\"struct\" href=\"staging_xcm/v2/struct.Xcm.html\" title=\"struct staging_xcm::v2::Xcm\">Xcm</a>&lt;RuntimeCall&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#271\">source</a><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#271\">source</a><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)</h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#271\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/staging_xcm/v2/mod.rs.html#271\">source</a><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;__CodecOutputReturn, __CodecUsingEncodedCallback: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]) -&gt; __CodecOutputReturn&gt;(\n    &amp;self,\n    f: __CodecUsingEncodedCallback\n) -&gt; __CodecOutputReturn</h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","staging_xcm::v2::opaque::Xcm"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()