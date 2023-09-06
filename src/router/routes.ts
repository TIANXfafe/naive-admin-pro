import type { RouteRecordRaw } from 'vue-router'
import { Layout } from '@/layout'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
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
    ],
  },
]

export default routes
