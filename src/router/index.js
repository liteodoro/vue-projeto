import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/logon',
    name: 'logon',
    component: () => import('@/views/LogonView.vue') 
  },

 {
   path: '/produtos',
   name: 'produtos',
   component: () => import('@/views/ProdutosView.vue')
 }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
