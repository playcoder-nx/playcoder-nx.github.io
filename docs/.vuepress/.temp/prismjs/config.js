import "E:/playcoder-nx.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "E:/playcoder-nx.github.io/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "E:/playcoder-nx.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "E:/playcoder-nx.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "E:/playcoder-nx.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "E:/playcoder-nx.github.io/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "E:/playcoder-nx.github.io/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"

export default {
  setup() {
    setupCollapsedLines()
  }
}
