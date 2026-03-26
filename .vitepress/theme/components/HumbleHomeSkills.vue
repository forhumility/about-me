<!--
 * @Author       : Humility
 * @LastEditTime : 2026-03-26
 * @Description  : 首页技能分类卡片（注入 home-features-after 插槽）
-->
<script setup>
// 技能分类数据（Requirements 1.2, 3.1–3.4）
const skillCategories = [
  {
    label: '前端核心',
    icon: '🌐',
    description: '扎实的 Web 基础，精通现代 JS/TS 规范',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'],
    core: ['JavaScript', 'TypeScript'],
  },
  {
    label: '框架与库',
    icon: '⚡',
    description: '多端开发经验，从 Web 到桌面到小程序',
    skills: ['Vue2/3', 'UniApp', 'Electron', 'ECharts', 'ElementUI'],
    core: ['Vue2/3'],
  },
  {
    label: '3D · GIS',
    icon: '🌍',
    description: '三维可视化与地理信息系统开发',
    skills: ['Unity3D', 'C#', 'WebGL', 'Cesium.js', 'WebGIS'],
    core: ['Unity3D', 'Cesium.js'],
  },
  {
    label: '后台 · 运维',
    icon: '🛠️',
    description: '全栈能力，具备独立部署和运维经验',
    skills: ['NodeJS', 'NestJS', 'MongoDB', 'Docker', 'Nginx', 'GitLab CI'],
    core: ['NestJS', 'Docker'],
  },
  {
    label: 'AI 工具',
    icon: '🤖',
    description: '积极拥抱 AI 辅助开发工具链',
    skills: ['LangChain', 'Ollama', 'Stable Diffusion', 'Kiro'],
    core: [],
  },
]
</script>

<template>
  <div class="skill-section">
    <div class="skill-grid">
      <div
        v-for="category in skillCategories"
        :key="category.label"
        class="skill-card"
      >
        <div class="skill-card-header">
          <span class="skill-card-icon">{{ category.icon }}</span>
          <span class="skill-card-title">{{ category.label }}</span>
        </div>
        <p class="skill-card-desc">{{ category.description }}</p>
        <div class="skill-card-tags">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="skill-tag"
            :class="{ core: category.core?.includes(skill) }"
          >{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-section {
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 1.5rem 3rem;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.skill-card {
  padding: 1.25rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.skill-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.skill-card-icon {
  font-size: 1.25rem;
  line-height: 1;
}

.skill-card-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.skill-card-desc {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.75rem;
  line-height: 1.5;
}

.skill-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}
</style>
