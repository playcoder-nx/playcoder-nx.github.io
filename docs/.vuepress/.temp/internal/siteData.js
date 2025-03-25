export const siteData = JSON.parse("{\"base\":\"/./\",\"lang\":\"zh-CN\",\"title\":\"银川新华 软件开发课程浏览！\",\"description\":\"这是一个新华教育关于软件开发专业课程介绍的网站，其中介绍了课程相关的内容，欢迎大家进入了解。\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
