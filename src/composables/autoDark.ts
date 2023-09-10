export const isDark = useDark()

export const toggleDark = useToggle(isDark)

export const useAutoDark = () => {
  const appStore = useAppStore()
  const isPrefersDark = usePreferredDark()
  watch(isPrefersDark, (isDark) => {
    if (isDark)
      appStore.updateLayoutStyle('dark')
    else
      appStore.updateLayoutStyle('light')
    toggleDark(isDark)
  }, { immediate: true })
}
