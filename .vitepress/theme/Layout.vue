<!--
 * @Author       : Humility
 * @LastEditTime : 2026-03-26
 * @Description  : 使用 DefaultTheme.Layout 插槽机制，避免内部路径导入
-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue'
import HumbleHome from './components/HumbleHome.vue'
import HumbleHomeSkills from './components/HumbleHomeSkills.vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

const isHomePage = computed(() => frontmatter.value.layout === 'home')
</script>

<template>
  <Layout>
    <!--
      首页：
      - home-hero-info  → 打字动效 tagline（HumbleHome）
      - home-features-after → 技能分类卡片（HumbleHomeSkills）
    -->
    <template v-if="isHomePage" #home-hero-info>
      <HumbleHome />
    </template>

    <template v-if="isHomePage" #home-features-after>
      <HumbleHomeSkills />
    </template>
  </Layout>
</template>
