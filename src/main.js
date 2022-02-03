import Vue from 'vue'
import App from './App.vue'
import Login from './components/Auth/Login.vue'
import Register from './components/Auth/Register.vue'
import Home from './components/Home.vue'

import Router from 'vue-router'
import Toaster from 'v-toaster'
import 'v-toaster/dist/v-toaster.css'

Vue.use(Toaster, {time: 5000})
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
