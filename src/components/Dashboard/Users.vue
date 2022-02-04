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
                    <h4>Users</h4>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Role</th>
                          <th scope="col">Created At</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="user in users" :key="user.id">
                          <th scope="row">{{ user.id }}</th>
                          <td>{{ user.name }}</td>
                          <td>{{ user.email }}</td>
                          <td>{{  user.phone_number }}</td>
                          <td>{{  user.isAdmin ? 'Administrator' : 'User' }}</td>
                          <td>{{  user.created_at }}</td>
                          <td>
                            <button class="btn btn-sm" :class="{ 'btn-danger': user.isAdmin, 'btn-success': !user.isAdmin }" @click="makeAdmin(user.id)">{{ user.isAdmin ? 'Make User' : 'Make Admin' }}</button>
                            <button class="btn btn-sm btn-danger" style="margin-left: 5px" @click="deleteUser(user.id)">Delete</button>
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
import axios from 'axios'

export default {
  name: "Dashboard",

  data() {
    return {
      users: {}
    }
  },

  methods: {
    async loadUsers() {
      await axios.create({
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.$store.getters['0/user'].token,
        }
      }).get('http://127.0.0.1:8000/api/users').then(({data}) => {
        this.users = data.data
      }).catch((error) => {
        this.$toaster.error(error.response.statusText)
      })
    },

    async makeAdmin(id) {
      await axios.create({
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.$store.getters['0/user'].token,
        }
      }).post('http://127.0.0.1:8000/api/user/' + id +'/makeAdmin').then(({data}) => {
        this.$toaster.success(data.message)
        this.loadUsers()
      }).catch((error) => {
        this.$toaster.error(error.response.statusText)
      })
    },

    async deleteUser(id) {
      await axios.create({
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.$store.getters['0/user'].token,
        }
      }).delete('http://127.0.0.1:8000/api/user/' + id +'/delete').then(({data}) => {
        this.$toaster.success(data.message)
        this.loadUsers()
      }).catch((error) => {
        this.$toaster.error(error.response.statusText)
      })
    }
  },

  mounted() {
    this.loadUsers()
  },

  destroyed() {
    this.users = {}
  }
}
</script>