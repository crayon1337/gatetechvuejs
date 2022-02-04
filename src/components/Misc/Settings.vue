<template>
  <div>
    <main id="main">
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li><router-link :to="{name: 'home'}" active-class="active">Home</router-link></li>
            <li>Settings</li>
          </ol>
          <h2>Settings</h2>
        </div>
      </section>
      <section class="blog">
        <div class="container" data-aos="fade-up">
          <div class="row">
            <div class="col-lg-12 entries">
              <div class="blog-comments">
                <div class="reply-form">
                  <h4>Profile Management</h4>
                  <form v-on:submit.prevent="submitForm">
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.name" type="text" class="form-control" placeholder="Your Name*">
                        <label v-if="errors.name">{{ errors.name.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.email" type="email" class="form-control" placeholder="Your Email*">
                        <label v-if="errors.email">{{ errors.email.toString() }}</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.phone_number" type="text" class="form-control" placeholder="Your Phone*">
                        <label v-if="errors.phone_number">{{ errors.phone_number.toString() }}</label>
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
                        <input v-model="form.password_confirmation" type="password" class="form-control" placeholder="Confirm Password*">
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
import {mapActions} from 'vuex'

export default {
  name: "Settings",

  data() {
    return {
      form: {
        name: '',
        email: '',
        phone_number: '',
        password: '',
        password_confirmation: '',
      },
      errors: {},
    }
  },

  methods: {
    ...mapActions({
      reloadUserData: '0/reloadUser'
    }),

    async submitForm() {
      let token = this.$store.getters['0/user'].token;
      console.log(token)
      await axios.create({
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token,
        }
      }).post('http://127.0.0.1:8000/api/user/' + this.$store.getters['0/user'].id, this.form).then((data) => {
        this.$toaster.success(data.data.message)
        this.errors = {}
        this.reloadUserData(token)

        setTimeout(function() {
          router.push({name: 'home'})
        }, 1500)
      }).catch((error) => {
        if(error.response.status === 422)
          this.errors = error.response.data.errors || {}

        this.$toaster.error('Could not update user information')
      })
    }
  },

  mounted() {
    this.form.name = this.$store.getters['0/user'].name
    this.form.email = this.$store.getters['0/user'].email
    this.form.phone_number = this.$store.getters['0/user'].phone_number
  },

  destroyed() {
    this.form = {}
  }
}
</script>