import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/3.1.html.vue"
const data = JSON.parse("{\"path\":\"/jQuery/03dom/3.1.html\",\"title\":\"Dom 基础\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"jQuery/03dom/3.1.md\"}")
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
