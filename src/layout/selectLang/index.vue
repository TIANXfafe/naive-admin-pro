<script setup lang="ts">
import LangIcon from './langIcon.vue'

defineProps<{ value: string }>()
const emit = defineEmits(['update:value'])
const appStore = useAppStore()
const { localeOptions } = appStore
const handleSelect = (lang: string) => {
  emit('update:value', lang)
}
</script>

<template>
  <n-dropdown trigger="hover" :value="value" :options="localeOptions" @select="handleSelect">
    <div class="text-18px cursor-pointer">
      <LangIcon />
    </div>
  </n-dropdown>
</template>
