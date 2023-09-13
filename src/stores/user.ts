import { type IUserAccountLoginParams, type IUserInfo, type IUserMobileLoginParams, userGetInfoApi, userLoginApi } from '@/api/user'
import i18n from '@/locales'
import router from '@/router'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<IUserInfo>()
  const token = useAuthorization()
  const { message } = useGlobalConfig()
  const t = i18n.global.t
  const setUserInfo = (info: IUserInfo | undefined) => userInfo.value = info
  const setToken = (key: string | null) => token.value = key
  const login = async (params: IUserAccountLoginParams | IUserMobileLoginParams) => {
    const { data } = await userLoginApi(params)
    if (data?.token)
      setToken(data.token)
  }
  const getUserInfo = async () => {
    const { data } = await userGetInfoApi()
    if (data)
      setUserInfo(data)
  }
  const logout = async () => {
    setToken(null)
    setUserInfo(undefined)
    router.replace({
      path: '/login',
      query: {
        redirect: router.currentRoute.value.path,
      },
    })
    message?.success(t('global.layout.header.right.logout.success'))
  }

  return {
    userInfo,
    token,
    setUserInfo,
    login,
    getUserInfo,
    logout,
  }
})
