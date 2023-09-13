<script setup lang="ts">
import { type DropdownOption, NIcon } from 'naive-ui'
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@vicons/antd'
import type { VNodeChild } from 'vue'
import SelectLang from '@/layout/selectLang/index.vue'
import SelectUser from '@/layout/selectUser/index.vue'
const appLocale = useAppLocale()
const userStore = useUserStore()
const avatar = computed(() => userStore.userInfo?.avatar || 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg')
const nickname = computed(() => userStore.userInfo?.nickname ?? userStore.userInfo?.username ?? '用户')

const { t } = useI18n()
const renderIcon = (icon: Component): VNodeChild => h(NIcon, null, {
  default: () => h(icon),
})
const userOptions = $ref<DropdownOption[]>([
  {
    label: () => t('global.layout.header.right.user.center'),
    key: 'user-center',
    icon: () => renderIcon(UserOutlined),
  },
  {
    label: () => t('global.layout.header.right.user.setting'),
    key: 'user-setting',
    icon: () => renderIcon(SettingOutlined),
  },
  {
    key: 'header-divider',
    type: 'divider',
  },
  {
    label: () => t('global.layout.header.right.logout'),
    icon: () => renderIcon(LogoutOutlined),
    key: 'logout',
  },
])

const userSelect = (key: string) => {
  if (key === 'logout')
    userStore.logout()
}
</script>

<template>
  <n-space align="center" size="large">
    <SelectUser
      :avatar="avatar"
      :nickname="nickname"
      :options="userOptions"
      @select="userSelect"
    />
    <SelectLang v-model:value="appLocale" />
  </n-space>
</template>
