<template>
  <div>
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'home'}" active-class="active">Post</router-link></li>
            <li>{{ post.title }}</li>
          </ol>
          <h2>{{ post.title }}</h2>
        </div>
      </section>
      <section class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 entries">
              <div class="col-12 entry entry-single">
                <div class="entry-img">
                  <img :src="post.picture_url" alt="" class="img-fluid">
                </div>
                <h2 class="entry-title">
                  {{ post.title }}
                </h2>
                <div class="entry-meta">
                  <ul>
                    <li class="d-flex align-items-center"><i class="bi bi-person"></i>
                      {{ post.user.name }}</li>
                    <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <time datetime="2020-01-01">
                      {{ post.created_at }}</time></li>
                  </ul>
                </div>
                <div class="entry-content">
                  <p>{{ post.content }}</p>
                </div>
              </div>

            </div><!-- End blog entries list -->
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import router from "@/router";
import axios from 'axios';

export default {
  name: "Show",

  data() {
    return {
      post: {}
    }
  },

  methods: {
    async loadPost() {
      axios.get('http://127.0.0.1:8000/api/post/' + this.$route.params.slug).then(({data}) => {
        this.post = data
      }).catch(() => {
        this.$toaster.error('Could not get post')

        setTimeout(function() {
          router.push({name: 'home'})
        }, 1000)
      })
    }
  },

  mounted() {
    this.loadPost()
  },

  destroyed() {
    this.post = {}
  }
}
</script>