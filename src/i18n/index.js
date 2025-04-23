import { createI18n } from 'vue-i18n'
import ru from '@/translations/ru.json'
import en from '@/translations/en.json'

// Function to determine locale based on domain
function getLocaleFromDomain() {
  const domain = window.location.hostname
  if (domain === 'wai.sales') {
    return 'en'
  }
  return 'ru' // Default to Russian for waiwai.diy and other domains
}

export default createI18n({
  legacy: false, // Set to false to use Composition API
  locale: getLocaleFromDomain(),
  fallbackLocale: 'ru',
  messages: {
    ru,
    en
  }
}) 