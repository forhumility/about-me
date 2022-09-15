/**
 * @Author       : Humility
 * @Date         : 2022-09-09 10:11:20
 * @LastEditTime : 2022-09-15 17:32:39
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
    nav: [
      {
        text: "指引",
        link: "/guide/",
        activeMatch: "/guide/",
      },
      {
        text: "案例",
        link: "/example/",
        activeMatch: "/example/",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指引",
          items: [
            { text: "简介", link: "/guide/" },
            { text: "准备", link: "/guide/ready.md" },
            { text: "技能", link: "/guide/skill.md" },
          ],
        },
      ],
      "/example/": [
        {
          text: "工作经历",
          items: [
            { text: "参与项目", link: "/example/" },
            { text: "工作职责", link: "/example/duty.md" },
          ],
        },
        {
          text: "个人作品",
          items: [{ text: "项目概览", link: "/example/personal.md" }],
        },
      ],
    },
    footer: {
      message: "桂ICP备19010714号",
      copyright: "Copyright © 2022 Humility",
    },
  },
});
