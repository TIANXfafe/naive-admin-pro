<script setup lang="ts">
const attrs = useAttrs()
</script>

<template>
  <n-layout-content v-bind="attrs" style="--n-color: var(--pro-admin-layout-content-bg)">
    <slot />
  </n-layout-content>
</template>
