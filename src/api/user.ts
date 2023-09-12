import { useGet, usePost } from '@/utils/request'
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
export type TUserSendCodeParams = Pick<IUserMobileLoginParams, 'mobile'>

export const userLoginUrl = '/user/login'
export const userSendCodeUrl = '/user/send-code'
export const userGetInfoUrl = '/user/info'

// 登录
export const userLoginApi = (params: IUserAccountLoginParams | IUserMobileLoginParams) => {
  return usePost<IUserAccountLoginParams | IUserMobileLoginParams, IUserLoginResult>(userLoginUrl, params)
}
// 发送验证码
export const userSendCodeApi = (params: TUserSendCodeParams) => {
  return usePost<TUserSendCodeParams, any>(userSendCodeUrl, params)
}
// 获取用户信息
export const userGetInfoApi = () => {
  return useGet<any, IUserInfo>(userGetInfoUrl)
}
