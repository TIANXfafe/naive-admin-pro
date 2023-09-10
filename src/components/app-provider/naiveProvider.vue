<script setup lang="ts">
const notification = useNotification()
const message = useMessage()
const dialog = useDialog()
const loadingBar = useLoadingBar()
useGlobalConfigProvider({
  notification,
  message,
  dialog,
  loadingBar,
})
</script>

<template>
  <slot />
</template>
