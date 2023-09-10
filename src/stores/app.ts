import { useLayoutTheme } from '@/composables/layout-theme'
import type { ILayoutTheme, ILayoutType } from '@/config/layout-theme'
import { layoutThemeConfig } from '@/config/layout-theme'

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
        id: 'dark',
        key: 'side',
        inverted: true,
        title: '暗色风格',
      })
    }
    else {
      updateLayoutStyle('light')
    }
    return list
  })

  return {
    layout,
    visible,
    layoutList,
    layoutStyleList,
    toggleVisible,
    toggleCollapsed,
    updateLayout,
    updateLayoutStyle,
  }
})
