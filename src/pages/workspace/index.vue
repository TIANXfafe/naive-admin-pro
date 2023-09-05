<script setup lang="ts">
const counterStore = useCounter()
const { counter, double, increment, decrement } = storeToRefs(counterStore)
</script>

<template>
  <div>
    <div>工作空间</div>
    {{ counter }}
    {{ double }}
    <n-button @click="counterStore.increment">
      +
    </n-button>
    <n-button @click="counterStore.decrement">
      -
    </n-button>
  </div>
</template>

<style scoped>

</style>
