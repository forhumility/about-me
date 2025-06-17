<!--
 * @Author       : Humility
 * @Date         : 2024-05-15
 * @Description  : 自定义首页组件
-->
<script setup>
import { computed } from "vue";
import { useData } from "vitepress";
import VPHomeHero from "vitepress/dist/client/theme-default/components/VPHomeHero.vue";
import VPHomeFeatures from "vitepress/dist/client/theme-default/components/VPHomeFeatures.vue";

const { frontmatter } = useData();

// 计算工作年限
const workYears = computed(() => {
  // 从2020年7月开始计算
  const startDate = new Date(2020, 6); // 注意：月份是从0开始的，所以6代表7月
  const currentDate = new Date();

  // 计算年数差异
  let years = currentDate.getFullYear() - startDate.getFullYear();

  // 计算月份差异
  let monthDiff = currentDate.getMonth() - startDate.getMonth();

  // 调整年数和获取额外月份
  if (monthDiff < 0) {
    years--;
    monthDiff += 12;
  }

  // 根据月份差异确定后缀
  let suffix = "";
  if (monthDiff === 0) {
    // 正好满年
    suffix = "";
  } else if (monthDiff < 6) {
    // 小于6个月
    suffix = "+";
  } else {
    // 大于等于6个月
    suffix = "半";
  }

  return years + suffix;
});

// 动态生成的 hero 文本
const heroText = computed(() => {
  return `一个练习时长${workYears.value}年的前端工程师。`;
});
</script>

<template>
  <div class="VPHome">
    <slot name="home-hero-before" />
    <VPHomeHero
      v-if="frontmatter.hero"
      :name="frontmatter.hero.name"
      :text="heroText"
      :tagline="frontmatter.hero.tagline"
      :image="frontmatter.hero.image"
      :actions="frontmatter.hero.actions"
    />
    <slot name="home-hero-after" />

    <slot name="home-features-before" />
    <VPHomeFeatures
      v-if="frontmatter.features"
      :features="frontmatter.features"
    />
    <slot name="home-features-after" />
  </div>
</template>
