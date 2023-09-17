<template><div><h1 id="custom-containers" tabindex="-1"><a class="header-anchor" href="#custom-containers" aria-hidden="true">#</a> Custom Containers</h1>
<p>Related Issue: https://github.com/about-code/glossarify-md/issues/140</p>
<p>GIVEN input with vuepress <em>Custom Containers</em> syntax
THEN actual glossarify-md output MUST be equal to glossarify-md input
AND rendered vuepress output MUST equal <a href="https://vuepress.vuejs.org/guide/markdown.html#custom-containers" target="_blank" rel="noopener noreferrer">custom containers example<ExternalLinkIcon/></a>.</p>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Expected Output (Markdown)</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Actual Output (Markdown &amp; Rendered)</strong></p>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>This is a tip</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>This is a warning</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>This is a dangerous warning</p>
</div>
<details class="custom-container details">
<p>This is a details block, which does not work in IE / Edge</p>
</details>
</div></template>


