import { merge } from 'lodash-es'

export interface IGlobalConfig {
  notification?: ReturnType<typeof useNotification>
  message?: ReturnType<typeof useMessage>
  dialog?: ReturnType<typeof useDialog>
  loadingBar?: ReturnType<typeof useLoadingBar>
}

const globalConfig: IGlobalConfig = {

}

export const useGlobalConfig = () => {
  return globalConfig
}

export const useGlobalConfigProvider = (config: IGlobalConfig) => {
  merge(globalConfig, config)
}
