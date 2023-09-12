import { type IUserAccountLoginParams, type IUserInfo, type IUserMobileLoginParams, userGetInfoApi, userLoginApi } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<IUserInfo>()
  const token = useAuthorization()
  const setUserInfo = (info: IUserInfo) => userInfo.value = info
  const setToken = (key: string) => token.value = key
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

  return {
    userInfo,
    token,
    setUserInfo,
    login,
    getUserInfo,
  }
})
