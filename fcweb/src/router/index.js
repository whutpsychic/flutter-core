import { createRouter, createWebHashHistory } from 'vue-router'
import DemoAppHome from '../views/demoapp/HomeView.vue'
import Nav from '../views/nav.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/nav',
      component: Nav
    },
    // --------------------------- flutter-core document ---------------------------
    // --------------------------- h5 components document ---------------------------
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
    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/404/main.vue')
    },
  ]
})

export default router
