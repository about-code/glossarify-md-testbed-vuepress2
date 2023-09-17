# Custom Containers

Related Issue: https://github.com/about-code/glossarify-md/issues/140

[vp-cc]: https://vuepress.vuejs.org/guide/markdown.html#custom-containers

GIVEN input with vuepress *Custom Containers* syntax
THEN actual glossarify-md output MUST be equal to glossarify-md input
AND rendered vuepress output MUST equal [custom containers example][vp-cc].

**Input**

~~~
::: tip
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
~~~

**Expected Output (Markdown)**

~~~
::: tip
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
~~~

**Actual Output (Markdown & Rendered)**

::: tip
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
