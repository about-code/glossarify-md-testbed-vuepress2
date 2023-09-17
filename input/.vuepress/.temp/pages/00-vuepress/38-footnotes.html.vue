<template><div><h1 id="footnotes" tabindex="-1"><a class="header-anchor" href="#footnotes" aria-hidden="true">#</a> Footnotes</h1>
<p>Related Issue: https://github.com/about-code/glossarify-md/issues/38</p>
<p>GIVEN input with <em>Footnotes</em> syntax THEN actual glossarify-md output MUST be equal to glossarify-md input</p>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>This is a text with a footnote [^footnote].
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This is a text with a footnote [^footnote].</p>
<p><strong>Expected Output (Markdown)</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[^footnote]: Footnote Definition
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Actual Output (Markdown &amp; Rendered)</strong></p>
<p>[^footnote]: Footnote Definition</p>
</div></template>


