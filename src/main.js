import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(i18n)
app.use(head)

const vm = app.mount('#app')

// Expose Vue instance for i18n.js
window.vm = vm;
