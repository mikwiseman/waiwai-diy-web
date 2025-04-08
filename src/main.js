import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

Vue.config.productionTip = false

const vm = new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

// Expose Vue instance for i18n.js
window.vm = vm;
