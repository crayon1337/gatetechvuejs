<template>
  <div>
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <h2>Dashboard</h2>
        </div>
      </section>
      <section class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 entries">
              <div class="blog-comments">
                <div class="reply-form">
                  <h4>Posts</h4>
                  <router-link :to="{name: 'posts.create'}" class="btn btn-primary">Add</router-link>
                  <table class="table">
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Content</th>
                      <th scope="col">Tags</th>
                      <th scope="col">User</th>
                      <th scope="col">Category</th>
                      <th scope="col">Slug</th>
                      <th scope="col">Available</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="post in posts" :key="post.id">
                      <th scope="row">{{ post.id }}</th>
                      <td>{{ post.title }}</td>
                      <td>{{ post.content }}</td>
                      <td>{{  post.tags }}</td>
                      <td>{{  post.user.name }}</td>
                      <td>{{  post.category.name }}</td>
                      <td>{{  post.slug }}</td>
                      <td>{{  post.isAvailable ? 'Yes' : 'No' }}</td>
                      <td>{{  post.created_at }}</td>
                      <td>
                        <button class="btn btn-sm btn-danger" style="margin-left: 5px" @click="deletePost(post.slug)">Delete</button>
                        <router-link :to="{ name: 'admin.posts.update', params: { id: post.id, slug: post.slug } }" style="margin-left: 5px" class="btn btn-sm btn-success">Edit</router-link>
                      </td>
                    </tr>
                    </tbody>
                  </table>
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
import axios from "axios";

export default {
  name: "Post",

  data() {
    return {
      posts: {}
    }
  },

  methods: {
    async loadPosts() {
      await axios.get('http://127.0.0.1:8000/api/post/').then(({data}) => {
        this.posts = data.data
        console.log(this.posts)
      }).catch((error) => {
        this.$toaster.error(error.response.statusText)
      })
    },

    async deletePost(slug) {
      await axios.create({
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.$store.getters['0/user'].token,
        }
      }).delete('http://127.0.0.1:8000/api/post/' + slug).then(({data}) => {
        this.$toaster.success(data.message)
        this.loadPosts()
      }).catch((error) => {
        this.$toaster.error(error.response.statusText)
      })
    }
  },

  mounted() {
    this.loadPosts()
  },

  destroyed() {
    this.posts = {}
  },
}
</script>