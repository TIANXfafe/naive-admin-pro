<script lang="ts" setup>
defineProps<{
  read?: boolean
  type?: 'success' | 'warning' | 'error' | 'info'
  tag?: string
  title?: string
  content?: string
}>()
</script>

<template>
  <n-list-item :class="read ? 'op-40' : ''">
    <n-thing>
      <template v-if="title" #header>
        <span class="text-16px">
          {{ title }}
        </span>
      </template>
      <template v-if="tag" #header-extra>
        <n-tag size="small" :type="type">
          {{ tag }}
        </n-tag>
      </template>
      <template v-if="content" #description>
        <span class="text-14px">
          {{ content }}
        </span>
      </template>
    </n-thing>
  </n-list-item>
</template>
