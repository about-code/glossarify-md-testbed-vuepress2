<template><div><h1 id="markdown-it-plug-ins" tabindex="-1"><a class="header-anchor" href="#markdown-it-plug-ins" aria-hidden="true">#</a> markdown-it plug-ins</h1>
<p>Related Issue: https://github.com/about-code/glossarify-md/issues/88</p>
<h2 id="test-case-markdown-it-table-of-contents-vuepress-default" tabindex="-1"><a class="header-anchor" href="#test-case-markdown-it-table-of-contents-vuepress-default" aria-hidden="true">#</a> Test Case: markdown-it-table-of-contents (vuepress default)</h2>
<p>GIVEN vuepress table-of-contents syntax <code v-pre>[[toc]]</code>
THEN glossarify-md output must be equal to glossarify-md input
AND rendered vuepress output must be a list of heading links
AND list must be rendered similar to <a href="https://v1.vuepress.vuejs.org/guide/markdown.html#table-of-contents" target="_blank" rel="noopener noreferrer">vuepress ToC example<ExternalLinkIcon/></a>.</p>
<p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[[toc]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Expected Output</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>[[toc]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Actual Output (Rendered)</strong></p>
<nav class="table-of-contents"><ul><li><router-link to="#test-case-markdown-it-table-of-contents-vuepress-default">Test Case: markdown-it-table-of-contents (vuepress default)</router-link></li><li><router-link to="#test-case-markdown-it-toc-done-right">Test Case: markdown-it-toc-done-right</router-link></li></ul></nav>
<h2 id="test-case-markdown-it-toc-done-right" tabindex="-1"><a class="header-anchor" href="#test-case-markdown-it-toc-done-right" aria-hidden="true">#</a> Test Case: markdown-it-toc-done-right</h2>
<p>With this plug-in we can use <code v-pre>${toc}</code> as a placeholder. Since it doesn't
use vuepress' slugger we need to make it use the <em>glossarify-md</em> slugger which we
also use with <em>vuepress</em>:</p>
<p><em>.vuepress/config.js</em></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> slugger <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"glossarify-md"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSlugger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token string-property property">"markdown"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">slugify</span><span class="token operator">:</span> slugger<span class="token punctuation">,</span>                                    <span class="token comment">// vuepress</span>
        <span class="token function-variable function">extendMarkdown</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'markdown-it-toc-done-right'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">slugify</span><span class="token operator">:</span> slugger                             <span class="token comment">// toc</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Input</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>${toc}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Expected Output (Markdown)</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>${toc}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Actual Output (Markdown &amp; Rendered)</strong></p>
<p>${toc}</p>
</div></template>


