import { getSlugger } from "glossarify-md";
import { defaultTheme } from "@vuepress/theme-default";
import footnotes from "markdown-it-footnote";
import tableOfContents from "markdown-it-toc-done-right";
import getConfig from "vuepress-barista";
// import getConfig from "./getSidebar";

const slugify = getSlugger();
const { sidebar } = getConfig("./input", {
  stripNumbers: true,
  capitalizeWords: true,
  maxLevel: 2
});

export default {
  title: 'VuePress 2.x Test Bed',
  description: '',
  markdown: { slugify }
  ,theme: defaultTheme({
    sidebar: sidebar
  })
  ,plugins: [
    {
      name: "markdown-it-plugins"
      ,extendsMarkdown: (markdownIt) => {
        markdownIt.set({ breaks: true })
        markdownIt.use(footnotes)
        markdownIt.use(tableOfContents, { ...slugify })
      }
    }
    ,'vuepress-plugin-jsonld-playground'
  ]
}
