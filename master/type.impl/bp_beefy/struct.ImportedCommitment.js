(function() {var type_impls = {
"pallet_bridge_beefy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"impl\"><a href=\"#impl-Decode-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber, BlockHash, MmrHash&gt; Decode for ImportedCommitment&lt;BlockNumber, BlockHash, MmrHash&gt;<div class=\"where\">where\n    BlockNumber: Decode,\n    BlockHash: Decode,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(BlockNumber, BlockHash)</a>: Decode,\n    MmrHash: Decode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;__CodecInputEdqy&gt;(\n    __codec_input_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecInputEdqy</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;ImportedCommitment&lt;BlockNumber, BlockHash, MmrHash&gt;, Error&gt;<div class=\"where\">where\n    __CodecInputEdqy: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/1.77.0/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, Error&gt;<div class=\"where\">where\n    I: Input,</div></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","pallet_bridge_beefy::ImportedCommitment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"impl\"><a href=\"#impl-Encode-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber, BlockHash, MmrHash&gt; Encode for ImportedCommitment&lt;BlockNumber, BlockHash, MmrHash&gt;<div class=\"where\">where\n    BlockNumber: Encode,\n    BlockHash: Encode,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(BlockNumber, BlockHash)</a>: Encode,\n    MmrHash: Encode,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;__CodecOutputEdqy&gt;(\n    &amp;self,\n    __codec_dest_edqy: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;mut __CodecOutputEdqy</a>\n)<div class=\"where\">where\n    __CodecOutputEdqy: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>]) -&gt; R,</div></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","pallet_bridge_beefy::ImportedCommitment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber, BlockHash, MmrHash&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for ImportedCommitment&lt;BlockNumber, BlockHash, MmrHash&gt;<div class=\"where\">where\n    BlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    BlockHash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    MmrHash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(\n    &amp;self,\n    other: &amp;ImportedCommitment&lt;BlockNumber, BlockHash, MmrHash&gt;\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","pallet_bridge_beefy::ImportedCommitment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"impl\"><a href=\"#impl-TypeInfo-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber, BlockHash, MmrHash&gt; TypeInfo for ImportedCommitment&lt;BlockNumber, BlockHash, MmrHash&gt;<div class=\"where\">where\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(BlockNumber, BlockHash)</a>: TypeInfo + 'static,\n    MmrHash: TypeInfo + 'static,\n    BlockNumber: TypeInfo + 'static,\n    BlockHash: TypeInfo + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = ImportedCommitment&lt;BlockNumber, BlockHash, MmrHash&gt;</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","pallet_bridge_beefy::ImportedCommitment"],["<section id=\"impl-StructuralPartialEq-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber, BlockHash, MmrHash&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for ImportedCommitment&lt;BlockNumber, BlockHash, MmrHash&gt;</h3></section>","StructuralPartialEq","pallet_bridge_beefy::ImportedCommitment"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"impl\"><a href=\"#impl-Debug-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber, BlockHash, MmrHash&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for ImportedCommitment&lt;BlockNumber, BlockHash, MmrHash&gt;<div class=\"where\">where\n    BlockNumber: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    BlockHash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    MmrHash: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","pallet_bridge_beefy::ImportedCommitment"],["<section id=\"impl-EncodeLike-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"impl\"><a href=\"#impl-EncodeLike-for-ImportedCommitment%3CBlockNumber,+BlockHash,+MmrHash%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;BlockNumber, BlockHash, MmrHash&gt; EncodeLike for ImportedCommitment&lt;BlockNumber, BlockHash, MmrHash&gt;<div class=\"where\">where\n    BlockNumber: Encode,\n    BlockHash: Encode,\n    <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.tuple.html\">(BlockNumber, BlockHash)</a>: Encode,\n    MmrHash: Encode,</div></h3></section>","EncodeLike","pallet_bridge_beefy::ImportedCommitment"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()