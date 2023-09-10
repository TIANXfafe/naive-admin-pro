<script setup lang="ts">
import CheckboxLayout from '@/layout/settingDrawer/checkboxLayout.vue'
</script>

<template>
  <div>
    <n-space>
      <CheckboxLayout layout="mix" checked />
      <CheckboxLayout layout="top" />
      <CheckboxLayout layout="side" />
      <CheckboxLayout layout="side" inverted />
    </n-space>
  </div>
</template>

<style scoped>

</style>
