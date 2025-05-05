import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)

const vm = app.mount('#app')

// Expose Vue instance for i18n.js
window.vm = vm;
