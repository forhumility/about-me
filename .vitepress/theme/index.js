/*
 * @Author       : Humility
 * @Date         : 2022-12-05 14:46:24
 * @LastEditTime : 2024-05-15
 * @LastEditors  : Humility
 * @FilePath     : \about-me\.vitepress\theme\index.js
 * @Description  :
 */

import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import Home from "./components/HumbleHome.vue";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("Home", Home);
  },
};
