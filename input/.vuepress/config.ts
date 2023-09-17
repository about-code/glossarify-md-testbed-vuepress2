import { getSlugger } from "glossarify-md";
import { defaultTheme } from "@vuepress/theme-default";
import footnotes from "markdown-it-footnote";
import tableOfContents from "markdown-it-toc-done-right"

import { getConfig } from "./getSidebar";

const slugify = getSlugger();
const themeConf = getConfig("./input", {
  stripNumbers: true,
  capitalizeWords: true,
  maxLevel: 2
});

export default {
  title: 'VuePress 2.x Test Bed',
  description: '',
  markdown: { slugify }
  ,theme: defaultTheme({
    sidebar: themeConf.sidebar
    // navbar:  getSidebar(pageDir)
  })
  ,plugins: [
    {
      name: "markdown-it-plugins"
      ,extendsMarkdown: md => {
        md.set({ breaks: true })
        md.use(footnotes)
        md.use(tableOfContents, {
          ...slugify
        })
      }
    }
    ,'vuepress-plugin-jsonld-playground'
  ]
}
