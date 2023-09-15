<template>
  <div id="app">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from "./views/Home.vue";

export default defineComponent({
  components: {
    Home,
  },
});
</script>

<style scoped>

#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: block;
}

</style>