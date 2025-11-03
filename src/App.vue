<template>
  <div id="app">
    <div id="luxy">
      <router-view />
    </div>
  </div>
</template>

<script>
import { onMounted, computed, watch } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  setup() {
    const { t, locale } = useI18n()

    // Compute meta tags based on current locale
    const metaTags = computed(() => ({
      title: t('meta.title'),
      meta: [
        {
          name: 'description',
          content: t('meta.description')
        },
        {
          name: 'keywords',
          content: t('meta.keywords')
        },
        // Open Graph tags
        {
          property: 'og:title',
          content: t('meta.ogTitle')
        },
        {
          property: 'og:description',
          content: t('meta.ogDescription')
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: locale.value === 'en' ? 'https://wai.sale' : 'https://waiwai.diy'
        },
        // Twitter Card tags
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: t('meta.twitterTitle')
        },
        {
          name: 'twitter:description',
          content: t('meta.twitterDescription')
        },
        // Language tag
        {
          name: 'language',
          content: locale.value
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: locale.value === 'en' ? 'https://wai.sale' : 'https://waiwai.diy'
        }
      ]
    }))

    // Apply meta tags
    useHead(metaTags)

    // Watch for locale changes and update meta tags
    watch(locale, () => {
      // Meta tags will automatically update due to computed property
    })

    onMounted(() => {
      // Initialize Luxy.js
      if (!/iPhone|iPad|Android/i.test(navigator.userAgent)) {
        window.luxy.init({
          wrapper: '#luxy',
          wrapperSpeed: 0.08,
        });
      }
    })
  }
}
</script>

<style>
@import '@/assets/css/normalize.css';
@import '@/assets/css/webflow.css';
@import '@/assets/css/waiwaidiy.webflow.css';

/* Other styles */
body {
  font-family: 'Roboto Mono', monospace !important;
}

body * {
  font-family: inherit !important;
}

.logo-card-whoverp .logo-image-media {
  filter: none;
  opacity: 100%;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.bg-gradient:tiny {
  filter: blur(100px);
  -webkit-filter: blur(100px);
}
</style>
