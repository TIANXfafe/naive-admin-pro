<script setup lang="ts">
import { Layout, LayoutContent, LayoutSider, Logo, Title } from '@/layout/common'
const props = withDefaults(defineProps<{
  headerHeight?: number
  logo?: string
  title?: string
  siderWidth?: number
  siderCollapsedWidth?: number
  showSiderTrigger?: boolean | 'bar' | 'arrow-circle'
  inverted?: boolean
  collapsed?: boolean
}>(), {
  headerHeight: 48,
  inverted: false,
  collapsed: false,
})
defineEmits(['update:collapsed'])
const headerHeightVar = computed(() => `${props.headerHeight}px`)
</script>

<template>
  <n-layout has-sider class="h-screen">
    <LayoutSider
      :collapsed="collapsed"
      :inverted="inverted"
      :width="siderWidth"
      :collapsed-width="siderCollapsedWidth"
      :show-trigger="showSiderTrigger"
      @update:collapsed="($event) => $emit('update:collapsed', $event)"
    >
      <div class="flex items-center justify-center mt-24px">
        <Logo :src="logo" :size="30" />
        <Title v-if="!collapsed" :title="title" :size="22" />
      </div>
    </LayoutSider>
    <Layout>
      <n-layout-header class="pro-admin-mix-layout-header flex items-center px-4 justify-between">
        <slot name="headerLeft">
          <div />
        </slot>
        <slot name="headerRight" />
      </n-layout-header>
      <LayoutContent content-style="padding: 24px;">
        <slot />
      </LayoutContent>
    </Layout>
  </n-layout>
</template>

<style scoped>
.pro-admin-mix-layout-header {
  height: v-bind(headerHeightVar);
}
</style>
