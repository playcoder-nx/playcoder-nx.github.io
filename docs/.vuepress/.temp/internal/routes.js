export const redirects = JSON.parse("{\"/HTML+CSS/01.html\":\"/HTML_CSS/01.html\",\"/HTML+CSS/02.html\":\"/HTML_CSS/02.html\"}")

export const routes = Object.fromEntries([
  ["/bug.html", { loader: () => import(/* webpackChunkName: "bug.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/bug.html.js"), meta: {"title":"Get Started"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/%E8%AF%BE%E7%A8%8B%E8%AF%A6%E6%83%85.html", { loader: () => import(/* webpackChunkName: "课程详情.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/课程详情.html.js"), meta: {"title":"Home"} }],
  ["/excel/01.html", { loader: () => import(/* webpackChunkName: "excel_01.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/excel/01.html.js"), meta: {"title":""} }],
  ["/excel/02.html", { loader: () => import(/* webpackChunkName: "excel_02.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/excel/02.html.js"), meta: {"title":""} }],
  ["/excel/03.html", { loader: () => import(/* webpackChunkName: "excel_03.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/excel/03.html.js"), meta: {"title":""} }],
  ["/HTML_CSS/01.html", { loader: () => import(/* webpackChunkName: "HTML_CSS_01.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/HTML_CSS/01.html.js"), meta: {"title":""} }],
  ["/HTML_CSS/02.html", { loader: () => import(/* webpackChunkName: "HTML_CSS_02.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/HTML_CSS/02.html.js"), meta: {"title":""} }],
  ["/JavaScript/01.html", { loader: () => import(/* webpackChunkName: "JavaScript_01.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/01.html.js"), meta: {"title":"一、Javascript简介"} }],
  ["/JavaScript/02.html", { loader: () => import(/* webpackChunkName: "JavaScript_02.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/02.html.js"), meta: {"title":"js 的语法结构"} }],
  ["/JavaScript/03.html", { loader: () => import(/* webpackChunkName: "JavaScript_03.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/03.html.js"), meta: {"title":"JavaScript 变量"} }],
  ["/JavaScript/04.html", { loader: () => import(/* webpackChunkName: "JavaScript_04.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/04.html.js"), meta: {"title":"JavaScript 数据类型"} }],
  ["/JavaScript/05.html", { loader: () => import(/* webpackChunkName: "JavaScript_05.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/05.html.js"), meta: {"title":"JavaScript if 语句"} }],
  ["/JavaScript/06.html", { loader: () => import(/* webpackChunkName: "JavaScript_06.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/06.html.js"), meta: {"title":"for 语句"} }],
  ["/JavaScript/07.html", { loader: () => import(/* webpackChunkName: "JavaScript_07.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/07.html.js"), meta: {"title":"JavaScript 算数运算符"} }],
  ["/JavaScript/08.html", { loader: () => import(/* webpackChunkName: "JavaScript_08.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/08.html.js"), meta: {"title":"JavaScript 比较运算符"} }],
  ["/JavaScript/09.html", { loader: () => import(/* webpackChunkName: "JavaScript_09.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/09.html.js"), meta: {"title":"JavaScript 逻辑运算符"} }],
  ["/JavaScript/10.html", { loader: () => import(/* webpackChunkName: "JavaScript_10.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/10.html.js"), meta: {"title":"JavaScript 表达式"} }],
  ["/JavaScript/11.html", { loader: () => import(/* webpackChunkName: "JavaScript_11.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/11.html.js"), meta: {"title":"JavaScript 函数"} }],
  ["/JavaScript/12.html", { loader: () => import(/* webpackChunkName: "JavaScript_12.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/12.html.js"), meta: {"title":"JavaScript 对象"} }],
  ["/JavaScript/13.html", { loader: () => import(/* webpackChunkName: "JavaScript_13.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/13.html.js"), meta: {"title":"JavaScript 字符串"} }],
  ["/JavaScript/14.html", { loader: () => import(/* webpackChunkName: "JavaScript_14.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/14.html.js"), meta: {"title":"JavaScript 数字"} }],
  ["/JavaScript/15.html", { loader: () => import(/* webpackChunkName: "JavaScript_15.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/15.html.js"), meta: {"title":"JavaScript 数组"} }],
  ["/JavaScript/16.html", { loader: () => import(/* webpackChunkName: "JavaScript_16.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/16.html.js"), meta: {"title":"JavaScript switch 语句"} }],
  ["/JavaScript/17.html", { loader: () => import(/* webpackChunkName: "JavaScript_17.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/17.html.js"), meta: {"title":"JavaScript while 语句"} }],
  ["/JavaScript/18.html", { loader: () => import(/* webpackChunkName: "JavaScript_18.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/18.html.js"), meta: {"title":"JavaScript 的 break 与 continue"} }],
  ["/JavaScript/19.html", { loader: () => import(/* webpackChunkName: "JavaScript_19.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/19.html.js"), meta: {"title":"document.cookie"} }],
  ["/JavaScript/ajax.html", { loader: () => import(/* webpackChunkName: "JavaScript_ajax.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/ajax.html.js"), meta: {"title":""} }],
  ["/responsive/01flex.html", { loader: () => import(/* webpackChunkName: "responsive_01flex.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/responsive/01flex.html.js"), meta: {"title":"Flex 布局：语法篇"} }],
  ["/responsive/02grid.html", { loader: () => import(/* webpackChunkName: "responsive_02grid.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/responsive/02grid.html.js"), meta: {"title":"CSS Grid 网格布局"} }],
  ["/responsive/less.html", { loader: () => import(/* webpackChunkName: "responsive_less.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/responsive/less.html.js"), meta: {"title":""} }],
  ["/responsive/sass.html", { loader: () => import(/* webpackChunkName: "responsive_sass.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/responsive/sass.html.js"), meta: {"title":""} }],
  ["/responsive/tailWindcss1.html", { loader: () => import(/* webpackChunkName: "responsive_tailWindcss1.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/responsive/tailWindcss1.html.js"), meta: {"title":""} }],
  ["/responsive/%E5%93%8D%E5%BA%94%E5%BC%8F.html", { loader: () => import(/* webpackChunkName: "responsive_响应式.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/responsive/响应式.html.js"), meta: {"title":""} }],
  ["/jQuery/01jQueryStart/1.1.html", { loader: () => import(/* webpackChunkName: "jQuery_01jQueryStart_1.1.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/01jQueryStart/1.1.html.js"), meta: {"title":""} }],
  ["/jQuery/01jQueryStart/1.2.html", { loader: () => import(/* webpackChunkName: "jQuery_01jQueryStart_1.2.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/01jQueryStart/1.2.html.js"), meta: {"title":""} }],
  ["/jQuery/01jQueryStart/", { loader: () => import(/* webpackChunkName: "jQuery_01jQueryStart_index.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/01jQueryStart/index.html.js"), meta: {"title":""} }],
  ["/jQuery/01jQueryStart/SUMMARY.html", { loader: () => import(/* webpackChunkName: "jQuery_01jQueryStart_SUMMARY.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/01jQueryStart/SUMMARY.html.js"), meta: {"title":"Summary666"} }],
  ["/jQuery/02selector/2.1.html", { loader: () => import(/* webpackChunkName: "jQuery_02selector_2.1.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/2.1.html.js"), meta: {"title":"2.2.1基础选择器"} }],
  ["/jQuery/02selector/2.10.html", { loader: () => import(/* webpackChunkName: "jQuery_02selector_2.10.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/2.10.html.js"), meta: {"title":"综合案例应用"} }],
  ["/jQuery/02selector/2.2.html", { loader: () => import(/* webpackChunkName: "jQuery_02selector_2.2.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/2.2.html.js"), meta: {"title":"层级选择器"} }],
  ["/jQuery/02selector/2.3.html", { loader: () => import(/* webpackChunkName: "jQuery_02selector_2.3.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/2.3.html.js"), meta: {"title":"简单过滤选择器"} }],
  ["/jQuery/02selector/2.4.html", { loader: () => import(/* webpackChunkName: "jQuery_02selector_2.4.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/2.4.html.js"), meta: {"title":"内容过滤选择器"} }],
  ["/jQuery/02selector/2.5.html", { loader: () => import(/* webpackChunkName: "jQuery_02selector_2.5.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/2.5.html.js"), meta: {"title":"可见性过滤选择器"} }],
  ["/jQuery/02selector/2.6.html", { loader: () => import(/* webpackChunkName: "jQuery_02selector_2.6.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/2.6.html.js"), meta: {"title":"属性过滤选择器"} }],
  ["/jQuery/02selector/2.7.html", { loader: () => import(/* webpackChunkName: "jQuery_02selector_2.7.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/2.7.html.js"), meta: {"title":"子元素过滤选择器"} }],
  ["/jQuery/02selector/2.8.html", { loader: () => import(/* webpackChunkName: "jQuery_02selector_2.8.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/2.8.html.js"), meta: {"title":"表单选择器"} }],
  ["/jQuery/02selector/2.9.html", { loader: () => import(/* webpackChunkName: "jQuery_02selector_2.9.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/2.9.html.js"), meta: {"title":"表单选择器"} }],
  ["/jQuery/02selector/", { loader: () => import(/* webpackChunkName: "jQuery_02selector_index.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/02selector/index.html.js"), meta: {"title":""} }],
  ["/jQuery/03dom/3.1.html", { loader: () => import(/* webpackChunkName: "jQuery_03dom_3.1.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/3.1.html.js"), meta: {"title":"Dom 基础"} }],
  ["/jQuery/03dom/3.2.html", { loader: () => import(/* webpackChunkName: "jQuery_03dom_3.2.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/3.2.html.js"), meta: {"title":"3.2 访问元素"} }],
  ["/jQuery/03dom/3.3.html", { loader: () => import(/* webpackChunkName: "jQuery_03dom_3.3.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/3.3.html.js"), meta: {"title":"3.3 创建节点元素"} }],
  ["/jQuery/03dom/3.4.html", { loader: () => import(/* webpackChunkName: "jQuery_03dom_3.4.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/3.4.html.js"), meta: {"title":"3.4 插入节点"} }],
  ["/jQuery/03dom/3.5.html", { loader: () => import(/* webpackChunkName: "jQuery_03dom_3.5.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/3.5.html.js"), meta: {"title":""} }],
  ["/jQuery/03dom/3.6.html", { loader: () => import(/* webpackChunkName: "jQuery_03dom_3.6.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/3.6.html.js"), meta: {"title":""} }],
  ["/jQuery/03dom/3.7.html", { loader: () => import(/* webpackChunkName: "jQuery_03dom_3.7.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/3.7.html.js"), meta: {"title":""} }],
  ["/jQuery/03dom/3.8.html", { loader: () => import(/* webpackChunkName: "jQuery_03dom_3.8.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/3.8.html.js"), meta: {"title":""} }],
  ["/jQuery/03dom/3.9.html", { loader: () => import(/* webpackChunkName: "jQuery_03dom_3.9.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/3.9.html.js"), meta: {"title":""} }],
  ["/jQuery/03dom/", { loader: () => import(/* webpackChunkName: "jQuery_03dom_index.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/03dom/index.html.js"), meta: {"title":""} }],
  ["/jQuery/04event/01.html", { loader: () => import(/* webpackChunkName: "jQuery_04event_01.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/04event/01.html.js"), meta: {"title":""} }],
  ["/jQuery/04event/", { loader: () => import(/* webpackChunkName: "jQuery_04event_index.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/04event/index.html.js"), meta: {"title":""} }],
  ["/jQuery/04event/SUMMARY.html", { loader: () => import(/* webpackChunkName: "jQuery_04event_SUMMARY.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/04event/SUMMARY.html.js"), meta: {"title":"Summary666"} }],
  ["/jQuery/05animate/5.1.html", { loader: () => import(/* webpackChunkName: "jQuery_05animate_5.1.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/05animate/5.1.html.js"), meta: {"title":""} }],
  ["/jQuery/05animate/5.2.html", { loader: () => import(/* webpackChunkName: "jQuery_05animate_5.2.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/05animate/5.2.html.js"), meta: {"title":""} }],
  ["/jQuery/05animate/5.3.html", { loader: () => import(/* webpackChunkName: "jQuery_05animate_5.3.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/05animate/5.3.html.js"), meta: {"title":""} }],
  ["/jQuery/05animate/5.4.html", { loader: () => import(/* webpackChunkName: "jQuery_05animate_5.4.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/05animate/5.4.html.js"), meta: {"title":""} }],
  ["/jQuery/05animate/5.5.html", { loader: () => import(/* webpackChunkName: "jQuery_05animate_5.5.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/05animate/5.5.html.js"), meta: {"title":""} }],
  ["/jQuery/05animate/", { loader: () => import(/* webpackChunkName: "jQuery_05animate_index.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/05animate/index.html.js"), meta: {"title":""} }],
  ["/jQuery/05animate/SUMMARY.html", { loader: () => import(/* webpackChunkName: "jQuery_05animate_SUMMARY.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/05animate/SUMMARY.html.js"), meta: {"title":"Summary666"} }],
  ["/jQuery/06ajax/01.html", { loader: () => import(/* webpackChunkName: "jQuery_06ajax_01.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/06ajax/01.html.js"), meta: {"title":""} }],
  ["/jQuery/06ajax/02.html", { loader: () => import(/* webpackChunkName: "jQuery_06ajax_02.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/06ajax/02.html.js"), meta: {"title":""} }],
  ["/jQuery/06ajax/", { loader: () => import(/* webpackChunkName: "jQuery_06ajax_index.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/06ajax/index.html.js"), meta: {"title":""} }],
  ["/jQuery/06ajax/SUMMARY.html", { loader: () => import(/* webpackChunkName: "jQuery_06ajax_SUMMARY.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/jQuery/06ajax/SUMMARY.html.js"), meta: {"title":"Summary666"} }],
  ["/vue/01%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/1.1%E5%88%9D%E8%AF%86Vue.html", { loader: () => import(/* webpackChunkName: "vue_01开发入门_1.1初识Vue.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/01开发入门/1.1初识Vue.html.js"), meta: {"title":""} }],
  ["/vue/01%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/1.2Vue%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.html", { loader: () => import(/* webpackChunkName: "vue_01开发入门_1.2Vue开发环境.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/01开发入门/1.2Vue开发环境.html.js"), meta: {"title":""} }],
  ["/vue/01%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8/", { loader: () => import(/* webpackChunkName: "vue_01开发入门_index.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/01开发入门/index.html.js"), meta: {"title":"银川新华互联网科技学校课程：vue.js 应用开发实战"} }],
  ["/vue/02Vue%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80/2.1Vue%E5%AE%9E%E4%BE%8B.html", { loader: () => import(/* webpackChunkName: "vue_02Vue开发基础_2.1Vue实例.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/02Vue开发基础/2.1Vue实例.html.js"), meta: {"title":""} }],
  ["/vue/02Vue%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80/2.2Vue%E6%95%B0%E6%8D%AE%E7%BB%91%E5%AE%9A.html", { loader: () => import(/* webpackChunkName: "vue_02Vue开发基础_2.2Vue数据绑定.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/02Vue开发基础/2.2Vue数据绑定.html.js"), meta: {"title":""} }],
  ["/vue/02Vue%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80/2.3Vue%E4%BA%8B%E4%BB%B6.html", { loader: () => import(/* webpackChunkName: "vue_02Vue开发基础_2.3Vue事件.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/02Vue开发基础/2.3Vue事件.html.js"), meta: {"title":""} }],
  ["/vue/02Vue%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80/2.4Vue%E7%BB%84%E4%BB%B6.html", { loader: () => import(/* webpackChunkName: "vue_02Vue开发基础_2.4Vue组件.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/02Vue开发基础/2.4Vue组件.html.js"), meta: {"title":""} }],
  ["/vue/02Vue%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80/2.5Vue%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html", { loader: () => import(/* webpackChunkName: "vue_02Vue开发基础_2.5Vue生命周期.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/02Vue开发基础/2.5Vue生命周期.html.js"), meta: {"title":""} }],
  ["/vue/02Vue%E5%BC%80%E5%8F%91%E5%9F%BA%E7%A1%80/", { loader: () => import(/* webpackChunkName: "vue_02Vue开发基础_index.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/02Vue开发基础/index.html.js"), meta: {"title":"Vue 基础上"} }],
  ["/vue/03-Vue3/vue3.x%E5%AD%A6%E4%B9%A0.html", { loader: () => import(/* webpackChunkName: "vue_03-Vue3_vue3.x学习.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/vue/03-Vue3/vue3.x学习.html.js"), meta: {"title":""} }],
  ["/weixin/01/1.1.html", { loader: () => import(/* webpackChunkName: "weixin_01_1.1.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/weixin/01/1.1.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/JavaScript/.~ajax.html", { loader: () => import(/* webpackChunkName: "JavaScript_.~ajax.html" */"E:/vuepress-starter2/docs/.vuepress/.temp/pages/JavaScript/.~ajax.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
