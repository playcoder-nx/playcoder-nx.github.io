import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/HTML_CSS/01.html.vue"
const data = JSON.parse("{\"path\":\"/HTML_CSS/01.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"photoshop 切图工具使用\",\"slug\":\"photoshop-切图工具使用\",\"link\":\"#photoshop-切图工具使用\",\"children\":[{\"level\":3,\"title\":\"矩形选框工具：\",\"slug\":\"矩形选框工具\",\"link\":\"#矩形选框工具\",\"children\":[]},{\"level\":3,\"title\":\"切片工具\",\"slug\":\"切片工具\",\"link\":\"#切片工具\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"HTML+CSS/01.md\"}")
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
