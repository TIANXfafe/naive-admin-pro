<script setup lang="ts">
import { CheckOutlined } from '@vicons/antd'
defineProps<{
  color: string
  checked: boolean
}>()
</script>

<template>
  <div :style="{ background: color }" class="flex items-center justify-center w-20px h-20px">
    <n-icon v-if="checked" size="16">
      <CheckOutlined />
    </n-icon>
  </div>
</template>
