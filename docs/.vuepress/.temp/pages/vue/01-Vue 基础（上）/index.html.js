import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/01-Vue 基础（上）/index.html.vue"
const data = JSON.parse("{\"path\":\"/vue/01-Vue%20%E5%9F%BA%E7%A1%80%EF%BC%88%E4%B8%8A%EF%BC%89/\",\"title\":\"Vue 基础上\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"vue/01-Vue 基础（上）/README.md\"}")
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
