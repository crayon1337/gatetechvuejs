<template>
  <div>
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'home'}" active-class="active">Home</router-link></li>
            <li>Login</li>
          </ol>
          <h2>Login</h2>
        </div>
      </section>
      <section class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 entries">
              <div class="blog-comments">
                <div class="reply-form">
                  <h4>Login</h4>
                  <form action="javascript:void(0)" method="post">
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.email" type="email" class="form-control" placeholder="Your Email*">
                        <label v-if="form.errors.email">{{ errors.email.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.password" type="password" class="form-control" placeholder="Password*">
                        <label v-if="form.errors.password">{{ errors.password.toString() }}</label>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary" @click="this.login">Submit</button>
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
import {mapActions} from 'vuex'

export default {
  name: "Login",

  data() {
    return {
      form: {
        email: '',
        password: '',
        errors: {},
      },
      processing: false,
    }
  },

  methods: {
    ...mapActions({
      signIn: '0/login'
    }),

    async login() {
      this.processing = true
      await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
      await axios.post('http://127.0.0.1:8000/api/user/login', this.form).then(({data}) => {
        this.$toaster.success(data.message)
        this.signIn(data)
      }).catch((error) => {
        if(error.response.status === 422)
            // Fulfil the errors object
          this.errors = error.response.data.errors || {}
        else if(error.response.status === 401)
          this.$toaster.error(error.response.data.message)
        else
            // Otherwise just show the response error message
          this.$toaster.error(error.response.statusText)
      }).finally(() => {
        this.processing = false
      })
    }
  },
}
</script>