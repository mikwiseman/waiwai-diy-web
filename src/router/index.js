import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Home.vue'
import i18n from '@/i18n'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      i18n.locale = 'en'
      next()
    }
  },
  {
    path: '/ru',
    name: 'home-ru',
    component: HomePage,
    beforeEnter: (to, from, next) => {
      i18n.locale = 'ru'
      next()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router 