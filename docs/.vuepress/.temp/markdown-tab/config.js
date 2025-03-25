import { CodeTabs } from "E:/vuepress-starter2/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "E:/vuepress-starter2/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "E:/vuepress-starter2/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
