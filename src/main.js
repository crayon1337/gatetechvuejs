import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'
import store from './store'

// Import the configuration file
import Config from './config.js'

// Use the configuration file
Vue.prototype.appConfig = Config

Vue.use(Toaster, {time: 5000})

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let isAdmin = router.app.$options.store.getters['0/user'].isAdmin;

  if(to.name === 'admin.categories' && !isAdmin)
    next('/')
  else if(to.name === 'admin.categories.create' && !isAdmin)
    next('/')
  else if(to.name === 'admin.categories.update' && !isAdmin)
    next('/')
  else if(to.name === 'admin.posts' && !isAdmin)
    next('/')
  else if(to.name === 'admin.posts.update' && !isAdmin)
    next('/')
  else if(to.name === 'admin.users' && !isAdmin)
    next('/')
  else
    next();
})

new Vue({
  render: h => h(App),
  router,
  store: store,
}).$mount('#app')
