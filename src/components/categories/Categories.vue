<template>
  <div class="categories">
    <div v-if="loading" class="loading">Cargando...</div>
    <div v-else>
      <div class="column-container">
        <div class="column" v-for="(category, index) in categories" :key="index">
          <h2>
            <a :href="`/category/${category.id}`">{{ category.name }}</a>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import { type ICategory } from './ICategory.interface'

export default defineComponent({
  data() {
    return {
      loading: true,
      categories: [] as ICategory[]
    }
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    fetchCategories() {
      axios
        .get('/api/categories')
        .then((response) => {
          this.categories = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error('Error al obtener las categorías:', error)
        })
    }
  }
})
</script>


<style scoped>
.categories {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  justify-items: center;
  padding: 20px;
  background-color: #F0F0F0;
}

.column-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  max-width: 1200px;
  width: 70rem;
  height: 70rem;
}

.column {
  background-color: #7E003E;
  color: #FFFFFF;
  padding: 20px;
  border-radius: 5px;
}

.loading {
  text-align: center;
  font-weight: bold;
  color: #444;
  padding: 20px;
}

@media (max-width: 768px) {
  .column-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
