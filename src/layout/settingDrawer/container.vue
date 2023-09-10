<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="mb-14px">
    <div class="mb-14px text-14px font-500">
      {{ title }}
    </div>
    <slot />
  </div>
</template>
