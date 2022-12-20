import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/AdminView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HelloWorld
  // },
  {
    path: '/admin',
    name: 'admin',
    // component: () => import(/* webpackChunkName: "about" */ '../views/AdminView.vue')
    component: Admin
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
