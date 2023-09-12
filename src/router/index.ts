import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export default createRouter({
  routes: [
    ...routes,
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login/index.vue'),
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('@/pages/exception/error.vue'),
    },
  ],
  history: createWebHistory(import.meta.env.VITE_APP_BASE ?? '/'),
})
