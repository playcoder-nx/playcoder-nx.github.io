import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/17.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/17.html\",\"title\":\"JavaScript while 语句\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. 基本语法\",\"slug\":\"_1-基本语法\",\"link\":\"#_1-基本语法\",\"children\":[]},{\"level\":2,\"title\":\"2. 使用 while 的场景\",\"slug\":\"_2-使用-while-的场景\",\"link\":\"#_2-使用-while-的场景\",\"children\":[]},{\"level\":2,\"title\":\"3. 小结\",\"slug\":\"_3-小结\",\"link\":\"#_3-小结\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"JavaScript/17.md\"}")
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
