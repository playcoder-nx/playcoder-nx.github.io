import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/18.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/18.html\",\"title\":\"JavaScript 的 break 与 continue\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. break\",\"slug\":\"_1-break\",\"link\":\"#_1-break\",\"children\":[]},{\"level\":2,\"title\":\"2. continue\",\"slug\":\"_2-continue\",\"link\":\"#_2-continue\",\"children\":[]},{\"level\":2,\"title\":\"3. 小结\",\"slug\":\"_3-小结\",\"link\":\"#_3-小结\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"JavaScript/18.md\"}")
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
