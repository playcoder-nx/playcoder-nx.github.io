import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/02Vue开发基础/index.html.vue"
const data = JSON.parse("{\"path\":\"/vue/02Vue%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80/\",\"title\":\"Vue 基础上\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"vue/02Vue开发基础/README.md\"}")
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
