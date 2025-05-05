<template>
  <div>
    <useHead>
      <title>{{ title }}</title>
      <meta name="description" :content="description" />
      <meta name="keywords" :content="keywords" />
      
      <meta property="og:title" :content="title" />
      <meta property="og:description" :content="description" />
      <meta property="og:type" content="website" />
      <meta property="og:url" :content="currentUrl" />
      <meta property="og:image" :content="ogImage" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" :content="title" />
      <meta name="twitter:description" :content="description" />
      <meta name="twitter:image" :content="ogImage" />
      
      <link rel="canonical" :href="currentUrl" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="ru" />
      <meta name="revisit-after" content="7 days" />
    </useHead>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default {
  name: 'MetaTags',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    keywords: {
      type: String,
      default: ''
    },
    ogImage: {
      type: String,
      default: 'https://waiwai.diy/og-image.jpg'
    }
  },
  setup() {
    const route = useRoute()
    const { locale } = useI18n()
    
    const currentUrl = computed(() => {
      const baseUrl = locale.value === 'ru' ? 'https://waiwai.diy' : 'https://whitewai.sale'
      return `${baseUrl}${route.fullPath}`
    })

    return {
      currentUrl
    }
  }
}
</script> 