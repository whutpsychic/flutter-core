import { createRouter, createWebHashHistory } from 'vue-router'
import Nav from '../views/nav.vue'
import DemoAppHome from '../views/demoapp/HomeView.vue'
import H5Doc from '../views/document-h5/main.vue'

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
          path: 'preview',
          component: () => import('../views/document-h5/contents/preview.vue')
        },
        {
          path: 'app-container',
          component: () => import('../views/document-h5/contents/app-container.vue')
        },
        {
          path: 'form',
          component: () => import('../views/document-h5/contents/form.vue')
        },
        {
          path: 'pullable-list',
          component: () => import('../views/document-h5/contents/pullable-list.vue')
        },
        {
          path: 'top-searcher',
          component: () => import('../views/document-h5/contents/top-searcher.vue')
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
      redirect: "/h5/doc/preview"
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
