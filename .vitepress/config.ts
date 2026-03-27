/**
 * @Author       : Humility
 * @Date         : 2022-09-09 10:11:20
 * @LastEditTime : 2024-04-30 16:16:27
 * @LastEditors  : Humility
 * @FilePath     : \about-me\.vitepress\config.ts
 * @Description  : 配置文件
 */

export default {
  vite: {
    server: {
      port: 9933,
    },
  },
  title: "Humility",
  titleTemplate: "谦逊",
  appearance: true,
  lang: "zh-CN",
  head: [
    ['meta', { name: 'description', content: '陈成福 - 前端工程师个人简历，擅长 Vue/WebGL/Unity3D/WebGIS，5年以上开发经验' }],
    ['meta', { property: 'og:title', content: 'Humility - 前端工程师' }],
    ['meta', { property: 'og:description', content: '陈成福的个人使用手册，前端工程师，擅长 Vue、WebGL、Unity3D、WebGIS' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'keywords', content: '前端工程师,Vue,WebGL,Unity3D,WebGIS,TypeScript,简历,陈成福' }],
    ['meta', { name: 'author', content: '陈成福' }],
  ],
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "/assets/images/logo.png",
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
      message: '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">桂 ICP 备 19010714号</a>',
      copyright: "Copyright © 2022 Humility",
    },
  },
};
