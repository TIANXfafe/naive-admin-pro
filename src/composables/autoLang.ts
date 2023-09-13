import { defaultLocale, lazyLoadLanguage } from '@/locales'

export const useAppLocale = createGlobalState(() => useStorage('locale', defaultLocale))

export const useAutoLang = () => {
  const appLocale = useAppLocale()

  const { locale, getLocaleMessage } = useI18n()
  const setLanguage = async (lang: string) => {
    try {
      await lazyLoadLanguage(lang)
      appLocale.value = lang
      locale.value = lang
    }
    catch (err) {

    }
  }
  const { isSupported, language } = useNavigatorLanguage()

  if (isSupported.value) {
    if (language.value && language.value !== defaultLocale)
      setLanguage(language.value).then(() => {})

    watch(language, (lang) => {
      if (lang)
        setLanguage(lang).then(() => {})
    })
  }

  watch(appLocale, async (lang) => {
    if (lang && lang !== locale.value)
      await setLanguage(lang)
  })

  setLanguage(appLocale.value).then(() => {})

  const naiveLocale = computed(() => getLocaleMessage(appLocale.value).naiveUI || {})
  return naiveLocale
}
