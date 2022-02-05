<template>
  <div>
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'home'}" active-class="active">Home</router-link></li>
            <li>Register</li>
          </ol>
          <h2>Register</h2>
        </div>
      </section>
      <section class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 entries">

              <div class="blog-comments">

                <div class="reply-form">
                  <h4>Register</h4>
                  <p>Your email address will not be published. Required fields are marked * </p>
                  <form v-on:submit.prevent="submitForm">
                    <div class="row">
                      <div class="col-md-6 form-group">
                        <input v-model="form.name" type="text" class="form-control" placeholder="Your Name*">
                        <label v-if="errors.name">{{ errors.name.toString() }}</label>
                      </div>
                      <div class="col-md-6 form-group">
                        <input v-model="form.email" type="email" class="form-control" placeholder="Your Email*">
                        <label v-if="errors.email">{{ errors.email.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.password" type="password" class="form-control" placeholder="Password*">
                        <label v-if="errors.password">{{ errors.password.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.password_confirmation" type="password" class="form-control" placeholder="Password Confirmation*">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.phone_number" type="text" class="form-control" placeholder="Phone Number">
                        <label v-if="errors.phone_number">{{ errors.phone_number.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.terms" type="checkbox">
                        <label>Please accept our terms & rules*</label>
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
import router from '../../router.js'

export default {
  name: "Register",

  data: function() {
    return {
      form: {
        name: '',
        email: '',
        password: null,
        password_confirmation: null,
        phone_number: '',
        terms: false,
      },
      errors: {},
    }
  },

  methods: {
    submitForm() {
      if(!this.form.terms)
        return this.$toaster.error('Please accept the terms & rules.')

      axios.post(this.appConfig.BASE_URL +'/api/user/register', this.form)
        .then((response) => {

          // Clear the forms & errors
          this.form = {
            name: '',
            email: '',
            password: null,
            password_confirmation: null,
            phone_number: '',
            terms: false,
          }
          this.errors = {}

          // Flash a successful message returned from the API
          this.$toaster.success(response.data.message)

          // Redirect to login page after 1 second.
          setTimeout(function() {
            router.push({name: 'login'})
          }, 1000)
        })
        .catch((error) => {
          if(error.response.status === 422)
            // Fulfil the errors object
            this.errors = error.response.data.errors || {}
          else
            // Otherwise just show the response error message
            this.$toaster.error(error.response.statusText)
        })
    }
  }
}
</script>