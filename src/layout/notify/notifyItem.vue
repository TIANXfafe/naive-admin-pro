<script setup lang="ts">
defineProps<{
  read?: boolean
  avatar?: string
  title?: string
  timer?: string
}>()
</script>

<template>
  <n-list-item :class="read ? 'op-40' : ''">
    <n-thing>
      <template v-if="avatar" #avatar>
        <n-avatar round :src="avatar" />
      </template>
      <template v-if="title" #header>
        <span class="text-16px">
          {{ title }}
        </span>
      </template>
      <template v-if="timer" #description>
        <span class="text-14px">
          {{ timer }}
        </span>
      </template>
    </n-thing>
  </n-list-item>
</template>
