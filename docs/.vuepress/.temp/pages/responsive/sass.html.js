import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/responsive/sass.html.vue"
const data = JSON.parse("{\"path\":\"/responsive/sass.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"sass 混合功能\",\"slug\":\"sass-混合功能\",\"link\":\"#sass-混合功能\",\"children\":[]},{\"level\":3,\"title\":\"sass if 判断和插槽\",\"slug\":\"sass-if-判断和插槽\",\"link\":\"#sass-if-判断和插槽\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"responsive/sass.md\"}")
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
