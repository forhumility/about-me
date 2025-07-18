<!--
 * @Author       : Humility
 * @Date         : 2022-12-05 15:09:51
 * @LastEditTime : 2022-12-05 15:32:56
 * @LastEditors  : Humility
 * @FilePath     : \about-me\.vitepress\theme\Layout.vue
 * @Description  : 
-->
<script setup lang="ts">
import { provide, watch, computed } from "vue";
import { useRoute, useData } from "vitepress";
import {
  useSidebar,
  useCloseSidebarOnEscape,
} from "vitepress/dist/client/theme-default/composables/sidebar.js";
import VPSkipLink from "vitepress/dist/client/theme-default/components/VPSkipLink.vue";
import VPBackdrop from "vitepress/dist/client/theme-default/components/VPBackdrop.vue";
import VPNav from "vitepress/dist/client/theme-default/components/VPNav.vue";
import VPLocalNav from "vitepress/dist/client/theme-default/components/VPLocalNav.vue";
import VPSidebar from "vitepress/dist/client/theme-default/components/VPSidebar.vue";
import VPContent from "vitepress/dist/client/theme-default/components/VPContent.vue";
import HumbleFooter from "./components/HumbleFooter.vue";
import HumbleHome from "./components/HumbleHome.vue";

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar,
} = useSidebar();

const route = useRoute();
const { frontmatter } = useData();

// 判断是否是首页
const isHomePage = computed(() => {
  return frontmatter.value.layout === "home";
});

watch(() => route.path, closeSidebar);

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);

provide("close-sidebar", closeSidebar);
</script>

<template>
  <div class="Layout">
    <slot name="layout-top" />
    <VPSkipLink />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <VPNav>
      <template #nav-bar-title-before>
        <slot name="nav-bar-title-before" />
      </template>
      <template #nav-bar-title-after>
        <slot name="nav-bar-title-after" />
      </template>
      <template #nav-bar-content-before>
        <slot name="nav-bar-content-before" />
      </template>
      <template #nav-bar-content-after>
        <slot name="nav-bar-content-after" />
      </template>
      <template #nav-screen-content-before>
        <slot name="nav-screen-content-before" />
      </template>
      <template #nav-screen-content-after>
        <slot name="nav-screen-content-after" />
      </template>
    </VPNav>
    <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen" />

    <!-- 自定义首页组件 -->
    <HumbleHome v-if="isHomePage">
      <template #home-hero-before>
        <slot name="home-hero-before" />
      </template>
      <template #home-hero-after>
        <slot name="home-hero-after" />
      </template>
      <template #home-features-before>
        <slot name="home-features-before" />
      </template>
      <template #home-features-after>
        <slot name="home-features-after" />
      </template>
    </HumbleHome>

    <!-- 非首页内容 -->
    <VPContent v-else>
      <template #doc-footer-before>
        <slot name="doc-footer-before" />
      </template>
      <template #doc-before>
        <slot name="doc-before" />
      </template>
      <template #doc-after>
        <slot name="doc-after" />
      </template>

      <template #aside-top>
        <slot name="aside-top" />
      </template>
      <template #aside-bottom>
        <slot name="aside-bottom" />
      </template>
      <template #aside-outline-before>
        <slot name="aside-outline-before" />
      </template>
      <template #aside-outline-after>
        <slot name="aside-outline-after" />
      </template>
      <template #aside-ads-before>
        <slot name="aside-ads-before" />
      </template>
      <template #aside-ads-after>
        <slot name="aside-ads-after" />
      </template>
    </VPContent>

    <HumbleFooter />
    <slot name="layout-bottom" />
  </div>
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
