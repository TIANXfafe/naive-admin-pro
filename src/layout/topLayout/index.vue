<script setup lang="ts">
import { Layout, LayoutContent, LayoutHeader, Logo, Title } from '@/layout/common'
const props = withDefaults(defineProps<{
  headerHeight?: number
  logo?: string
  title?: string
  inverted?: boolean
}>(), {
  headerHeight: 48,
  collapsed: false,
  inverted: true,
})

const headerHeightVar = computed(() => `${props.headerHeight}px`)
</script>

<template>
  <Layout class="h-screen">
    <LayoutHeader :inverted="inverted" class="pro-admin-mix-layout-header flex items-center px-4 justify-between">
      <div class="flex items-center">
        <Logo :src="logo" />
        <Title :title="title" />
      </div>
      <div>
        <slot name="headerRight" />
      </div>
    </LayoutHeader>
    <LayoutContent content-style="padding: 24px;">
      <slot />
    </LayoutContent>
  </Layout>
</template>

<style scoped>
.pro-admin-mix-layout-header {
  height: v-bind(headerHeightVar);
}
</style>
