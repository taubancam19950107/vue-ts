import Vue from 'vue'

/**
 * Upper case string
 * Ex: name => NAME
 * */
Vue.filter('toUpperCase', (value: string) => {
  if (!value) return
  return value.toUpperCase()
})
