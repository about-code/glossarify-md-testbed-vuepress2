# Line Highlighting

Related Issue: [Extended markdown processing configuration (#140)](https://github.com/about-code/glossarify-md/issues/140)

[vp-lh]: https://vuepress.vuejs.org/guide/markdown.html#line-highlighting-in-code-blocks

GIVEN vuepress *line highlighting in code blocks* syntax
THEN glossarify-md output MUST be equal to glossarify-md input
AND rendered vuepress output MUST be a code example
AND rendered vuepress output MUST be similar to [line highlighting in code blocks example][vp-lh]
AND rendered vuepress output MUST highlight line 4


**Input**

~~~
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
~~~

**Expected Output**

~~~
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
~~~

**Actual Output (Markdown & Rendered)**

``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
