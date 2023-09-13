<script setup lang="ts">
import SelectLang from '../selectLang/index.vue'
const appLocale = useAppLocale()
</script>

<template>
  <n-el tag="div" class="pro-admin-login-container h-screen flex flex-col">
    <div class="flex flex-shrink-0 h-48px px-24px items-center justify-end">
      <SelectLang v-model:value="appLocale" />
    </div>
    <slot name="prefix" />
    <div class="flex-1">
      <slot />
    </div>
    <slot name="suffix">
      <div class="flex flex-shrink-0 items-center justify-center my-2">
        <span>Naive Admin Pro &copy; 2023后台管理模版</span>
      </div>
    </slot>
  </n-el>
</template>

<style scoped>
.pro-admin-login-container {
  background-image: url("@/assets/images/login-bg.svg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center 110px;
}
</style>
