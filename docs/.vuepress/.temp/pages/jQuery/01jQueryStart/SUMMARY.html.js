import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/01jQueryStart/SUMMARY.html.vue"
const data = JSON.parse("{\"path\":\"/jQuery/01jQueryStart/SUMMARY.html\",\"title\":\"Summary666\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"jQuery/01jQueryStart/SUMMARY.md\"}")
export { comp, data }

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
