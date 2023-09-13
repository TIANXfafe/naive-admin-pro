<script setup lang="ts">
import { BellOutlined } from '@vicons/antd'
import Content from './content.vue'
import Footer from './footer.vue'
withDefaults(defineProps<{
  count?: number
  maxCount?: number
}>(), {
  count: 0,
  maxCount: 99,
})
const options = $ref<DropdownOptionp[]>([
  {
    key: 'content',
    type: 'render',
    render: () => h(Content),
  },
  {
    key: 'header-divider',
    type: 'divider',
  },
  {
    key: 'footer',
    type: 'render',
    render: () => h(Footer),
  },
])
</script>

<template>
  <n-dropdown trigger="click" :options="options">
    <div class="flex cursor-pointer">
      <n-badge :value="count" :max="maxCount">
        <n-icon size="18" class="text-[var(--n-text-color)]">
          <BellOutlined />
        </n-icon>
      </n-badge>
    </div>
  </n-dropdown>
</template>
