import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import i18n from '@/locales'
import router from '@/router/index.ts'

export interface IResponseBody<T = any> {
  code: number
  msg: string
  data?: T
}

const baseURL = '/api'

const instance = axios.create({
  baseURL,
  timeout: 60000,
})

const requestHandler = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const token = useAuthorization()
  if (token.value) {
    config.headers = {
      ...config.headers,
      [AUTHORIZE_KEY]: token.value,
    }
  }
  return config
}

const responseHandler = (response: any): IResponseBody<any> | AxiosResponse<any> | Promise<any> | any => {
  return response.data
}
const errorHandler = (error: AxiosError): Promise<any> => {
  const { notification } = useGlobalConfig()
  const token = useAuthorization()

  if (error.response) {
    const { data, status, statusText } = error.response as AxiosResponse<IResponseBody>
    if (status === 401) {
      notification?.error({
        title: i18n.global.t('global.request.error.401'),
        content: data?.msg || statusText,
        duration: 3000,
      })
      token.value = null
      router.replace({
        path: '/login',
        query: {
          redirect: router.currentRoute.value.path,
        },
      }).then(() => {})
    }
    else if (status === 403) {
      notification?.error({
        title: i18n.global.t('global.request.error.403'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else if (status === 500) {
      notification?.error({
        title: i18n.global.t('global.request.error.500'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
    else {
      notification?.error({
        title: i18n.global.t('global.request.error.other'),
        content: data?.msg || statusText,
        duration: 3000,
      })
    }
  }
  return Promise.reject(error)
}

instance.interceptors.request.use(requestHandler)
instance.interceptors.response.use(responseHandler, errorHandler)

export default instance

export const useGet = <T = any, R = any>(
  url: string,
  params?: T,
  config?: AxiosRequestConfig,
): Promise<IResponseBody<R>> => {
  return instance.request({
    url,
    params,
    method: 'GET',
    ...config,
  })
}

export const usePost = <T = any, R = any>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig,
): Promise<IResponseBody<R>> => {
  return instance.request({
    url,
    data,
    method: 'POST',
    ...config,
  })
}

export const usePut = <T = any, R = any>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig,
): Promise<IResponseBody<R>> => {
  return instance.request({
    url,
    data,
    method: 'PUT',
    ...config,
  })
}

export const useDelete = <T = any, R = any>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig,
): Promise<IResponseBody<R>> => {
  return instance.request({
    url,
    data,
    method: 'DELETE',
    ...config,
  })
}
