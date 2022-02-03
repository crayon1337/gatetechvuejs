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
            <li><a class="nav-link scrollto " href="#members">Members</a></li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
            <router-link class="nav-link" :to="{name: 'login'}" active-class="active">Login</router-link>
            <router-link class="nav-link" :to="{name: 'register'}" active-class="active">Register</router-link>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav><!-- .navbar -->

      </div>
    </header><!-- End Header -->
  </div>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>

</style>