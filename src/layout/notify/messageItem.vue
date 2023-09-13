<script lang="ts" setup>
defineProps<{
  read?: boolean
  avatar?: string
  title?: string
  timer?: string
  desc?: string
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
      <template #description>
        <template v-if="desc">
          <span class="text-12px">
            {{ desc }}
          </span>
        </template>
        <template v-if="timer">
          <div class="text-14px">
            {{ timer }}
          </div>
        </template>
      </template>
    </n-thing>
  </n-list-item>
</template>
