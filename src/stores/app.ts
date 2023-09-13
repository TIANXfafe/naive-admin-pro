import type { DropdownOption } from 'naive-ui'
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
  const localeOptions = ref<DropdownOption[]>([
    {
      key: 'zh',
      label: '简体中文',
      icon: () => '🇨🇳',
    },
    {
      key: 'en',
      label: 'English',
      icon: () => '🇺🇸',
    },
  ])

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
      title: 'global.layout.setting.drawer.layout.mix',
    }, {
      key: 'side',
      title: 'global.layout.setting.drawer.layout.side',
    }, {
      key: 'top',
      title: 'global.layout.setting.drawer.layout.top',
    }]
  })
  const layoutStyleList = computed<ILayoutType[]>(() => {
    const list: ILayoutType[] = [{
      id: 'light',
      key: 'side',
      title: 'global.layout.setting.drawer.style.light',
    }]
    if (layout.layout !== 'mix') {
      list.push({
        id: 'inverted',
        key: 'side',
        inverted: true,
        title: 'global.layout.setting.drawer.style.inverted',
      })
    }
    else {
      if (layout.layoutStyle !== 'dark')
        updateLayoutStyle('light')
    }
    list.push({
      id: 'dark',
      key: 'side',
      title: 'global.layout.setting.drawer.style.dark',
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
        title: `global.layout.setting.drawer.theme.${item}`,
      })
    })
    return list
  })

  return {
    layout,
    visible,
    localeOptions,
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
