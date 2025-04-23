import { createI18n } from 'vue-i18n'
import ru from '@/translations/ru.json'
import en from '@/translations/en.json'

// Function to determine locale based on domain
function getLocaleFromDomain() {
  const domain = window.location.hostname
  
  if (domain.includes('wai.sale')) {
    return 'en'
  }
  return 'ru'
}

export default createI18n({
  legacy: false, 
  locale: getLocaleFromDomain(),
  fallbackLocale: 'ru',
  messages: {
    ru,
    en
  }
}) 