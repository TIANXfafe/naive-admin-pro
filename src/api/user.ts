import { usePost } from '@/utils/request'
import type { TIncludeNull } from '@/utils/types'

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

export interface IUserAccountLoginParams {
  username: TIncludeNull<string>
  password: TIncludeNull<string>
  captcha?: TIncludeNull<string>
  rememberMe?: TIncludeNull<boolean>
}

export interface IUserMobileLoginParams {
  mobile: TIncludeNull<string>
  code: TIncludeNull<string>
  type: 'mobile'
  rememberMe?: TIncludeNull<boolean>
}

export interface IUserLoginResult {
  token: string
}

export const userLoginUrl = '/user/login'

export const userLoginApi = (params: IUserAccountLoginParams | IUserMobileLoginParams) => {
  return usePost<IUserAccountLoginParams | IUserMobileLoginParams, IUserLoginResult>(userLoginUrl, params)
}

export type TUserSendCodeParams = Pick<IUserMobileLoginParams, 'mobile'>

export const userSendCodeUrl = '/user/send-code'

export const userSendCodeApi = (params: TUserSendCodeParams) => {
  return usePost<TUserSendCodeParams, any>(userSendCodeUrl, params)
}
