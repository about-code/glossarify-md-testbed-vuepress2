export const data = JSON.parse("{\"key\":\"v-5789f196\",\"path\":\"/02-glossarify-md/03-index/document.html\",\"title\":\"Indexed\",\"lang\":\"en-US\",\"frontmatter\":{},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"Test Case\",\"slug\":\"test-case\",\"link\":\"#test-case\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"02-glossarify-md/03-index/document.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
