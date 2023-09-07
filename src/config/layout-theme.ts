import logo from '@/assets/vue.svg'

export interface layoutTheme {
  title?: string
  layout: 'mix' | 'side' | 'top'
  headerHeight: number
  logo?: string
  siderWidth: number
  siderCollapsedWidth: number
  showSiderTrigger: boolean | 'bar' | 'arrow-circle'
  collapsed: boolean
}

export const layoutThemeConfig: layoutTheme = {
  title: 'Naive Admin Pro',
  layout: 'mix',
  headerHeight: 48,
  logo,
  siderWidth: 240,
  siderCollapsedWidth: 48,
  showSiderTrigger: 'arrow-circle',
  collapsed: false,
}
