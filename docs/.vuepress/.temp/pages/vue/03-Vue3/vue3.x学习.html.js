import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/03-Vue3/vue3.x学习.html.vue"
const data = JSON.parse("{\"path\":\"/vue/03-Vue3/vue3.x%E5%AD%A6%E4%B9%A0.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"vue3.x 语法\",\"slug\":\"vue3-x-语法\",\"link\":\"#vue3-x-语法\",\"children\":[{\"level\":3,\"title\":\"vue3.x html 创建组件\",\"slug\":\"vue3-x-html-创建组件\",\"link\":\"#vue3-x-html-创建组件\",\"children\":[]},{\"level\":3,\"title\":\"vue3.x html 生命周期函数\",\"slug\":\"vue3-x-html-生命周期函数\",\"link\":\"#vue3-x-html-生命周期函数\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"vue/03-Vue3/vue3.x学习.md\"}")
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
