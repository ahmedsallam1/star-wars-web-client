import Vue from 'vue'
import App from './App.vue'
import logo from './components/logo.vue'
import magicButton from './components/magicButton.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('logo', logo)
Vue.component('magic-button', magicButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
