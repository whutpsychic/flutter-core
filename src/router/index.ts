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
        {
          path: '/home/done',
          component: () => import('../views/base/done.vue')
        }
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
  ]
});

export default router;
