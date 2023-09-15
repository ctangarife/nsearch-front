<template>
  <div class="module-detail">
    <h2>Modulo: {{ modules.name }}</h2>
    <p>URL: <a :href="modules.url">{{ modules.url }}</a></p>
    <p>URL DE DESCARGA: <a :href="modules.url_download">{{ modules.url_download }}</a></p>
    <p>Author: {{ modules.author?.name }}</p>

    <h3>Categorias a las que pertenece el módulo</h3>
    <div class="category">
      <div class="column" v-for="(category) in modules.categories" :key="category.id">
        <h3><a :href="`/category/${category.id}`">{{ category.name }}</a></h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';
import { type IModule } from './Imodule.interface';
export default defineComponent({
  data() {
    return {
      modules: {} as IModule,
    };
  },
  mounted() {
    this.fetchCategory();
  },
  methods: {
    fetchCategory() {
      const moduleId = this.$route.params.id;
      // Realizar la llamada al API para obtener los detalles de la categoría
      axios
      .get(`/api/modules/${moduleId}`)
      .then((response) => {
          this.modules = response.data;
        })
        .catch(error => {
          console.error('Error al obtener los detalles de la categoría:', error);
        });
    },
  },
});
</script>

<style scoped>
.module-details {
  /* Estilos para los detalles de la categoría */
}

.category {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.column {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
}
</style>