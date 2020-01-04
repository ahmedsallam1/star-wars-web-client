import Vue from 'vue'
import App from './App.vue'
import logo from './components/logo.vue'

Vue.config.productionTip = false
Vue.component('logo', logo)

new Vue({
  render: h => h(App),
}).$mount('#app')
