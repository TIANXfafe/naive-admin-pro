<script setup lang="ts">
import type { DropdownOption } from 'naive-ui'

defineProps<{
  avatar?: string
  nickname?: string
  options?: DropdownOption[]
  onSelect?: (value: string) => void
}>()
</script>

<template>
  <n-dropdown trigger="hover" :options="options" @select="onSelect">
    <div class="flex items-center cursor-pointer">
      <n-avatar
        round
        size="small"
        :src="avatar"
      />
      <span
        class="ml-2"
      >{{ nickname }}</span>
    </div>
  </n-dropdown>
</template>
