import { createRouter, createWebHashHistory } from 'vue-router';
import Nav from '../views/nav.vue';
import Home from '../views/home.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/nav',
      component: Nav
    },
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
      ]
    },
    // {
    //   path: '/home',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
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
      component: () => import('../views/404/main.vue')
    },
  ]
});

export default router;
