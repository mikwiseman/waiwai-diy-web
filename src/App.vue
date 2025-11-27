<template>
  <div id="app">
    <SiteToolbar />
    <div id="luxy">
      <router-view />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import SiteToolbar from '@/components/SiteToolbar.vue'

export default {
  name: 'App',
  components: {
    SiteToolbar
  },
  setup() {
    const { t } = useI18n()

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
          content: 'https://waiwai.diy'
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
          content: 'ru'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://waiwai.diy'
        }
      ]
    }))

    // Apply meta tags
    useHead(metaTags)

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
@import '@/assets/css/deep-blue-overrides.css';

/* Other styles */
.logo-card-whoverp .logo-image-media {
  filter: none;
  opacity: 100%;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.bg-gradient:tiny {
  filter: blur(100px);
  -webkit-filter: blur(100px);
}

#luxy {
  padding-top: 84px;
}

@media (max-width: 600px) {
  #luxy {
    padding-top: 120px;
  }
}
</style>
