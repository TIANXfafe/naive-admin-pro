import type { FormInst, FormRules } from 'naive-ui'
import type { IUserAccountLoginParams } from '@/api/user'

export const useAccountLogin = () => {
  const { t } = useI18n()
  const userStore = useUserStore()
  const router = useRouter()

  const formRef = ref<FormInst>()
  const loading = ref(false)
  const model = reactive<IUserAccountLoginParams>({
    username: null,
    password: null,
    rememberMe: null,
  })
  const rules = reactive<FormRules>({
    username: [
      {
        required: true,
        renderMessage: () => t('login.username.required'),
      },
      {
        max: 20,
        min: 5,
        renderMessage: () => t('login.username.length'),
      },
    ],
    password: [
      {
        required: true,
        renderMessage: () => t('login.password.required'),
      },
      {
        max: 20,
        min: 5,
        renderMessage: () => t('login.password.length'),
      },
    ],
  })
  const login = async () => {
    loading.value = true
    try {
      await formRef.value?.validate()
      await userStore.login(model)
      loading.value = false
      const redirect = router.currentRoute.value?.params?.redirect as string
      await router.replace(redirect || '/')
    }
    catch (err) {
      loading.value = false
    }
  }
  return {
    formRef,
    loading,
    model,
    rules,
    login,
  }
}
