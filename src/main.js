import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import logo from './components/logo.vue'
import magicButton from './components/magicButton.vue'
import content from './components/content.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store/store'

library.add(faStar)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('logo', logo)
Vue.component('magic-button', magicButton)
Vue.component('magic-content', content)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
