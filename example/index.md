---
layout: doc

title: 参与项目
titleTemplate: 谦逊
---

## 3D/可视化类

### 智能楼宇可视化

![智能楼宇可视化](/assets/images/prj_bt3d_01.png "智能楼宇可视化")

---

![智能楼宇可视化](/assets/images/prj_bt3d_02.png "智能楼宇可视化")

使用 3DMax 对建筑模型进行建模，通过 Unity3D 编写 C#交互脚本，把 Unity3D 导出的 WebGL 包集成到 Vue 中，结合后台数据使得显示与模型实时同步。用到 Axios、Echarts、FlvJS 等技术。

> <a href="/assets/media/building.mp4" target="_blank">查看演示视频</a>

- Unity 项目的搭建及 C#脚本编写；
- 前端项目的搭建及 3D 交互接口编写；
- GraphQL（Apollo ）集成、MQ（StompJS ）集成；
- 部分组件封装，如 3D 视图、视频播放组件。

> 项目地址：[http://bt3d.newzoo.xyz/](http://bt3d.newzoo.xyz/)

### 智慧园区可视化

![智慧园区可视化](/assets/images/prj_jk3d_01.png "智慧园区可视化")

与广西交科集团合作开发，构建园区智能可视化管理平台。集成监控、门禁、照明、安防、机房、能耗、消防、环境、会议室管理系统，实现了园区的楼宇、建筑、室内、设备的逐级可视。

> <a href="/assets/media/park.mp4" target="_blank">查看演示视频</a>

- Unity 项目的搭建及 C#脚本编写；
- 前端项目的搭建及 3D 交互接口编写；
- 集成 MQ（StompJS ）实现实时数据的对接；
- 部分组件封装，如 3D 视图、视频播放组件。

> 项目地址：[http://jk3d.newzoo.xyz/](http://jk3d.newzoo.xyz/)

### 三维建模监测系统

![三维建模监测系统](/assets/images/prj_gis_01.png "三维建模监测系统")

使用无人机航拍高速公路，通过倾斜摄影建模，在 web 端实现对模型的测量（长度、高度、坡度、面积、体积等）工作。主要用到 Vue、ElementUI、WebGIS（CesiumJS）、Nginx 等技术。

> <a href="/assets/media/webkit.mp4" target="_blank">查看演示视频</a>

- 项目基础框架搭建及功能开发；
- 使用 AABB 算法实现对屏幕外瓦片的剔除，提升模型加载速度。
- 使用 Docker 创建多个 Nginx 瓦片服务通过域名分片技术使加载速度进一步提升。

### BIM 施工管理平台

![施工管理平台](/assets/images/prj_bim_01.png "施工管理平台")

---

![进度模拟](/assets/images/prj_bim_02.png "进度模拟")

该项目是通过 BIM 模型跟踪工程的生命周期，包含模型管理、文档管理、计划管理、进度管理、计划/进度模拟等模块。项目使用使用 Vue 开发，我主要负责任务的分解、计划的制定、核心模块计划/进度模拟的开发。涉及 ElementUI、Axios、Gantt 等技术。

- 可行性分析、关键技术选型；
- 客户需求的调研及跟进；
- 使用禅道管理需求、分解需求、分配任务；
- 计划/进度模拟模块开发；
- 使用 Nginx 部署项目。

> 项目地址：[http://bim.newzoo.xyz/](http://bim.newzoo.xyz/)

## 后台管理类

### 物业管理系统

![物业管理系统](/assets/images/prj_wy_01.png "物业管理系统")

---

<div
style="display: flex; justify-content: center; align-items: center;">

<img src="/assets/images/prj_wy_02.png" alt="员工端"
style="width:98%">

<img src="/assets/images/prj_wy_03.png" alt="业主端"
style="width:98%">

</div>

实现对社区管理、客户管理、房屋交付管理、仪表管理、报事报修、收费管理等功能，包含 Web 管理端、业主 APP、员工 APP。项目基于 JeecgBoot 框架开发，主要用到 Vue、AntDesign、UniApp 等技术。

- 客户需求的调研及跟进；
- 使用禅道管理需求、分解需求、分配任务；
- 员工端/业主端 APP 基础框架搭建，部分功能开发。

> 项目地址：[http://wuye.newzoo.xyz/](http://wuye.newzoo.xyz/)
