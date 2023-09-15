<template>
  <div class="home">
    <h1>Categorias</h1>
    <div class="categories">
      <Categories />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Categories from "../components/categories/Categories.vue"

export default defineComponent({
  components: {
    Categories,
  }
});
</script>

<style scoped>

.home {
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}

</style>