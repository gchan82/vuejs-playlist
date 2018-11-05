import Vue from 'vue'
import App from './App.vue'

export const bus = new Vue()

var vue = new Vue({
  el: '#app',
  render: h => h(App)
})

vue()
bus()
