<template><div><h1 id="import-code-snippets" tabindex="-1"><a class="header-anchor" href="#import-code-snippets" aria-hidden="true">#</a> Import Code Snippets</h1>
<p>Related Issue: <a href="https://github.com/about-code/glossarify-md/issues/140" target="_blank" rel="noopener noreferrer">Extended markdown processing configuration (#140)<ExternalLinkIcon/></a></p>
<p>GIVEN vuepress <em>import code</em> syntax
THEN glossarify-md output MUST be equal to glossarify-md input
AND rendered vuepress output MUST be a code example
AND rendered vuepress output MUST be similar to <a href="https://vuepress.vuejs.org/guide/markdown.html#import-code-snippets" target="_blank" rel="noopener noreferrer">vuepress import code example<ExternalLinkIcon/></a>
AND rendered vuepress output MUST highlight line 5</p>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;&lt;&lt; @/./input/01-vuepress/markdown-extensions/140-import-code.js{5}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Expected Output (Markdown)</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>&lt;&lt;&lt; @/./input/01-vuepress/markdown-extensions/140-import-code.js{5}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Actual Output (Rendered)</strong></p>
<p>&lt;&lt;&lt; @/./input/01-vuepress/markdown-extensions/140-import-code.js{5}</p>
</div></template>


