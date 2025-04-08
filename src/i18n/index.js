import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ru from '@/translations/ru.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages: {
    ru
  }
}) 