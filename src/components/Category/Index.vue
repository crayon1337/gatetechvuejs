<template>
  <div>
    <div class="row">
      <div class="col-md-3 mb-5 mb-lg-0" v-for="category in categories" :key="category.id">
        <div class="icon-box">
          <h4 class="title">
            <router-link :to="{name: 'category.show', params: { slug: category.slug }}">{{ category.name}}</router-link>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Categories",
  data() {
    return {
      categories: {}
    }
  },

  methods: {
    async loadCategories() {
      axios.get('http://127.0.0.1:8000/api/category').then(({data}) => {
        this.categories = data.data
      }).catch(() => {
        this.$toaster.error('Could not fetch the categories')
      })
    }
  },

  mounted() {
    this.loadCategories()
  }
}
</script>

<style scoped>

</style>