<template>
  <div>
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'home'}" active-class="active">Home</router-link></li>
            <li>Edit Category</li>
          </ol>
          <h2>Edit Category ({{ this.$route.params.slug }})</h2>
        </div>
      </section>
      <section class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 entries">
              <div class="blog-comments">
                <div class="reply-form">
                  <h4>Edit category</h4>
                  <form v-on:submit.prevent="submitForm" method="post">
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="category.name" @input="changeSlug" type="text" class="form-control" placeholder="Category Name*">
                        <label v-if="errors.name">{{ errors.name.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="category.slug" type="text" class="form-control" placeholder="Slug*">
                        <label v-if="errors.slug">{{ errors.slug.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="category.meta_title" type="text" class="form-control" placeholder="Meta Title">
                        <label v-if="errors.meta_title">{{ errors.meta_title.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="category.meta_description" type="text" class="form-control" placeholder="Meta Description">
                        <label v-if="errors.meta_description">{{ errors.meta_description.toString() }}</label>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
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
import axios from 'axios'
import router from '../../../router.js'

export default {
  name: "Update",

  data() {
    return {
      category: {
        name: '',
        slug: '',
        meta_title: '',
        meta_description: '',
      },
      errors: {}
    }
  },

  methods: {
    async submitForm() {
      axios.create({
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.$store.getters['0/user'].token
        },
      }).patch('http://127.0.0.1:8000/api/category/' + this.$route.params.id, this.category).then(({data}) => {
        this.$toaster.success(data.message)
        router.push({name: 'admin.categories'})
      }).catch((error) => {
        if(error.response.status === 422)
          this.errors = error.response.data.errors

        this.$toaster.error(error.response.statusText)
      })
    },

    changeSlug() {
      this.category.slug = this.category.name.toLowerCase().split(' ').join('-')
    }
  },

  mounted() {
    axios.get('http://127.0.0.1:8000/api/category/' + this.$route.params.slug).then(({data}) => {
      this.category = data.category
    }).catch((error) => {
      this.$toaster.error(error.response.statusText)
      router.push({name: 'admin.categories'})
    })
  }
}
</script>