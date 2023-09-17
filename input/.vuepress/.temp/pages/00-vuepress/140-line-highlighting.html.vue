<template><div><h1 id="line-highlighting" tabindex="-1"><a class="header-anchor" href="#line-highlighting" aria-hidden="true">#</a> Line Highlighting</h1>
<p>Related Issue: <a href="https://github.com/about-code/glossarify-md/issues/140" target="_blank" rel="noopener noreferrer">Extended markdown processing configuration (#140)<ExternalLinkIcon/></a></p>
<p>GIVEN vuepress <em>line highlighting in code blocks</em> syntax
THEN glossarify-md output MUST be equal to glossarify-md input
AND rendered vuepress output MUST be a code example
AND rendered vuepress output MUST be similar to <a href="https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks" target="_blank" rel="noopener noreferrer">line highlighting in code blocks example<ExternalLinkIcon/></a>
AND rendered vuepress output MUST highlight line 4</p>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Expected Output</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Actual Output (Markdown &amp; Rendered)</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'Highlighted!'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">&nbsp;</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


