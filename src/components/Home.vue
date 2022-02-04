<template>
  <div>
    <!-- ======= Hero Section ======= -->
    <section id="hero">
      <div class="hero-container">
        <h3>Welcome to <strong>Gatetechs</strong></h3>
        <h1>We're news platform</h1>
        <h2>We are team of talented designers making websites with Bootstrap</h2>
        <a href="#about" class="btn-get-started scrollto">Get Started</a>
      </div>
    </section><!-- End Hero -->

    <main id="main">

      <!-- ======= About Section ======= -->
      <section id="about" class="about">
        <div class="container">

          <div class="section-title">
            <h2>About</h2>
            <h3>Learn More <span>About Us</span></h3>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
          </div>

          <div class="row content">
            <div class="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                <li><i class="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              </ul>
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <a href="#" class="btn-learn-more">Learn More</a>
            </div>
          </div>

        </div>
      </section><!-- End About Section -->

      <!-- ======= Services Section ======= -->
      <section id="categories" class="services">
        <div class="container">

          <div class="section-title">
            <h2>Categories</h2>
            <h3>We do offer awesome <span>categories</span></h3>
            <p>We have a lot to discuss so we are separating our articles into categories</p>
          </div>
          <Categories />

        </div>
      </section><!-- End Services Section -->

      <!-- ======= Portfolio Section ======= -->
      <section id="posts" class="team">
        <div class="container">

          <div class="section-title">
            <h2>Posts</h2>
            <h3>Check our <span>Posts</span></h3>
            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
          </div>


          <!-- TODO: Add recent posts here -->
          <div class="row">
            <Posts />
          </div>

        </div>
      </section><!-- End Portfolio Section -->

    </main><!-- End #main -->
  </div>
</template>

<script>
import Categories from "../components/Category/Index.vue";
import Posts from '../components/Post/Index.vue';

export default {
  name: "Home",
  components: {
    Categories,
    Posts
  },
}
</script>
