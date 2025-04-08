import { createI18n } from 'vue-i18n'
import ru from '@/translations/ru.json'

export default createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru
  }
}) 