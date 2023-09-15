<template>
  <div class="category-details">
    <CategoryDetail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CategoryDetail from '../components/categories/CategoryDetail.vue'

export default defineComponent({
  components: {
    CategoryDetail
  }
})
</script>
