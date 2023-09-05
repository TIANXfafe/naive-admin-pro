import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/index.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/workspace',
    name: 'Workspace',
    component: () => import('@/pages/workspace/index.vue'),
    meta: {
      title: '工作台',
    },
  },
]

export default routes
