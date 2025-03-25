import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '银川新华 软件开发课程浏览！',
    description: '这是一个新华教育关于软件开发专业课程介绍的网站，其中介绍了课程相关的内容，欢迎大家进入了解。',
    base: '/playcoder-nx/', // 使用相对路径，读取相对路径下的静态文件
    theme: defaultTheme({
        logo: 'https://ycxhdn.com/favicon.ico',
        navbar: [{
                text: '主页',
                link: '/',
            },

            {
                text: 'HTML+CSS',
                children: [
                    { text: 'photoshop切图', link: '/HTML+CSS/01.md' },
                    { text: '前端开发环境配置', link: '/HTML+CSS/02.md' },
                ],
            },
            {
                text: 'JavaScript',
                children: [
                    { text: 'JavaScript 简介', link: '/JavaScript/01.md' },
                    { text: 'JavaScript 语法结构', link: '/JavaScript/02.md' },
                    { text: 'JavaScript 变量', link: '/JavaScript/03.md' },
                    { text: 'JavaScript 数据类型', link: '/JavaScript/04.md' },
                    { text: 'JavaScript if 语句', link: '/JavaScript/05.md' },
                    { text: 'JavaScript for 语句', link: '/JavaScript/06.md' },
                    { text: 'JavaScript 算术运算符', link: '/JavaScript/07.md' },
                    { text: 'JavaScript 比较运算符', link: '/JavaScript/08.md' },
                    { text: 'JavaScript 逻辑运算符', link: '/JavaScript/09.md' },
                    { text: 'JavaScript 表达式', link: '/JavaScript/10.md' },
                    { text: 'JavaScript 函数', link: '/JavaScript/11.md' },
                    { text: 'JavaScript 对象', link: '/JavaScript/12.md' },
                    { text: 'JavaScript 字符串', link: '/JavaScript/13.md' },
                    { text: 'JavaScript 数字', link: '/JavaScript/14.md' },
                    { text: 'JavaScript 数组', link: '/JavaScript/15.md' },
                    { text: 'JavaScript switch 语句', link: '/JavaScript/16.md' },
                    { text: 'JavaScript while 语句', link: '/JavaScript/17.md' },
                    { text: 'JavaScript break 与 continue', link: '/JavaScript/18.md' },
                    { text: 'JavaScript cookie', link: '/JavaScript/19.md' },
                ],
            },
            {
                text: '响应式网站开发',
                children: [
                    { text: '响应式网站开发', link: '/responsive/响应式.md' },
                    { text: '响应式网站开发less', link: '/responsive/less.md' },
                    { text: '响应式网站开发sass', link: '/responsive/sass.md' },
                    { text: '响应式网站开发tailWindcss1', link: '/responsive/tailWindcss1.md' },
                    { text: '响应式网站开发flex', link: '/responsive/01flex.md' },
                    { text: '响应式网站开发grid', link: '/responsive/02grid.md' },
                ],
            },
            {
                text: 'jQuery',
                children: [
                    // {text:'vuepress参考', link: '/vuepress参考.md'}, // 可不写后缀 .md
                    { text: 'jQuery 概述', link: '/jQuery/01jQueryStart/1.1.md' },
                    { text: 'jQuery 对象', link: '/jQuery/01jQueryStart/1.2.md' },
                    { text: 'jQuery 基础选择器', link: '/jQuery/02selector/2.1.md' },
                    { text: 'jQuery 层级选择器', link: '/jQuery/02selector/2.2.md' },
                    { text: 'jQuery 简单过滤选择器', link: '/jQuery/02selector/2.3.md' },
                    { text: 'jQuery 内容过滤选择器', link: '/jQuery/02selector/2.4.md' },
                    { text: 'jQuery 可见性过滤选择器', link: '/jQuery/02selector/2.5.md' },
                    { text: 'jQuery 属性过滤选择器', link: '/jQuery/02selector/2.6.md' },
                    { text: 'jQuery 子元素过滤选择器', link: '/jQuery/02selector/2.7.md' },
                    { text: 'jQuery 表单属性选择器', link: '/jQuery/02selector/2.8.md' },
                    { text: 'jQuery 表单选择器', link: '/jQuery/02selector/2.9.md' },
                    { text: 'jQuery 综合案例', link: '/jQuery/02selector/2.10.md' },
                    { text: 'jQuery dom基础', link: '/jQuery/03dom/3.1.md' },
                    { text: 'jQuery 访问元素', link: '/jQuery/03dom/3.2.md' },
                    { text: 'jQuery 创建节点元素', link: '/jQuery/03dom/3.3.md' },
                    { text: 'jQuery 插入节点元素', link: '/jQuery/03dom/3.4.md' },
                    { text: 'jQuery 复制节点元素', link: '/jQuery/03dom/3.5.md' },
                    { text: 'jQuery 替换节点元素', link: '/jQuery/03dom/3.6.md' },
                    { text: 'jQuery 包裹节点元素', link: '/jQuery/03dom/3.7.md' },
                    { text: 'jQuery 遍历节点元素', link: '/jQuery/03dom/3.8.md' },
                    { text: 'jQuery 删除元素', link: '/jQuery/03dom/3.9.md' },
                    { text: 'jQuery 事件', link: '/jQuery/04event/01.md' },
                    { text: 'jQuery 显示与隐藏', link: '/jQuery/05animate/5.1.md' },
                    { text: 'jQuery 加载异步数据', link: '/jQuery/06ajax/01.md' },
                    { text: 'baidu', link: 'https://www.baidu.com/' } // 外部链接
                ]
            },
            {
                text: 'vue',
                children: [
                    { text: 'vue 开发入门', link: '/vue/01开发入门/1.1初识Vue.md' },
                    { text: 'vue 开发环境', link: '/vue/01开发入门/1.2Vue开发环境.md' },
                    { text: 'vue 实例', link: '/vue/02Vue开发基础/2.1Vue实例.md' },
                    { text: 'Vue 数据绑定', link: '/vue/02Vue开发基础/2.2Vue数据绑定.md' },
                    { text: 'Vue 事件', link: '/vue/02Vue开发基础/2.3Vue事件.md' },
                    { text: 'Vue 组件', link: '/vue/02Vue开发基础/2.4Vue组件.md' },
                    { text: 'Vue 组件', link: '/vue/02Vue开发基础/2.5Vue生命周期.md' },
                ]
            },
            {
                text: '微信小程序',
                children: [
                    { text: '微信小程序开发入门', link: '/weixin/01/1.1.md' }
                ]
            },
            {
                text: '常见问题',
                link: '/bug.md',
            },
            {
                text: '办公自动化',
                children: [
                    { text: 'excel 单元格基础操作', link: '/excel/01.md' },
                    { text: 'excel 单元格格式', link: '/excel/02.md' },
                    { text: 'excel 设置条件格式', link: '/excel/03.md' },
                ]
            },
            {
                text: 'vuepress语法参考',
                link: '/get-started.md',
            }
        ],
        colorMode: 'dark',
    }),


    bundler: viteBundler(),
})