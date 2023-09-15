import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue';
import CategoryDetail from '../views/CategoryDetail.vue';
import ModuleDetail from '../views/ModuleDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:id',
      name: 'CategoryDetail',
      component: CategoryDetail
    },
    {
      path: '/modules/:id',
      name: 'ModuleDetail',
      component: ModuleDetail
    },
  ]
})

export default router
