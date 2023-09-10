<script setup lang="ts">
const appStore = useAppStore()
const onSwitch = (theme: any) => {
  if (theme === 'dark')
    document.documentElement.className = 'dark'

  else
    document.documentElement.removeAttribute('class')

  appStore.updateLayoutStyle(theme)
}
</script>

<template>
  <div>
    <n-space>
      <n-button @click="onSwitch('light')">
        浅色
      </n-button>
      <n-button @click="onSwitch('dark')">
        深色
      </n-button>
    </n-space>
  </div>
</template>

<style scoped>

</style>
