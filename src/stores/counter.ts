export const useCounter = defineStore('counter', () => {
  const counter = ref(0) // state
  const increment = () => counter.value++ // mutation
  const decrement = () => counter.value-- // mutation
  const double = computed(() => counter.value * 2) // getter

  return {
    counter,
    increment,
    decrement,
    double,
  }
})
