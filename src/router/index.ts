import { createRouter, createWebHashHistory } from 'vue-router';
import Nav from '../views/nav.vue';
import Home from '../views/home.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/nav', component: Nav },
    {
      path: '/home',
      component: Home,
      children: [
        // ------------------------- 基础功能 -------------------------
        { path: '/home/done', component: () => import('../views/base/done.vue') },
        { path: '/home/ipconfig', component: () => import('../views/base/ipconfig.vue') },
        { path: '/home/modalConfirm', component: () => import('../views/base/modalConfirm.vue') },
        { path: '/home/modalLoading', component: () => import('../views/base/modalLoading.vue') },
        { path: '/home/modalProgress', component: () => import('../views/base/modalProgress.vue') },
        { path: '/home/modalTips', component: () => import('../views/base/modalTips.vue') },
        { path: '/home/readLocal', component: () => import('../views/base/readLocal.vue') },
        { path: '/home/recordLocal', component: () => import('../views/base/recordLocal.vue') },
        { path: '/home/toast', component: () => import('../views/base/toast.vue') },
        // ------------------------- 设备功能 -------------------------
        { path: '/home/appUpdate', component: () => import('../views/device/appUpdate.vue') },
        { path: '/home/checkNetworkType', component: () => import('../views/device/checkNetworkType.vue') },
        { path: '/home/getSafeHeight', component: () => import('../views/device/getSafeHeight.vue') },
        { path: '/home/launchInExplorer', component: () => import('../views/device/launchInExplorer.vue') },
        { path: '/home/launchInnerExplorer', component: () => import('../views/device/launchInnerExplorer.vue') },
        { path: '/home/phonecall', component: () => import('../views/device/phonecall.vue') },
        { path: '/home/scan', component: () => import('../views/device/scan.vue') },
        { path: '/home/scanBarcode', component: () => import('../views/device/scanBarcode.vue') },
        { path: '/home/scanQR', component: () => import('../views/device/scanQR.vue') },
        { path: '/home/setTopbarStyleToDark', component: () => import('../views/device/setTopbarStyleToDark.vue') },
        { path: '/home/setTopbarStyleToLight', component: () => import('../views/device/setTopbarStyleToLight.vue') },
        { path: '/home/takePhoto', component: () => import('../views/device/takePhoto.vue') },
        // ------------------------- 权限相关 -------------------------
        { path: '/home/permissions/request', component: () => import('../views/permissions/request.vue') },
        { path: '/home/permissions/openAppSettings', component: () => import('../views/permissions/openAppSettings.vue') },
      ]
    },
    // ------------------------- 试验场 -------------------------
    { path: '/test-demo', component: () => import('../views/test-demo.vue') },
    // ------------------- redirect -------------------
    {
      path: '/',
      redirect: '/nav'
    },
    {
      path: '/home',
      redirect: '/home/done'
    },
    // 404
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/404.vue')
    },
  ]
});

export default router;
