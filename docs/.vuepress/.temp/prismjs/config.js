import "E:/vuepress-starter2/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "E:/vuepress-starter2/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "E:/vuepress-starter2/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "E:/vuepress-starter2/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "E:/vuepress-starter2/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "E:/vuepress-starter2/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "E:/vuepress-starter2/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"

export default {
  setup() {
    setupCollapsedLines()
  }
}
