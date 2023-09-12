import type { FormInst, FormRules } from 'naive-ui'
import { type IUserMobileLoginParams, userSendCodeApi } from '@/api/user'

export const useMobileLogin = () => {
  const { t } = useI18n()
  const userStore = useUserStore()
  const router = useRouter()
  const message = useMessage()

  const counter = ref(120)
  const counterState = ref(false)
  const mFormRef = ref<FormInst>()
  const mLoading = ref(false)
  const mModel = reactive<IUserMobileLoginParams>({
    mobile: null,
    code: null,
    type: 'mobile',
    rememberMe: null,
  })
  const mRules = reactive<FormRules>({
    mobile: [
      {
        key: 'mobile',
        required: true,
        renderMessage: () => t('login.mobile.required'),
      },
      {
        key: 'mobile',
        pattern: /^1\d{10}$/,
        renderMessage: () => t('login.mobile.rule'),
      },
    ],
    code: [
      {
        required: true,
        renderMessage: () => t('login.mobile.verification-code.required'),
      },
      {
        max: 6,
        min: 6,
        renderMessage: () => t('login.mobile.verification-code.rule'),
      },
    ],
  })

  const mLogin = async () => {
    mLoading.value = true
    try {
      await mFormRef.value?.validate()
      await userStore.login(mModel)
      mLoading.value = false
      const redirect = router.currentRoute.value?.params?.redirect as string
      await router.replace(redirect || '/')
    }
    catch (err) {
      mLoading.value = false
    }
  }
  const startCounter = () => {
    counter.value = 120
    const timer = setInterval(() => {
      if (counter.value <= 0) {
        clearInterval(timer)
        counterState.value = false
      }
      else { counter.value-- }
    }, 1000)
  }

  const sendCode = async () => {
    const msgIns = message.loading(t('login.mobile.verification-code.loading'))
    try {
      await mFormRef.value?.validate(undefined, rule => rule?.key === 'mobile')
      await userSendCodeApi({ mobile: mModel.mobile })
      counterState.value = true
      msgIns.destroy()
      message.success(t('login.mobile.verification-code.success'))
      startCounter()
    }
    catch (err) {
      msgIns.destroy()
    }
  }

  return {
    counter,
    counterState,
    mFormRef,
    mLoading,
    mModel,
    mRules,
    mLogin,
    sendCode,
  }
}
