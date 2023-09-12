import { usePost } from '@/utils/request'

export interface IUserInfo {
  id: string
  username: string
  email?: string
  mobile?: string
  avatar?: string
  signature?: string
  realName?: string
  money?: number
  birth?: string
}

export const userLoginUrl = '/user/login'

export interface IUserAccountLoginParams {
  username: string
  password: string
  captcha?: string
}

export interface IUserMobileLoginParams {
  mobile: string
  code: string
  type: 'mobile'
}

export interface IUserLoginResult {
  token: string
}

export const userLoginApi = (params: IUserAccountLoginParams | IUserMobileLoginParams) => {
  return usePost<IUserAccountLoginParams | IUserMobileLoginParams, IUserLoginResult>(userLoginUrl, params)
}
