# Emojis

Related Issue: https://github.com/about-code/glossarify-md/issues/140

[vp-emoji]: https://vuepress.vuejs.org/guide/markdown.html#emoji

GIVEN input with vuepress emoji syntax
THEN glossarify-md output MUST match glossarify-md input
AND rendered vuepress output must be equal to [vuepress emoji example][vp-emoji].

**Input**

~~~
:tada: :100:
~~~

**Expected Output (Markdown)**

~~~
:tada: :100:
~~~

**Actual Output (Markdown & Rendered)**

:tada: :100:
