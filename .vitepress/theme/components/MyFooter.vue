<!--
 * @Author       : Humility
 * @Date         : 2022-12-05 15:21:53
 * @LastEditTime : 2022-12-05 15:41:08
 * @LastEditors  : Humility
 * @FilePath     : \about-me\.vitepress\theme\components\MyFooter.vue
 * @Description  : 
-->
<script setup lang="ts">
import { useData } from 'vitepress'
import { useSidebar } from 'vitepress/dist/client/theme-default/composables/sidebar.js'

const { theme } = useData()
const { hasSidebar } = useSidebar()
</script>

<template>
    <footer v-if="theme.footer" class="VPFooter" :class="{ 'has-sidebar': hasSidebar }">
        <div class="container">
            <a v-if="theme.footer.message" class="message" href="https://beian.miit.gov.cn/"
                v-html="theme.footer.message"></a>
            <p v-if="theme.footer.copyright" class="copyright" v-html="theme.footer.copyright"></p>
        </div>
    </footer>
</template>

<style scoped>
.VPFooter {
    position: relative;
    z-index: var(--vp-z-index-footer);
    border-top: 1px solid var(--vp-c-divider-light);
    padding: 32px 24px;
    background-color: var(--vp-c-bg);
}

.VPFooter.has-sidebar {
    display: none;
}

@media (min-width: 768px) {
    .VPFooter {
        padding: 32px;
    }
}

.container {
    margin: 0 auto;
    max-width: var(--vp-layout-max-width);
    text-align: center;
}

.message,
.copyright {
    line-height: 24px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-2);
}

.message {
    order: 2;
    cursor: pointer;
}

.copyright {
    order: 1;
}
</style>