<template>
  <div>
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'home'}" active-class="active">Home</router-link></li>
            <li>Category</li>
          </ol>
          <h2>{{ category.name }}</h2>
        </div>
      </section>
      <section class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 entries">
             <div class="col-6 entry entry-single" v-for="post in posts" :key="post.id">
               <h2 class="entry-title">
                 <router-link :to="{name: 'post.show', params: { slug: post.slug }}">{{ post.title}}</router-link>
               </h2>
               <div class="entry-meta">
                 <ul>
                   <li class="d-flex align-items-center"><i class="bi bi-person"></i>
                     <router-link :to="{name: 'post.show', params: { slug: post.slug }}">{{ post.user.name }}</router-link></li>
                   <li class="d-flex align-items-center"><i class="bi bi-clock"></i> <time datetime="2020-01-01">
                     {{ post.created_at }}</time></li>
                 </ul>
               </div>
               <div class="entry-content">
                  <p>{{ post.content.substring(0, 100) + '...' }}</p>
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
import axios from 'axios'
import router from '../../router.js'

export default {
  name: "Show",

  data() {
    return {
      category: {
        name: ''
      },
      posts: {}
    }
  },
  methods: {
    async loadCategory() {
      await axios.get('http://127.0.0.1:8000/api/category/' + this.$route.params.slug).then(({data}) => {
        this.category.name = data.category.name
        this.posts = data.posts.data
      }).catch(() => {
        this.$toaster.error('Could not get category')

        setTimeout(function() {
          router.push({name: 'home'})
        }, 1000)
      })
    }
  },

  mounted() {
    this.loadCategory()
  },

  destroyed() {
    this.category = {
      name: ''
    }
    this.posts = {}
  }
}
</script>