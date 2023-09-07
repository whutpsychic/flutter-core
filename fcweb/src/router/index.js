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
        // -------------------------- native --------------------------
        {
          path: 'toast',
          component: () => import('../views/document-flutter-core/contents/toast.vue')
        },
        {
          path: 'modalTips',
          component: () => import('../views/document-flutter-core/contents/modalTips.vue')
        },
        {
          path: 'modalConfirm',
          component: () => import('../views/document-flutter-core/contents/modalConfirm.vue')
        },
        {
          path: 'modalLoading',
          component: () => import('../views/document-flutter-core/contents/modalLoading.vue')
        },
        {
          path: 'modalProgress',
          component: () => import('../views/document-flutter-core/contents/modalProgress.vue')
        },
        {
          path: 'done',
          component: () => import('../views/document-flutter-core/contents/done.vue')
        },
        {
          path: 'recordLocal',
          component: () => import('../views/document-flutter-core/contents/recordLocal.vue')
        },
        {
          path: 'readLocal',
          component: () => import('../views/document-flutter-core/contents/readLocal.vue')
        },
        {
          path: 'ipconfig',
          component: () => import('../views/document-flutter-core/contents/ipconfig.vue')
        },
        // -------------------------- device --------------------------
        {
          path: 'appUpdate',
          component: () => import('../views/document-flutter-core/contents/appUpdate.vue')
        },
        {
          path: 'phonecall',
          component: () => import('../views/document-flutter-core/contents/phonecall.vue')
        },
        {
          path: 'launchInExplorer',
          component: () => import('../views/document-flutter-core/contents/launchInExplorer.vue')
        },
        {
          path: 'launchInnerExplorer',
          component: () => import('../views/document-flutter-core/contents/launchInnerExplorer.vue')
        },
        {
          path: 'scanQR',
          component: () => import('../views/document-flutter-core/contents/scanQR.vue')
        },
        {
          path: 'scanBarcode',
          component: () => import('../views/document-flutter-core/contents/scanBarcode.vue')
        },
        {
          path: 'scan',
          component: () => import('../views/document-flutter-core/contents/scan.vue')
        },
        {
          path: 'checkNetworkType',
          component: () => import('../views/document-flutter-core/contents/checkNetworkType.vue')
        },
        {
          path: 'getSafeHeight',
          component: () => import('../views/document-flutter-core/contents/getSafeHeight.vue')
        },
        {
          path: 'setTopbarStyleToDark',
          component: () => import('../views/document-flutter-core/contents/setTopbarStyleToDark.vue')
        },
        {
          path: 'setTopbarStyleToLight',
          component: () => import('../views/document-flutter-core/contents/setTopbarStyleToLight.vue')
        },
        {
          path: 'takePhoto',
          component: () => import('../views/document-flutter-core/contents/takePhoto.vue')
        },
        // -------------------------- permissions --------------------------
        {
          path: 'permissions/camera',
          component: () => import('../views/document-flutter-core/contents/permissions/camera.vue')
        },
        {
          path: 'permissions/storage',
          component: () => import('../views/document-flutter-core/contents/permissions/storage.vue')
        },
        {
          path: 'permissions/openAppSettings',
          component: () => import('../views/document-flutter-core/contents/permissions/openAppSettings.vue')
        },
      ]
    },
    // --------------------------- code-generator ---------------------------
    {
      path: '/code-generator',
      component: () => import('../views/code-generator/main.vue')
    },
    {
      path: '/code-generator/pullable-list',
      component: () => import('../views/code-generator/pullable-list/main.vue')
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
