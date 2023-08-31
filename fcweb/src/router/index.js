import { createRouter, createWebHashHistory } from 'vue-router'
import Nav from '../views/nav.vue'
import H5Doc from '../views/document-h5/main.vue'
import FlutterCoreDoc from '../views/document-flutter-core/main.vue'

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
    // --------------------------- flutter-core ---------------------------
    {
      path: '/flutter-core/:name',
      component: FlutterCoreDoc,
      children: [
        {
          path: 'preview',
          component: () => import('../views/document-flutter-core/contents/preview.vue')
        },
        {
          path: 'toast',
          component: () => import('../views/document-flutter-core/contents/toast.vue')
        },
      ]
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
    {
      path: '/flutter-core',
      redirect: "/flutter-core/doc/preview"
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
