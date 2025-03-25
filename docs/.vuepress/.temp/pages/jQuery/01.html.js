import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/01.html.vue"
const data = JSON.parse("{\"path\":\"/jQuery/01.html\",\"title\":\"一、Javascript简介\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1.1 js的前世今生\",\"slug\":\"_1-1-js的前世今生\",\"link\":\"#_1-1-js的前世今生\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"jQuery/01.md\"}")
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
