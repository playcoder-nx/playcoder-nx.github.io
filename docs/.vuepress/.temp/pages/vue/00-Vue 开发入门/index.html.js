import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/00-Vue 开发入门/index.html.vue"
const data = JSON.parse("{\"path\":\"/vue/00-Vue%20%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/\",\"title\":\"银川新华互联网科技学校课程：vue.js 应用开发实战\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"vue/00-Vue 开发入门/README.md\"}")
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
