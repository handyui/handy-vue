// tslint:disable
import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../views/home.vue';
import Documents from '../views/documents/Index.vue';
// const routes: Array<RouteConfig> = [
const routes = [
  {
    path: '/',
    component: home,
  },
  {
    path: '/documents',
    component: Documents,
    children: [
      {
        path: 'quick-start',
        component: () => import('../views/documents/QuickStart.vue'),
      },
      {
        path: 'change-log',
        component: () => import('../views/documents/ChangeLog.vue'),
      },
      {
        path: 'custom-theme',
        component: () => import('../views/documents/CustomTheme.vue'),
      },
      {
        path: 'button',
        component: () => import('../views/components/ButtonPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
