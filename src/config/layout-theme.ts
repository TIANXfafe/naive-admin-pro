import logo from '@/assets/vue.svg'

export interface ILayoutType {
  id?: string
  key: 'mix' | 'side' | 'top'
  title: string
  inverted?: boolean
  dark?: boolean
}

export interface ILayoutTheme {
  title?: string
  layout: 'mix' | 'side' | 'top'
  layoutStyle: 'light' | 'dark' | 'inverted'
  headerHeight: number
  logo?: string
  siderWidth: number
  siderCollapsedWidth: number
  showSiderTrigger: boolean | 'bar' | 'arrow-circle'
  collapsed: boolean
  theme: string
}

export const layoutThemeConfig: ILayoutTheme = {
  title: 'Naive Admin Pro',
  layout: 'mix',
  layoutStyle: 'light',
  headerHeight: 48,
  logo,
  siderWidth: 240,
  siderCollapsedWidth: 48,
  showSiderTrigger: 'arrow-circle',
  collapsed: false,
  theme: 'default',
}
