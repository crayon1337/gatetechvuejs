<template>
  <div>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top " v-bind:class="{headerScrolled: scrollPosition > 100}">
      <div class="container d-flex align-items-center justify-content-between">

        <h1 class="logo"><a href="index.html">Gatetechs</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

        <nav id="navbar" class="navbar">
          <ul>
            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
            <li><a class="nav-link scrollto" href="#about">About</a></li>
            <li><a class="nav-link scrollto" href="#categories">Categories</a></li>
            <li><a class="nav-link scrollto " href="#posts">Posts</a></li>
            <li><a class="nav-link scrollto " href="#members">Members</a></li>
            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
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

  data: function () {
    return {
      scrollPosition: null
    };
  },

  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
}
</script>

<style scoped>

</style>