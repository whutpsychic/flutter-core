import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutFlutter',
      name: 'aboutFlutter',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutFlutter.vue')
    },
    {
      path: '/aboutVant',
      name: 'aboutVant',
      component: () => import('../views/AboutVant.vue')
    }
  ]
})

export default router
