import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/excel/02.html.vue"
const data = JSON.parse("{\"path\":\"/excel/02.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"重点及难点\",\"slug\":\"重点及难点\",\"link\":\"#重点及难点\",\"children\":[{\"level\":3,\"title\":\"一、设置单元格格式\",\"slug\":\"一、设置单元格格式\",\"link\":\"#一、设置单元格格式\",\"children\":[]},{\"level\":3,\"title\":\"二、自动填充数据\",\"slug\":\"二、自动填充数据\",\"link\":\"#二、自动填充数据\",\"children\":[]},{\"level\":3,\"title\":\"作业：\",\"slug\":\"作业\",\"link\":\"#作业\",\"children\":[]},{\"level\":3,\"title\":\"总结：\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"excel/02.md\"}")
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
