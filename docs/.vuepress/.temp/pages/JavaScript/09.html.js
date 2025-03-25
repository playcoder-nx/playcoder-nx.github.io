import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/09.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/09.html\",\"title\":\"JavaScript 逻辑运算符\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. 与\",\"slug\":\"_1-与\",\"link\":\"#_1-与\",\"children\":[]},{\"level\":2,\"title\":\"2. 或\",\"slug\":\"_2-或\",\"link\":\"#_2-或\",\"children\":[]},{\"level\":2,\"title\":\"3. 非\",\"slug\":\"_3-非\",\"link\":\"#_3-非\",\"children\":[]},{\"level\":2,\"title\":\"4. 双重非\",\"slug\":\"_4-双重非\",\"link\":\"#_4-双重非\",\"children\":[]},{\"level\":2,\"title\":\"5. 短路逻辑\",\"slug\":\"_5-短路逻辑\",\"link\":\"#_5-短路逻辑\",\"children\":[]},{\"level\":2,\"title\":\"6. 小结\",\"slug\":\"_6-小结\",\"link\":\"#_6-小结\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"JavaScript/09.md\"}")
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
