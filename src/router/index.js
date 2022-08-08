import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/Demo.vue'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  }, {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/category',
    name: 'Category',
    component: Category
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }, {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
