# Import Code Snippets

Related Issue: [Extended markdown processing configuration (#140)](https://github.com/about-code/glossarify-md/issues/140)

[vp-code]: https://vuepress.vuejs.org/guide/markdown.html#import-code-snippets

GIVEN vuepress *import code* syntax
THEN glossarify-md output MUST be equal to glossarify-md input
AND rendered vuepress output MUST be a code example
AND rendered vuepress output MUST be similar to [vuepress import code example][vp-code]
AND rendered vuepress output MUST highlight line 5


**Input**
~~~
<<< @/./input/01-vuepress/markdown-extensions/140-import-code.js{5}
~~~

**Expected Output (Markdown)**

~~~
<<< @/./input/01-vuepress/markdown-extensions/140-import-code.js{5}
~~~

**Actual Output (Rendered)**

<<< @/./input/01-vuepress/markdown-extensions/140-import-code.js{5}
