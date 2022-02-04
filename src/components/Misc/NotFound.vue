<template>
  <div>
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <h2>404 Not Found</h2>
        </div>
      </section>
      <section class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 entries">
              <div class="blog-comments">
                <div class="reply-form">
                  <h4>404 Not Found</h4>
                  <p>The page you are looking for is not found. Go back to <router-link :to="{name: 'home'}">Home</router-link></p>
                </div>
              </div><!-- End blog comments -->

            </div><!-- End blog entries list -->
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
name: "NotFound"
}
</script>