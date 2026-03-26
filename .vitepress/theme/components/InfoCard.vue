<!--
 * @Description  : 基本信息卡片组件
-->
<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    // [{ icon: string, label: string, value: string, link?: string }]
  }
})
</script>

<template>
  <div class="info-card">
    <div v-for="item in items" :key="item.label" class="info-card-row">
      <span class="info-card-icon">{{ item.icon }}</span>
      <span class="info-card-label">{{ item.label }}</span>
      <a v-if="item.link" :href="item.link" class="info-card-value link">{{ item.value }}</a>
      <span v-else class="info-card-value">{{ item.value }}</span>
    </div>
  </div>
</template>

<style scoped>
.info-card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 0.5rem 1.5rem;
  padding: 1.25rem 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  margin: 1rem 0 1.5rem;
}

.info-card-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0;
}

.info-card-icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  width: 1.5rem;
  text-align: center;
}

.info-card-label {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  flex-shrink: 0;
  min-width: 3.5rem;
}

.info-card-value {
  font-size: 0.9rem;
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.info-card-value.link {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.info-card-value.link:hover {
  text-decoration: underline;
}
</style>
