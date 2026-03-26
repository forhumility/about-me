---
layout: doc

title: 参与项目
titleTemplate: 谦逊
---

<div class="project-nav">
  <a href="#3d-可视化类">3D / 可视化</a>
  <span class="project-nav-sep">|</span>
  <a href="#后台管理类">后台管理</a>
  <span class="project-nav-sep">|</span>
  <a href="#桌面端应用">桌面端</a>
</div>

## 3D / 可视化类

### 智能楼宇可视化

<span class="project-badge type-3d">3D 可视化</span>

![智能楼宇可视化](/assets/images/prj_bt3d_01.png "智能楼宇可视化")

---

![智能楼宇可视化](/assets/images/prj_bt3d_02.png "智能楼宇可视化")

> 📅 2020-07 至 2023-03

使用 3DMax 对建筑模型进行建模，通过 Unity3D 编写 C# 交互脚本，把 Unity3D 导出的 WebGL 包集成到 Vue 中，结合后台数据使得显示与模型实时同步。

> <a href="/assets/media/building.mp4" target="_blank">查看演示视频</a>

**技术栈**

<span class="skill-tag core">Unity3D</span><span class="skill-tag core">Vue</span><span class="skill-tag">C#</span><span class="skill-tag">WebGL</span><span class="skill-tag">Axios</span><span class="skill-tag">ECharts</span><span class="skill-tag">FlvJS</span><span class="skill-tag">GraphQL</span><span class="skill-tag">StompJS</span>

**我的贡献**

- Unity 项目的搭建及 C# 脚本编写；
- 前端项目的搭建及 3D 交互接口编写；
- GraphQL（Apollo）集成、MQ（StompJS）集成；
- 部分组件封装，如 3D 视图、视频播放组件。

**项目成果**

- 实现建筑模型与后台数据的实时同步展示，楼层/设备状态一目了然；
- 系统稳定运行 2 年以上，支撑多个楼宇的可视化管理需求。

---

### 智慧园区可视化

<span class="project-badge type-3d">3D 可视化</span>

![智慧园区可视化](/assets/images/prj_jk3d_01.png "智慧园区可视化")

> 📅 2020-10 至 2022-10

与广西交科集团合作开发，构建园区智能可视化管理平台。集成监控、门禁、照明、安防、机房、能耗、消防、环境、会议室管理系统，实现了园区的楼宇、建筑、室内、设备的逐级可视。

> <a href="/assets/media/park.mp4" target="_blank">查看演示视频</a>

**技术栈**

<span class="skill-tag core">Unity3D</span><span class="skill-tag core">Vue</span><span class="skill-tag">C#</span><span class="skill-tag">WebGL</span><span class="skill-tag">StompJS</span>

**我的贡献**

- Unity 项目的搭建及 C# 脚本编写；
- 前端项目的搭建及 3D 交互接口编写；
- 集成 MQ（StompJS）实现实时数据的对接；
- 部分组件封装，如 3D 视图、视频播放组件。

**项目成果**

- 整合 9 大子系统于一个可视化平台，实现园区全域感知；
- 支持楼宇 → 建筑 → 室内 → 设备四级下钻，交互流畅。

---

### 三维建模监测系统

<span class="project-badge type-3d">3D 可视化</span><span class="project-badge type-3d">WebGIS</span>

![三维建模监测系统](/assets/images/prj_gis_01.png "三维建模监测系统")

> 📅 2021-02 至 2022-01

使用无人机航拍高速公路，通过倾斜摄影建模，在 Web 端实现对模型的测量（长度、高度、坡度、面积、体积等）工作。

**技术栈**

<span class="skill-tag core">CesiumJS</span><span class="skill-tag core">Vue</span><span class="skill-tag">ElementUI</span><span class="skill-tag">WebGIS</span><span class="skill-tag">Nginx</span><span class="skill-tag">Docker</span>

**我的贡献**

