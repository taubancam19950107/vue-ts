import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'
import '@/assets/scss/main.scss'
import './filter'
import './directive'

// UI design components
// https://element.eleme.io/#/en-US/component/quickstart
import ElementUi from 'element-ui'
import '@/theme/index.scss'
Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  i18n: i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
