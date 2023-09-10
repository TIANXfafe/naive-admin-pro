<script setup lang="ts">
import MixLayout from '../mixLayout/index.vue'
import SideLayout from '../sideLayout/index.vue'
import TopLayout from '../topLayout/index.vue'
import MobileLayout from '../mobileLayout/index.vue'
import SettingDrawer from '../settingDrawer/index.vue'

const appStore = useAppStore()
const { layout, visible, layoutList, layoutStyleList, themeList } = storeToRefs(appStore)
const { isMobile, isPad, isDesktop } = useQueryBreakpoints()

watchEffect(() => {
  if (isPad.value)
    appStore.toggleCollapsed(true)
  else if (isDesktop.value)
    appStore.toggleCollapsed(false)
  if (isMobile.value)
    appStore.toggleCollapsed(false)
})
</script>

<template>
  <MobileLayout
    v-if="isMobile"
    v-model:visible="visible"
    :logo="layout.logo"
    :title="layout.title"
  >
    <template #headerRight>
      <div>右侧</div>
    </template>
    <router-view />
  </MobileLayout>
  <template v-else>
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
        {{ layout.collapsed }}
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
      :inverted="layout.layoutStyle === 'inverted'"
    >
      <template #headerRight>
        <div>右侧</div>
      </template>
      <router-view />
    </SideLayout>
    <TopLayout
      v-else-if="layout.layout === 'top'"
      :logo="layout.logo"
      :title="layout.title"
      :inverted="layout.layoutStyle === 'inverted'"
    >
      <template #headerRight>
        <div>右侧</div>
      </template>
      <router-view />
    </TopLayout>
  </template>
  <SettingDrawer
    v-model:layout="layout.layout"
    v-model:layout-style="layout.layoutStyle"
    v-model:theme="layout.theme"
    :layout-list="layoutList"
    :layout-style-list="layoutStyleList"
    :theme-list="themeList"
  />
</template>
