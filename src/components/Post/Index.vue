<template>
  <div class="row">
    <div class="col-lg-3 col-md-6" v-for="post in posts" :key="post.id">
      <div class="member">
        <div class="member-img">
          <img :src="post.picture_url" class="img-fluid" alt="">
        </div>
        <div class="member-info">
          <h4><router-link :to="{ name: 'post.show', params: { slug: post.slug }}" >{{  post.title }}</router-link></h4>
          <span>{{  post.content.substring(0,100) + '...' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Index",

  data() {
    return {
      posts: {}
    }
  },

  methods: {
    async loadPosts() {
      await axios.get(this.appConfig.BASE_URL +'/api/post').then(({data}) => {
        this.posts = data.data
      }).catch(() => {
        this.$toaster.error('Could not get posts')
      })
    }
  },

  mounted() {
    this.loadPosts()
  },

  destroyed() {
    this.posts = {}
  }

}
</script>