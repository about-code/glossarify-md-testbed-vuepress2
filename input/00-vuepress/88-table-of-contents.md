# markdown-it plug-ins

Related Issue: https://github.com/about-code/glossarify-md/issues/88

[vp-toc]: https://v1.vuepress.vuejs.org/guide/markdown.html#table-of-contents

## Test Case: markdown-it-table-of-contents (vuepress default)

GIVEN vuepress table-of-contents syntax `[[toc]]`
THEN glossarify-md output must be equal to glossarify-md input
AND rendered vuepress output must be a list of heading links
AND list must be rendered similar to [vuepress ToC example][vp-toc].

**Input**

~~~
[[toc]]
~~~

**Expected Output**

~~~
[[toc]]
~~~

**Actual Output (Rendered)**

[[toc]]


## Test Case: markdown-it-toc-done-right

With this plug-in we can use `${toc}` as a placeholder. Since it doesn't
use vuepress' slugger we need to make it use the *glossarify-md* slugger which we
also use with *vuepress*:

*.vuepress/config.js*
```js
const slugger = require("glossarify-md").getSlugger();
module.exports = {
    // ...
    "markdown": {
        slugify: slugger,                                    // vuepress
        extendMarkdown: (md) => {
            md.use(require('markdown-it-toc-done-right'), {
                slugify: slugger                             // toc
            })
        }
   }
}
```

**Input**

~~~
${toc}
~~~

**Expected Output (Markdown)**

~~~
${toc}
~~~

**Actual Output (Markdown & Rendered)**

${toc}
