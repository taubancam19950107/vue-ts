import Vue from 'vue'
import VueRouter, { RouteConfig, RawLocation } from 'vue-router'
import HomeLayout from '@/layouts/HomeLayout.vue'
import { setDocumentTitle } from '@/utils/dom'
import { PAGE_TITLE } from '@/config/constants'
import { trans } from '@/i18n/index'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: trans('label.homepage')
        }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: {
          title: trans('label.about')
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && typeof to.meta.title !== 'undefined') {
    setDocumentTitle(`${to.meta.title} | ${PAGE_TITLE}`)
  } else {
    setDocumentTitle(PAGE_TITLE)
  }

  return next()
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
