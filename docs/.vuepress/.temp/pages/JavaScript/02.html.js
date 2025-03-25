import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/02.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/02.html\",\"title\":\"js 的语法结构\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"JavaScript代码引入方式\",\"slug\":\"javascript代码引入方式\",\"link\":\"#javascript代码引入方式\",\"children\":[{\"level\":3,\"title\":\"行内式：\",\"slug\":\"行内式\",\"link\":\"#行内式\",\"children\":[]},{\"level\":3,\"title\":\"嵌入式：\",\"slug\":\"嵌入式\",\"link\":\"#嵌入式\",\"children\":[]},{\"level\":3,\"title\":\"外链式：\",\"slug\":\"外链式\",\"link\":\"#外链式\",\"children\":[]},{\"level\":3,\"title\":\"输入输出语句\",\"slug\":\"输入输出语句\",\"link\":\"#输入输出语句\",\"children\":[]},{\"level\":3,\"title\":\"JavaScript注释\",\"slug\":\"javascript注释\",\"link\":\"#javascript注释\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"JavaScript/02.md\"}")
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
