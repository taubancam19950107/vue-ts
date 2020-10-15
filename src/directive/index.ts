import Vue from 'vue'

/**
 * Round element
 * Ex: <div v-round></div>
 * */
Vue.directive('round', (el: HTMLElement) => {
  el.style.borderRadius = '50%'
})
