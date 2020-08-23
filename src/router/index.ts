import Vue from 'vue'
import VueRouter, { RouteConfig, RawLocation } from 'vue-router'
import HomeLayout from '@/layouts/HomeLayout.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/**
 * History push.
 *
 * @param location
 * @returns {Promise<Route>}
 */
const push = (location: RawLocation) => {
  return router.push(location)
}

export {
  push,
  router as default
}
