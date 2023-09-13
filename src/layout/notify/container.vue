<script setup lang="ts"></script>

<template>
  <div class="w-336px">
    <n-scrollbar class="max-h-280px">
      <n-list hoverable clickable style="background: transparent" :show-divider="false">
        <slot />
      </n-list>
    </n-scrollbar>
  </div>
</template>
