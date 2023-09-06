import { useLayoutTheme } from '@/composables/layout-theme'
import { layoutThemeConfig } from '@/config/layout-theme'

export const useAppStore = defineStore('app', () => {
  const defaultTheme = import.meta.env.DEV ? layoutThemeConfig : useLayoutTheme()
  const layout = reactive(unref(defaultTheme))
  return {
    layout,
  }
})
