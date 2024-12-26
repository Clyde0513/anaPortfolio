import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import MainPage from '../components/mainPage.vue'
import ResearchPage from '../components/researchPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainPage
    },
    {
      path: '/research',
      name: 'Research',
      component: ResearchPage
    }
  ]
})

export default router
