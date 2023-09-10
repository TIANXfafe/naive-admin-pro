import { createI18n } from 'vue-i18n'
import zhCN from './lang/zh'

export const defaultLocale = 'zh'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  missingWarn: false,
  fallbackLocale: defaultLocale,
  messages: {
    zh: zhCN,
  },
})

export const lazyLoadLanguage = async (locale: string) => {
  const current = i18n.global.locale.value
  try {
    if (current === locale)
      return nextTick()
    const messages = await import(`./lang/${locale}.ts`)
    if (messages)
      i18n.global.setLocaleMessage(locale, messages.default)
  }
  catch (err) {
    console.warn('Load language error:', err)
  }
  return nextTick()
}

export default i18n
