<!--
 * @Author       : Humility
 * @LastEditTime : 2026-03-26
 * @Description  : 首页 hero 打字动效 tagline（注入 home-hero-info 插槽）
-->
<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { frontmatter } = useData()

// ── 工作年限计算 ──────────────────────────────────────────────
const workYears = computed(() => {
  const startDate = new Date(2020, 6) // 2020-07
  const currentDate = new Date()

  let years = currentDate.getFullYear() - startDate.getFullYear()
  let monthDiff = currentDate.getMonth() - startDate.getMonth()

  if (monthDiff < 0) {
    years--
    monthDiff += 12
  }

  let suffix = ''
  if (monthDiff >= 6) suffix = '半'
  else if (monthDiff > 0) suffix = '+'

  return years + suffix
})

// ── 打字动效 ──────────────────────────────────────────────────
const displayText = ref('')
const isTypingDone = ref(false)
let typingTimer = null

onMounted(() => {
  const fullText = `一个练习时长${workYears.value}年的前端工程师。`
  let i = 0
  typingTimer = setInterval(() => {
    if (i < fullText.length) {
      displayText.value += fullText[i]
      i++
    } else {
      isTypingDone.value = true
      clearInterval(typingTimer)
    }
  }, 80)
})

onUnmounted(() => {
  if (typingTimer) clearInterval(typingTimer)
})
</script>

<template>
  <h1 class="heading">
    <span v-if="frontmatter.hero?.name" class="name clip" v-html="frontmatter.hero.name" />
    <span class="text">
      {{ displayText }}<span v-if="!isTypingDone" class="typing-cursor" />
    </span>
  </h1>
</template>

<style scoped>
.heading {
  display: flex;
  flex-direction: column;
}

.name,
.text {
  width: fit-content;
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
}

.name {
  color: var(--vp-home-hero-name-color);
}

.clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

.text {
  color: var(--vp-c-text-1);
}

@media (min-width: 640px) {
  .name,
  .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }
}

@media (min-width: 960px) {
  .name,
  .text {
    line-height: 64px;
    font-size: 56px;
  }
}
</style>
