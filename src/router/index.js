import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Home.vue'
import BlogPost from '@/views/BlogPost.vue'
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
  },
  {
    path: '/blog/:id',
    name: 'blog-post',
    component: BlogPost,
    beforeEnter: (to, from, next) => {
      i18n.locale = 'en'
      next()
    },
    props: true
  },
  {
    path: '/ru/blog/:id',
    name: 'blog-post-ru',
    component: BlogPost,
    beforeEnter: (to, from, next) => {
      i18n.locale = 'ru'
      next()
    },
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router 