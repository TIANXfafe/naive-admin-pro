<script setup lang="ts">
import MixLayout from '../mixLayout/index.vue'
import SideLayout from '../sideLayout/index.vue'

const appStore = useAppStore()
const { layout } = storeToRefs(appStore)
</script>

<template>
  <MixLayout
    v-if="layout.layout === 'mix'"
    v-model:collapsed="layout.collapsed"
    :logo="layout.logo"
    :title="layout.title"
    :sider-width="layout.siderWidth"
    :sider-collapsed-width="layout.siderCollapsedWidth"
    :show-sider-trigger="layout.showSiderTrigger"
  >
    <template #headerRight>
      <div>右侧</div>
    </template>
    <router-view />
  </MixLayout>
  <SideLayout
    v-else-if="layout.layout === 'side'"
    v-model:collapsed="layout.collapsed"
    :logo="layout.logo"
    :title="layout.title"
    :sider-width="layout.siderWidth"
    :sider-collapsed-width="layout.siderCollapsedWidth"
    :show-sider-trigger="layout.showSiderTrigger"
  >
    <template #headerRight>
      <div>右侧</div>
    </template>
  </SideLayout>
</template>
