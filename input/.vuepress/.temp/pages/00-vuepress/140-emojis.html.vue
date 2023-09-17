<template><div><h1 id="emojis" tabindex="-1"><a class="header-anchor" href="#emojis" aria-hidden="true">#</a> Emojis</h1>
<p>Related Issue: https://github.com/about-code/glossarify-md/issues/140</p>
<p>GIVEN input with vuepress emoji syntax
THEN glossarify-md output MUST match glossarify-md input
AND rendered vuepress output must be equal to <a href="https://vuepress.vuejs.org/guide/markdown.html#emoji" target="_blank" rel="noopener noreferrer">vuepress emoji example<ExternalLinkIcon/></a>.</p>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>:tada: :100:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Expected Output (Markdown)</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>:tada: :100:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Actual Output (Markdown &amp; Rendered)</strong></p>
<p>🎉 💯</p>
</div></template>


