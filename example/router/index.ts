// tslint:disable
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
// const routes = [
  {
    path: '/',
    // redirect: '/largeUpload'
    component: Home
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: () => import('../components/HelloWorld.vue')
  },
  {
    path: '/button',
    name: 'button',
    component: () => import('../components/button.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: () => import('../components/icon.vue')
  },
  {
    path: '/loading',
    name: 'loading',
    component: () => import('../components/loading.vue')
  }
  //   {
  //     path: '/detail/:id',
  //     name: 'Home',
  //     component: () => import('@/views/Detail.vue')
  //   },
  //   {
  // path: '/about',
  // name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
