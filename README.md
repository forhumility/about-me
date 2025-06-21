# 个人介绍网站 - 谦逊的使用指南

![版本](https://img.shields.io/badge/版本-0.2.0-blue)
![协议](https://img.shields.io/badge/协议-MIT-green)

## 项目简介

这是一个基于 VitePress 构建的个人介绍网站，展示了前端工程师陈成福（Humility）的个人技能、工作经历和项目案例。网站采用现代化的设计风格，提供了良好的用户体验和响应式布局。

## 技术栈

- **框架**：VitePress v1.1.4
- **语言**：Vue 3、TypeScript
- **部署**：支持 Docker 容器化部署

## 功能特点

网站主要包含以下内容：

- **个人简介**：展示个人基本信息和技术方向
- **技能清单**：详细介绍掌握的技术栈
  - HTML5/CSS3
  - JavaScript/TypeScript
  - Vue2/Vue3
  - NodeJS/NestJS
  - C#/Unity3D
  - Docker/CI/CD
- **工作经历**：展示参与过的项目和工作职责
- **个人作品**：展示个人开发的项目案例

## 本地开发

### 环境要求

- Node.js >= 16.0.0
- pnpm (推荐) 或 npm

### 安装依赖

```bash
# 使用 pnpm
pnpm install

# 或使用 npm
npm install
```

### 启动开发服务器

```bash
# 使用 pnpm
pnpm dev

# 或使用 npm
npm run dev
```

### 构建项目

```bash
# 使用 pnpm
pnpm build

# 或使用 npm
npm run build
```

### 预览构建结果

```bash
# 使用 pnpm
pnpm serve

# 或使用 npm
npm run serve
```

## 项目结构

```
about-me/
├── .vitepress/        # VitePress 配置目录
│   ├── config.ts      # 网站配置文件
│   └── theme/         # 自定义主题
├── guide/             # 指引页面
│   ├── index.md       # 简介
│   ├── ready.md       # 准备
│   └── skill.md       # 技能
├── example/           # 案例页面
│   ├── index.md       # 参与项目
│   ├── duty.md        # 工作职责
│   └── personal.md    # 个人作品
├── public/            # 静态资源
├── index.md           # 网站首页
└── package.json       # 项目配置
```

## 许可证

本项目采用 MIT 许可证，详情请参阅 LICENSE 文件。

## 联系方式

- GitHub: [https://github.com/forhumility/about-me](https://github.com/forhumility/about-me)
