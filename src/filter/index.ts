import Vue from 'vue'

/**
 * Upper case string
 * Ex: name => NAME
 * */
Vue.filter('toUpperCase', function (value: string) {
  if (!value) return
  return value.toUpperCase()
})
