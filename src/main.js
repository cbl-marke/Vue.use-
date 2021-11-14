import Vue from 'vue'
import App from './App.vue'
import Loding from '../src/componet/loding'

Vue.use(Loding)
new Vue({
  el: '#app',
  render: h => h(App)
})
