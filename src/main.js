import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'

Vue.use(Toaster, {time: 5000})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
