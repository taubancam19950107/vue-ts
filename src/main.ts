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
// https://github.com/vueComponent/ant-design-vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  i18n: i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
