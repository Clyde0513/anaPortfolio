import { createRouter, createWebHistory } from 'vue-router/dist/vue-router.esm-bundler'
import MainPage from '../components/mainPage.vue'
import ResearchPage from '../components/researchPage.vue'
import ClassesPage from '../components/classesPage.vue'
import certficationsPage from '../components/certficationsPage.vue'
import horribleBuildsPage from '../components/horribleBuildsPage.vue'
import InvolvementPage from '../components/involvementPage.vue'
import CookingPage from '../components/CookingPage.vue'

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
    },
    {
      path: '/classes',
      name: 'Classes',
      component: ClassesPage
    },
    {
      path: '/certifications',
      name: 'Certifications',
      component: certficationsPage
    },
    {
      path: '/horribleBuilds',
      name: 'HorribleBuilds',
      component: horribleBuildsPage
    },
    {
      path: '/involvement',
      name: 'Involvement',
      component: InvolvementPage
    },
    {
      path: '/cooking',
      name: 'Cooking',
      component: CookingPage
    }

  ]
})

export default router
