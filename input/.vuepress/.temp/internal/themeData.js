export const themeData = JSON.parse("{\"sidebar\":[\"/README.md\",{\"text\":\"vuepress\",\"link\":\"/00-vuepress/README.md\",\"children\":[\"/00-vuepress/README.md\",\"/00-vuepress/140-custom-containers.md\",\"/00-vuepress/140-emojis.md\",\"/00-vuepress/140-import-code.md\",\"/00-vuepress/140-line-highlighting.md\",\"/00-vuepress/38-footnotes.md\",\"/00-vuepress/88-table-of-contents.md\"],\"collapsible\":true},{\"text\":\"vuepress plugins\",\"link\":\"/01-vuepress-plugins/README.md\",\"children\":[\"/01-vuepress-plugins/README.md\"],\"collapsible\":true},{\"text\":\"glossarify md\",\"link\":\"/02-glossarify-md/README.md\",\"children\":[\"/02-glossarify-md/README.md\",{\"text\":\"multiple glossaries\",\"link\":\"/02-glossarify-md/02-multiple-glossaries/document.md\",\"children\":[\"/02-glossarify-md/02-multiple-glossaries/document.md\",\"/02-glossarify-md/02-multiple-glossaries/glossary-1.md\",\"/02-glossarify-md/02-multiple-glossaries/glossary-2.md\"],\"collapsible\":true},{\"text\":\"index\",\"link\":\"/02-glossarify-md/03-index/document.md\",\"children\":[\"/02-glossarify-md/03-index/document.md\",\"/02-glossarify-md/03-index/glossary.md\"],\"collapsible\":true},{\"text\":\"slugs with umlauts\",\"link\":\"/02-glossarify-md/27-slugs-with-umlauts/document.md\",\"children\":[\"/02-glossarify-md/27-slugs-with-umlauts/document.md\",\"/02-glossarify-md/27-slugs-with-umlauts/glossary.md\"],\"collapsible\":true}],\"collapsible\":true}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
