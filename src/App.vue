<script setup lang="ts">
const appStore = useAppStore()
const { layoutTheme, overridesTheme } = storeToRefs(appStore)
const naiveLocale = useAutoLang()
useAutoDark()
</script>

<template>
  <n-config-provider
    :theme="layoutTheme"
    :theme-overrides="overridesTheme"
    :locale="naiveLocale.locale"
    :date-locale="naiveLocale.dateLocale"
  >
    <n-global-style />
    <app-provider>
      <router-view />
    </app-provider>
  </n-config-provider>
</template>

<style scoped>
</style>
