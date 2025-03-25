import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/weixin/1.1.html.vue"
const data = JSON.parse("{\"path\":\"/weixin/1.1.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"1.1.1 什么是微信小程序\",\"slug\":\"_1-1-1-什么是微信小程序\",\"link\":\"#_1-1-1-什么是微信小程序\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"weixin/1.1.md\"}")
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
