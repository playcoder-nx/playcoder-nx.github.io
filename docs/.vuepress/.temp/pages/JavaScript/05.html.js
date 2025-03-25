import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/05.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript/05.html\",\"title\":\"JavaScript if 语句\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1. 基本语法\",\"slug\":\"_1-基本语法\",\"link\":\"#_1-基本语法\",\"children\":[]},{\"level\":2,\"title\":\"2. 分支\",\"slug\":\"_2-分支\",\"link\":\"#_2-分支\",\"children\":[]},{\"level\":2,\"title\":\"3. 例子\",\"slug\":\"_3-例子\",\"link\":\"#_3-例子\",\"children\":[{\"level\":3,\"title\":\"3.1 判断一个数是不是偶数\",\"slug\":\"_3-1-判断一个数是不是偶数\",\"link\":\"#_3-1-判断一个数是不是偶数\",\"children\":[]},{\"level\":3,\"title\":\"3.2 计算成人的标准体重\",\"slug\":\"_3-2-计算成人的标准体重\",\"link\":\"#_3-2-计算成人的标准体重\",\"children\":[]}]},{\"level\":2,\"title\":\"4. 小结\",\"slug\":\"_4-小结\",\"link\":\"#_4-小结\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"JavaScript/05.md\"}")
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
