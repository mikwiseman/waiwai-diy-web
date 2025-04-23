import { createI18n } from 'vue-i18n'
import ru from '@/translations/ru.json'
import en from '@/translations/en.json'

// Function to determine locale based on domain
function getLocaleFromDomain() {
  const domain = window.location.hostname
  console.log('Detected domain:', domain); // Added for debugging
  if (domain === 'wai.sales' || domain === 'wai.sale') {
    console.log('Setting locale to: en'); // Added for debugging
    return 'en'
  }
  console.log('Setting locale to: ru'); // Added for debugging
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