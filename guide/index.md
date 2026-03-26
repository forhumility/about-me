---
layout: doc

title: 简介
titleTemplate: 谦逊
---

<script setup>
import InfoCard from '../.vitepress/theme/components/InfoCard.vue'

const basicInfo = [
  { icon: '👨‍💻', label: '姓名', value: '陈成福' },
  { icon: '🧬', label: '性别', value: '男' },
  { icon: '🎂', label: '生日', value: '1996-07-22' },
  { icon: '☎️', label: '电话', value: '181****0722' },
  { icon: '📧', label: '邮箱', value: 'for_humility@foxmail.com', link: 'mailto:for_humility@foxmail.com' },
  { icon: '🎓', label: '学历', value: '本科 / 工学学士' },
  { icon: '🏡', label: '籍贯', value: '广西 柳州' },
  { icon: '🗺️', label: '现居地', value: '广西 南宁' },
]
</script>

## 基本信息

<img src="/assets/images/logo.png" alt="谦逊的头像" style="border-radius: 12px">

<InfoCard :items="basicInfo" />

## 教育经历

- 🏫 南宁职业技术学院 2015~2018 计算机应用技术
- 🎓 南宁师范大学 2018~2020 计算机科学与技术
- 📚 计算机组成原理 / 软件工程 / .Net 高级语言程序设计 / 计算机网络 / 数据库原理 / 高等数学

## 荣誉证书

- 🥈 2016 广西区计算机应用大赛 二等奖
- 🏆 2017 全国职业技能大赛虚拟现实项目 国赛三等奖
- 🥉 2018 广西区计算机应用大赛 三等奖
- 🏅 2020 优秀员工
- 🏅 2021 最佳管理进步奖

## 工作经历

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-date">📅 2017-12 ~ 2018-06</div>
    <div><strong>开原创启(北京)有限公司</strong> · 海外组</div>
    <div>💼 U3D 实习生</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">📅 2020-07 ~ 2024-12</div>
    <div><strong>广西路盛通智能科技有限公司</strong> · 研发部</div>
    <div>💼 技术总工程师</div>
  </div>
  <div class="timeline-item">
    <div class="timeline-date">📅 2025-01 ~ 至今</div>
    <div><strong>广西中联博远信息技术有限公司</strong> · 软件部</div>
    <div>💼 前端工程师</div>
  </div>
</div>

> 项目详情请移步至[案例](/example/)查看

## 其他

- 🏃 健康情况：良好
- 📏 身高：165cm
- 💬 语言：普通话(二乙) / 英语(一般) / 客家话(母语) / 桂柳话(流利)
- 💖 兴趣爱好：编程 / 游戏 / 电影 / 推理
- 💭 自我评价：活泼开朗，喜欢研究，责任心强。

---

<div style="text-align: center; margin-top: 2rem;">
  <a href="/guide/ready" class="cta-btn">📬 邀请面试</a>
</div>

<style>
.cta-btn {
  display: inline-block;
  padding: 0.65rem 2rem;
  border-radius: 8px;
  background: var(--vp-c-brand-1);
  color: #fff !important;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none !important;
  transition: background 0.2s, transform 0.15s;
}
.cta-btn:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-2px);
}
</style>
