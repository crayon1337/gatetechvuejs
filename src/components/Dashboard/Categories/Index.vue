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
                  <h4>Categories</h4>
                  <router-link :to="{name: 'admin.categories.create'}" class="btn btn-primary">Add</router-link>
                  <table class="table">
                    <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Slug</th>
                      <th scope="col">Meta Title</th>
                      <th scope="col">Meta Description</th>
                      <th scope="col">Available</th>
                      <th scope="col">Created At</th>
                      <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="category in categories" :key="category.id">
                      <th scope="row">{{ category.id }}</th>
                      <td>{{ category.name }}</td>
                      <td>{{ category.slug }}</td>
                      <td>{{  category.meta_title }}</td>
                      <td>{{  category.meta_description }}</td>
                      <td>{{  category.isAvailable ? 'Yes' : 'No' }}</td>
                      <td>{{  category.created_at }}</td>
                      <td>
                        <button class="btn btn-sm btn-danger" style="margin-left: 5px" @click="deleteCategory(category.slug)">Delete</button>
                        <router-link :to="{ name: 'admin.categories.update', params: { id: category.id, slug: category.slug } }" style="margin-left: 5px" class="btn btn-sm btn-success">Edit</router-link>
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
  name: "Categories",

  data() {
    return {
      categories: {}
    }
  },

  methods: {
    async loadCategories() {
      await axios.get('http://127.0.0.1:8000/api/category/').then(({data}) => {
        this.categories = data.data
      }).catch((error) => {
        this.$toaster.error(error.response.statusText)
      })
    },

    async deleteCategory(slug) {
      await axios.create({
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.$store.getters['0/user'].token,
        }
      }).delete('http://127.0.0.1:8000/api/category/' + slug).then(({data}) => {
        this.$toaster.success(data.message)
        this.loadUsers()
      }).catch((error) => {
        this.$toaster.error(error.response.statusText)
      })
    }
  },

  mounted() {
    this.loadCategories()
  },

  destroyed() {
    this.categories = {}
  },
}
</script>