import { AxiosError } from 'axios'
import router from '@/router'

export const loginRoute = '/login'

export const allowRoutes = [
  '/error',
  '/404',
  '/403',
  '/500',
  '/401',
]

export const hasLoginAllowRoutes = [...allowRoutes, loginRoute]

router.beforeEach(async (to, _, next) => {
  const userStore = useUserStore()
  const token = useAuthorization()
  const globalConfig = useGlobalConfig()
  globalConfig.loadingBar?.start()

  if (!token.value) {
    if (!hasLoginAllowRoutes.includes(to.path)) {
      next({
        path: loginRoute,
        query: {
          redirect: to.path,
        },
      })
      return
    }
    else {
      if (!userStore.userInfo && !allowRoutes.includes(to.path)) {
        try {
          await userStore.getUserInfo()
          if (to.path === loginRoute) {
            next({ path: '/' })
            return
          }
        }
        catch (err) {
          if (err instanceof AxiosError && err?.response?.status === 401) {
            return
          }
          else {
            next({
              path: '/error',
              query: {
                redirect: to.path,
              },
            })
            return
          }
        }
      }
    }
  }
  next()
})

router.afterEach((to) => {
  const globalConfig = useGlobalConfig()
  globalConfig.loadingBar?.finish()
  const appStore = useAppStore()
  const title = to.meta?.title
  if (title)
    document.title = `${title} - ${appStore.layout.title}`

  else
    if (appStore.layout.title)
      document.title = appStore.layout.title
})
