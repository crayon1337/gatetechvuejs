<template>
  <div>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top header-inner-pages">
      <div class="container d-flex align-items-center justify-content-between">

        <h1 class="logo"><a href="index.html">Gatetechs</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar">
          <ul>
            <router-link class="nav-link" :to="{name: 'home'}" active-class="active">Home</router-link>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#categories">Categories</a></li>
            <li><a class="nav-link scrollto " href="#posts">Posts</a></li>
            <router-link class="nav-link" :to="{name: 'login'}" active-class="active" v-if="!this.$store.getters['0/authenticated']">Login</router-link>
            <router-link class="nav-link" :to="{name: 'register'}" active-class="active" v-if="!this.$store.getters['0/authenticated']">Register</router-link>
            <router-link class="nav-link" :to="{name: 'posts.create'}" active-class="active" v-if="this.$store.getters['0/authenticated']">Create Post</router-link>
            <router-link class="nav-link" :to="{name: 'settings'}" active-class="active" v-if="this.$store.getters['0/authenticated']">Settings</router-link>
            <li class="dropdown" v-if="this.$store.getters['0/authenticated'] && this.$store.getters['0/user'].isAdmin"><a href="#"><span>Dashboard</span> <i class="bi bi-chevron-down"></i></a>
              <ul>
                <li><router-link :to="{ name: 'admin.users' }">Users</router-link></li>
                <li><router-link :to="{ name: 'admin.categories' }">Categories</router-link></li>
                <li><router-link :to="{ name: 'admin.posts' }">Posts</router-link></li>
              </ul>
            </li>
            <li><a class="nav-link" @click="logout" v-if="this.$store.getters['0/authenticated']">Logout</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

      </div>
    </header><!-- End Header -->
  </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'

export default {
  name: "Header",

  methods: {
    ...mapActions({
      signOut: '0/logout'
    }),

    async logout() {
      await axios.create({
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.$store.getters['0/user'].token,
        },
      }).post('http://127.0.0.1:8000/api/user/logout', this.$store.getters['0/user'].id).then(({data}) => {
        this.signOut()
        this.$toaster.success(data.message)
        this.$router.push({name: 'home'})
      }).catch((error) => {
        this.$toaster.error(error)
      })
    }
  }
}
</script>

<style scoped>

</style>