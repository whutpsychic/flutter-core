import { createRouter, createWebHashHistory } from 'vue-router'
import Nav from '../views/nav.vue'
import DemoAppHome from '../views/demoapp/HomeView.vue'
import H5Doc from '../views/document-h5/main.vue'

import C1 from '../views/document-h5/contents/c1.vue'
import C2 from '../views/document-h5/contents/c2.vue'
import C3 from '../views/document-h5/contents/c3.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/nav',
      component: Nav
    },
    // --------------------------- flutter-core document ---------------------------
    // --------------------------- h5 components document ---------------------------
    {
      path: '/h5/:name',
      component: H5Doc,
      children: [
        {
          path: '',
          // component: () => import('../views/document-h5/contents/c1.vue')
          component: C1
        },
        {
          path: 'c1',
          // component: () => import('../views/document-h5/contents/c1.vue')
          component: C1
        },
        {
          path: 'c2',
          // component: () => import('../views/document-h5/contents/c1.vue')
          component: C2
        },
        {
          path: 'c3',
          // component: () => import('../views/document-h5/contents/c2.vue')
          component: C3
        },
      ]
    },
    // --------------------------- demoapp ---------------------------
    {
      path: '/home',
      // name: 'home',
      component: DemoAppHome
    },
    {
      path: '/flutterBase',
      // name: 'flutterBase',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/demoapp/FlutterBase.vue')
    },
    {
      path: '/flutterDevice',
      // name: 'flutterDevice',
      component: () => import('../views/demoapp/FlutterDevice.vue')
    },
    {
      path: '/devicePermissions',
      // name: 'devicePermissions',
      component: () => import('../views/demoapp/DevicePermissions.vue')
    },
    // ********************************************************************************
    // 默认导向
    {
      path: '/',
      redirect: "/nav"
    },
    {
      path: '/h5',
      redirect: "/h5/doc/c1"
    },
    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/404/main.vue')
    },
  ]
})

export default router
