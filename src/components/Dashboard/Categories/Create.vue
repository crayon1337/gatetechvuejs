<template>
  <div>
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'home'}" active-class="active">Home</router-link></li>
            <li>Create Category</li>
          </ol>
          <h2>Create Category</h2>
        </div>
      </section>
      <section class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 entries">
              <div class="blog-comments">
                <div class="reply-form">
                  <h4>Add new category</h4>
                  <form v-on:submit.prevent="submitForm" method="post">
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.name" @input="changeSlug" type="text" class="form-control" placeholder="Category Name*">
                        <label v-if="errors.name">{{ errors.name.toString() }}</label>
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
        }
      }).post(this.appConfig.BASE_URL +'/api/category', this.form).then(({data}) => {
        this.$toaster.success(data.message)
        router.push({name: 'admin.categories'})
      }).catch((error) => {
        if(error.response.status === 422)
          this.errors = error.response.data.errors

        this.$toaster.error(error.response.statusText)
      })
    },

    changeSlug() {
      this.form.slug = this.form.name.toLowerCase().split(' ').join('-')
    }
  },

}
</script>