<template>
  <div>
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'home'}" active-class="active">Home</router-link></li>
            <li>Create Post</li>
          </ol>
          <h2>Create Post</h2>
        </div>
      </section>
      <section class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 entries">
              <div class="blog-comments">
                <div class="reply-form">
                  <h4>Add new post</h4>
                  <form v-on:submit.prevent="submitForm" method="post">
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.title" @input="changeSlug" type="text" class="form-control" placeholder="Post Title*">
                        <label v-if="errors.title">{{ errors.title.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <textarea class="form-control" v-model="form.content"></textarea>
                        <label v-if="errors.content">{{ errors.content.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.tags" type="text" class="form-control" placeholder="Post Tags">
                        <label v-if="errors.tags">{{ errors.tags.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <select v-model="form.category_id">
                            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                        </select>
                        <label v-if="errors.category_id">{{ errors.category_id.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.slug" type="text" class="form-control" placeholder="Slug*">
                        <label v-if="errors.slug">{{ errors.slug.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.meta_title" type="text" class="form-control" placeholder="Meta Title">
                        <label v-if="errors.meta_title">{{ errors.meta_title.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.meta_description" type="text" class="form-control" placeholder="Meta Description">
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
  name: "Create",

  data() {
    return {
      form: {
        title: '',
        content: '',
        tags: '',
        category_id: '',
        slug: '',
        meta_title: '',
        meta_description: '',
      },
      categories: {},
      errors: {},
    }
  },

  methods: {
    async submitForm() {
      await axios.create({
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.$store.getters['0/user'].token
        }
      }).post('http://127.0.0.1:8000/api/post', this.form).then(({data}) => {
        this.$toaster.success(data.message)
        router.push({name: 'home'})
      }).catch((error) => {
        if(error.response.status === 422)
          this.errors = error.response.data.errors

        this.$toaster.error(error.response.statusText)
      })
    },

    async loadCategories() {
      await axios.get('http://127.0.0.1:8000/api/category').then(({data}) => {
        this.categories = data.data;
      }).catch((error) => {
        this.$toaster.error(error.response.statusText)
      })
    },

    changeSlug() {
      this.form.slug = this.form.title.toLowerCase().split(' ').join('-')
    }
  },

  mounted() {
    this.loadCategories()
  }
}
</script>