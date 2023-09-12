export const AUTHORIZE_KEY = 'Authorization'

export const useAuthorization = createGlobalState(() => useStorage<null | string>(AUTHORIZE_KEY, null))
