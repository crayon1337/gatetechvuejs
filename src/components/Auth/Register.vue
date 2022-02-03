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
                      </div>
                      <div class="col-md-6 form-group">
                        <input v-model="form.email" type="email" class="form-control" placeholder="Your Email*">
                      </div>
                    </div>
                    <div class="row">
                      <div class="col form-group">
                        <input v-model="form.password" type="password" class="form-control" placeholder="Password*">
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
export default {
  name: "Register",

  data: function() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone_number: '',
        terms: false,
      }
    }
  },

  methods: {
    submitForm() {
      this.$toaster.success('Submitting a form...')
    }
  }
}
</script>

<style scoped>

</style>