/**
 * @Author       : Humility
 * @Date         : 2022-09-09 10:11:20
 * @LastEditTime : 2022-09-10 10:42:16
 * @LastEditors  : Humility
 * @FilePath     : \about-me\.vitepress\config.ts
 * @Description  : 配置文件
 */
import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Humility",
  titleTemplate: "谦逊",
  appearance: true,
  lang: "zh-CN",
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "assets/images/logo.png",
    siteTitle: "Humility",
    socialLinks: [
      { icon: "github", link: "https://github.com/forhumility/about-me" },
    ],
    footer: {
      message: "桂ICP备19010714号",
      copyright: "Copyright © 2022 Humility",
    },
  },
});
