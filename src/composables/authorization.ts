export const AUTHORIZE_KEY = 'Authorization'

export const useAuthorization = createGlobalState(() => useStorage(AUTHORIZE_KEY, null))
