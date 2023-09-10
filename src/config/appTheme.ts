import { merge } from 'lodash-es'

import type { GlobalTheme } from 'naive-ui'
import {
  cardDark,
  drawerDark,
  elementDark,
  layoutDark,
  listDark,
  menuDark,
  darkTheme as naiveDarkTheme,
} from 'naive-ui'
const commonColor: Record<string, any> = {
  bgColor: '#242525',
}

export const darkTheme: GlobalTheme = merge({}, naiveDarkTheme, {
  common: {
    baseColor: '#2A2C2C',
  },
  Layout: {
    ...layoutDark,
    self(_vars) {
      return {
        ...layoutDark.self?.(_vars),
        color: commonColor.bgColor,
        headerColor: commonColor.bgColor,
        siderColor: commonColor.bgColor,
        footerColor: commonColor.bgColor,
      }
    },
  },
  Card: {
    ...cardDark,
    self(_vars) {
      return {
        ...cardDark.self?.(_vars),
        color: commonColor.bgColor,
      }
    },
  },
  Drawer: {
    ...drawerDark,
    self(_vars) {
      return {
        ...drawerDark.self?.(_vars),
        color: commonColor.bgColor,
      }
    },
  },
  Menu: {
    ...menuDark,
    self(_vars) {
      return {
        ...menuDark.self?.(_vars),
        color: commonColor.bgColor,
      }
    },
  },
  List: {
    ...listDark,
    self(_vars) {
      return {
        ...listDark.self?.(_vars),
        color: commonColor.bgColor,
      }
    },
  },
  Element: {
    ...elementDark,
    common: {
      ...elementDark.common,
      baseColor: commonColor.bgColor,
    },
  },
} as Partial<GlobalTheme>)

export const layoutDarkTheme = darkTheme.Layout

export const elementDarkTheme = darkTheme.Element
