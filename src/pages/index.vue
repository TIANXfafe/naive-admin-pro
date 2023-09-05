<script setup lang="ts">
const message = useMessage()
const dialog = useDialog()
const notification = useNotification()
const loadingBar = useLoadingBar()
const onMessage = () => {
  message.success('message')
}
const onDialog = () => {
  dialog.info({
    title: 'dialog',
    content: 'dialog',
  })
}
const onNotification = () => {
  notification.info({
    title: 'notification',
    content: 'notification',
  })
}
const onLoadingBar = () => {
  loadingBar.start()
  setTimeout(() => {
    loadingBar.finish()
  }, 2000)
}
</script>

<template>
  <div>
    <n-space>
      <n-button @click="onMessage">
        Message
      </n-button>
      <n-button @click="onDialog">
        Dialog
      </n-button>
      <n-button @click="onNotification">
        Notification
      </n-button>
      <n-button @click="onLoadingBar">
        LoadingBar
      </n-button>
    </n-space>
  </div>
</template>

<style scoped>

</style>
