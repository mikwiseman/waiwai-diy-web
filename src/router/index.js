import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Blog from '@/views/Blog.vue'
import i18n from '@/i18n'

const presentationRedirects = [
  {
    path: '/sales',
    name: 'sales-presentation-redirect',
    translationKey: 'agents.sales.presentationLink'
  },
  {
    path: '/hr',
    name: 'hr-presentation-redirect',
    translationKey: 'agents.hr.presentationLink'
  },
  {
    path: '/agents',
    name: 'automation-presentation-redirect',
    translationKey: 'agents.automation.presentationLink'
  },
  {
    path: '/trinity',
    name: 'custom-presentation-redirect',
    translationKey: 'agents.custom.presentationLink'
  },
  {
    path: '/wowuni',
    name: 'training-presentation-redirect',
    translationKey: 'agents.training.presentationLink'
  }
]

const trackAndRedirect = (targetUrl, eventLabel) => {
  let redirected = false

  const redirect = () => {
    if (!redirected) {
      redirected = true
      window.location.replace(targetUrl)
    }
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'external_redirect', {
      event_category: 'presentation_redirect',
      event_label: eventLabel,
      destination_url: targetUrl,
      transport_type: 'beacon',
      event_callback: redirect
    })

    setTimeout(redirect, 500)
  } else {
    redirect()
  }
}

const externalRedirectRoutes = presentationRedirects.map(
  ({ path, name, translationKey }) => ({
    path,
    name,
    beforeEnter: () => {
      const targetUrl = i18n.global.t(translationKey)

      if (
        typeof window !== 'undefined' &&
        typeof targetUrl === 'string' &&
        targetUrl !== translationKey
      ) {
        trackAndRedirect(targetUrl, path)
        return false
      }

      return { name: 'home' }
    }
  })
)

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
  },
  ...externalRedirectRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 
