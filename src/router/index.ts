import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export default createRouter({
  routes,
  history: createWebHistory(import.meta.env.VITE_APP_BASE ?? '/'),
})
