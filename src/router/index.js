import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mikwiseman',
    name: 'telegram-redirect',
    beforeEnter: () => {
      const telegramUrl = 'https://t.me/mikwiseman'
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        let redirected = false
        const redirect = () => {
          if (!redirected) {
            redirected = true
            window.location.href = telegramUrl
          }
        }

        window.gtag('event', 'qr_link_visit', {
          event_category: 'qr_redirect',
          event_label: 'mikwiseman',
          transport_type: 'beacon',
          event_callback: redirect
        })

        setTimeout(redirect, 500)
      } else {
        window.location.href = telegramUrl
      }
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 
