import comp from "E:/vuepress-starter2/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://ycxhdn.com/static/template/images/major/zy15.jpg\",\"actions\":[{\"text\":\"点击了解\",\"link\":\"/课程详情.html\",\"type\":\"primary\"},{\"text\":\"详情\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"HTML+CSS\",\"details\":\"HTML 是用于创建网页结构的标记语言，通过标签定义内容的布局和组织方式。CSS 是用于控制网页样式和布局的层叠样式表，通过选择器和属性设置元素的外观和位置。\"},{\"title\":\"JavaScrit 程序设计\",\"details\":\"JavaScript 是一种动态编程语言，用于为网页添加交互功能，通过操作 DOM 和处理事件，实现丰富的用户体验。它支持多种编程范式，包括函数式编程和面向对象编程，广泛应用于前端开发、后端开发（如 Node.js）以及全栈开发。\"},{\"title\":\"响应式网站开发\",\"details\":\"响应式网站开发是一种设计方法，使网站能够根据不同设备的屏幕尺寸和分辨率自动调整布局和内容，提供一致的用户体验。通过使用 CSS 媒体查询、弹性布局（如 Flexbox 和 Grid）以及流式布局技术，响应式设计能够确保网站在手机、平板和桌面设备上都能良好显示。\"},{\"title\":\"Vue.js 应用实战\",\"details\":\"Vue.js 是一个用于构建用户界面的渐进式 JavaScript 框架，易于上手且灵活扩展。它通过组件化开发、双向数据绑定和虚拟 DOM 等特性，提升了前端开发效率与代码可维护性。\"},{\"title\":\"微信小程序\",\"details\":\"微信小程序是一种无需下载安装即可使用的应用，基于微信生态，通过跨平台开发实现多设备兼容，适合轻量级应用场景。它采用 WXML、WXSS 和 JavaScript 等技术，提供丰富的 API 接口，方便开发者接入微信支付、用户登录等功能。\"},{\"title\":\"前端其他框架的使用\",\"details\":\"React 是一个由 Facebook 推出的用于构建用户界面的开源 JavaScript 库，采用组件化开发和虚拟 DOM 技术，适合构建高性能的单页应用。Angular 是由 Google 提供的全功能前端框架，基于 TypeScript，提供模块化设计、依赖注入和双向数据绑定等功能，适用于大型企业级应用开发。\"}],\"footer\":\"MIT Licensed | Copyright © 银川新华互联网科技培训学校\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
