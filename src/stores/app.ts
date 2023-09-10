import { darkTheme } from '@/config/appTheme.ts'
import { useLayoutTheme } from '@/composables/layout-theme'
import type { ILayoutTheme, ILayoutType } from '@/config/layout-theme'
import { layoutThemeConfig } from '@/config/layout-theme'
import type { ITheme } from '@/config/theme'
import { colors, darkColors } from '@/config/theme'

export const useAppStore = defineStore('app', () => {
  const defaultTheme = import.meta.env.DEV ? layoutThemeConfig : useLayoutTheme()

  const layout = reactive(unref(defaultTheme))
  const visible = ref(false)

  const toggleVisible = (val: boolean) => visible.value = val
  const toggleCollapsed = (val: boolean) => layout.collapsed = val
  const updateLayout = (val: ILayoutType['key']) => {
    layout.layout = val
  }
  const updateLayoutStyle = (val: ILayoutTheme['layoutStyle']) => {
    layout.layoutStyle = val
  }
  const updateTheme = (val: string) => {
    layout.theme = val
  }

  watch(() => layout.layoutStyle, (val) => {
    if (val === 'dark')
      toggleDark(true)

    else
      toggleDark(false)
  })

  const layoutList = computed<ILayoutType[]>(() => {
    return [{
      key: 'mix',
      title: '混合布局',
    }, {
      key: 'side',
      title: '侧边布局',
    }, {
      key: 'top',
      title: '顶部布局',
    }]
  })
  const layoutStyleList = computed<ILayoutType[]>(() => {
    const list: ILayoutType[] = [{
      id: 'light',
      key: 'side',
      title: '亮色风格',
    }]
    if (layout.layout !== 'mix') {
      list.push({
        id: 'inverted',
        key: 'side',
        inverted: true,
        title: '反转色风格',
      })
    }
    else {
      if (layout.layoutStyle !== 'dark')
        updateLayoutStyle('light')
    }
    list.push({
      id: 'dark',
      key: 'side',
      title: '暗色风格',
      dark: true,
    })
    return list
  })
  const layoutTheme = computed(() => {
    if (layout.layoutStyle === 'dark')
      return darkTheme

    return undefined
  })
  const overridesTheme = computed(() => {
    if (isDark.value)
      return darkColors[layout.theme]

    return colors[layout.theme]
  })
  const themeList = computed(() => {
    const list: ITheme[] = []
    const myColors = isDark.value ? darkColors : colors
    Object.keys(myColors).forEach((item) => {
      list.push({
        color: myColors[item]?.common?.primaryColor as string,
        key: item,
      })
    })
    return list
  })

  return {
    layout,
    visible,
    layoutList,
    layoutStyleList,
    layoutTheme,
    overridesTheme,
    themeList,
    toggleVisible,
    toggleCollapsed,
    updateLayout,
    updateLayoutStyle,
    updateTheme,
  }
})
