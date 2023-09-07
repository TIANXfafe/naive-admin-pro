<script setup lang="ts">
import { MenuUnfoldOutlined } from '@vicons/antd'
import { Layout, LayoutContent, Logo, Title } from '@/layout/common'

const props = withDefaults(defineProps<{
  headerHeight?: number
  logo?: string
  title?: string
  headerInverted?: boolean
  drawerInverted?: boolean
  visible?: boolean
  logoVisible?: boolean
}>(), {
  headerHeight: 48,
  collapsed: false,
  headerInverted: false,
  drawerInverted: false,
  visible: false,
  logoVisible: true,
})
const emit = defineEmits(['update:visible'])
const headerHeightVar = computed(() => `${props.headerHeight}px`)

const onShow = () => {
  emit('update:visible', true)
}
</script>

<template>
  <Layout class="h-screen">
    <n-layout-header :inverte="headerInverted" class="pro-admin-mix-layout-header flex items-center px-4 justify-between">
      <div class="flex items-center">
        <n-icon size="24" class="mr-12px" @click="onShow">
          <MenuUnfoldOutlined />
        </n-icon>
        <Logo :src="logo" :size="26" />
      </div>
      <div>
        <slot name="headerRight" />
      </div>
    </n-layout-header>
    <LayoutContent content-style="padding: 24px;">
      <slot />
    </LayoutContent>
  </Layout>
  <n-drawer
    :show="visible"
    :width="240"
    placement="left"
    @update:show="(val) => $emit('update:visible', val)"
  >
    <n-drawer-content body-content-style="padding: 0">
      <n-layout class="h-100%">
        <n-layout-header class="h-100%" :inverted="drawerInverted">
          <div v-if="logoVisible" class="flex items-center justify-center py-24px">
            <Logo :src="logo" :size="26" />
            <Title :title="title" :size="22" />
          </div>
          《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
        </n-layout-header>
      </n-layout>
    </n-drawer-content>
  </n-drawer>
</template>

<style scoped>
.pro-admin-mix-layout-header {
  height: v-bind(headerHeightVar);
}
</style>