- 项目基础框架搭建及功能开发；
- 使用 AABB 算法实现对屏幕外瓦片的剔除，提升模型加载速度；
- 使用 Docker 创建多个 Nginx 瓦片服务，通过域名分片技术进一步提升加载速度。

**项目成果**

- 瓦片加载速度通过域名分片优化提升约 40%；
- 支持长度、高度、坡度、面积、体积等多维度测量，满足工程勘测需求。

---

### BIM 施工管理平台

<span class="project-badge type-3d">3D 可视化</span><span class="project-badge type-admin">后台管理</span>

![施工管理平台](/assets/images/prj_bim_01.png "施工管理平台")

---

![进度模拟](/assets/images/prj_bim_02.png "进度模拟")

> 📅 2021-03 至 2022-10

通过 BIM 模型跟踪工程的生命周期，包含模型管理、文档管理、计划管理、进度管理、计划/进度模拟等模块。

**技术栈**

<span class="skill-tag core">Vue</span><span class="skill-tag">ElementUI</span><span class="skill-tag">Axios</span><span class="skill-tag">Gantt</span><span class="skill-tag">Nginx</span>

**我的贡献**

- 可行性分析、关键技术选型；
- 客户需求的调研及跟进；
- 使用禅道管理需求、分解需求、分配任务；
- 计划/进度模拟核心模块开发；
- 使用 Nginx 部署项目。

**项目成果**

- 实现施工进度的可视化模拟，计划与实际进度对比一目了然；
- 覆盖工程全生命周期管理，减少人工协调成本。

---

## 后台管理类

### 物业管理系统

<span class="project-badge type-admin">后台管理</span>

![物业管理系统](/assets/images/prj_wy_01.png "物业管理系统")

---

<div style="display: flex; justify-content: center; align-items: center;">
  <img src="/assets/images/prj_wy_02.png" alt="员工端" style="width:49%">
  <img src="/assets/images/prj_wy_03.png" alt="业主端" style="width:49%">
</div>

> 📅 2021-07 至 2023-08

实现对社区管理、客户管理、房屋交付管理、仪表管理、报事报修、收费管理等功能，包含 Web 管理端、业主 APP、员工 APP。

**技术栈**

<span class="skill-tag core">Vue</span><span class="skill-tag core">UniApp</span><span class="skill-tag">AntDesign</span><span class="skill-tag">JeecgBoot</span>

**我的贡献**

- 客户需求的调研及跟进；
- 使用禅道管理需求、分解需求、分配任务；
- 员工端/业主端 APP 基础框架搭建，部分功能开发。

**项目成果**

- 一套系统覆盖 Web 管理端 + 业主 APP + 员工 APP 三端；
- 支撑社区日常运营管理，提升物业服务响应效率。

---

## 桌面端应用

### 热试车测量显示软件

<span class="project-badge type-desktop">桌面端</span>

![数据监测](/assets/images/prj_xintai_01.png "数据监测")

---

![数据图表](/assets/images/prj_xintai_02.png "数据图表")

> 📅 2023-03 至 2024-01

负责监测和实时展示火箭发动机热试车过程中的数据。通过对接 UDP 组播数据（10Hz），实现数据的实时展示，支持将关键参数动态添加到图表中，实现曲线图的实时绘制。

**技术栈**

<span class="skill-tag core">Electron</span><span class="skill-tag core">Vue</span><span class="skill-tag">Egg.js</span><span class="skill-tag">SQLite</span><span class="skill-tag">Socket.io</span><span class="skill-tag">AntDesign</span><span class="skill-tag">UDP</span>

**我的贡献**

- 客户需求的调研及跟进；
- 系统架构的搭建和功能的开发；
- 现场调试安装软件；
- 项目回款的跟进。

**项目成果**

- 成功对接 10Hz 低频与 1kHz/20kHz 高频数据，实时曲线绘制无卡顿；
- 支持关键参数动态配置与数据导出，满足工程师深度分析需求。
