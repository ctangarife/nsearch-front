<template>
  <div class="module-detail">
    <ModuleDetail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ModuleDetail from '../components/modules/ModuleDetail.vue';
export default defineComponent({
  components: {
    ModuleDetail
  }
})
</script>
