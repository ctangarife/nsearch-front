<template>
  <div class="category-details">
    <h2>{{ category.name }}</h2>
    <p>URL: <a :href="category.url">{{ category.url }}</a></p>

    <div class="scripts">
      <div class="column column__content" v-for="(script, index) in category.modules" :key="index">
        <h3> <a :href="`/modules/${script.id} `">{{ script.name }} </a></h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { type ICategory } from './ICategory.interface'
export default defineComponent({
  data() {
    return {
      category: {} as ICategory,
    };
  },
  mounted() {
    this.fetchCategory();
  },
  methods: {
    fetchCategory() {
      const categoryId = this.$route.params.id;
      // Realizar la llamada al API para obtener los detalles de la categoría
      axios
      .get(`/api/categories/${categoryId}`)
      .then((response) => {
          this.category = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los detalles de la categoría:', error);
        });
    },
  },
});
</script>


<style scoped>
.category-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.scripts {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.column {
  width: 190px;
  height: 254px;
  border-radius: 20px;
  padding: 5px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  padding-bottom: 5rem;
}

.column__content {
  background: #7E003E;
  border-radius: 17px;
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .category-details {
    width: auto;
  }
}
</style>