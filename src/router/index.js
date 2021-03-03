import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/drugHistory',
    name: 'Drug History',
    component: () => import('../views/DrugInfo.vue')
  },
  {
    path: '/',
    name: 'Feed',
    component: () => import('../views/Feed.vue')
  },
  {
    path: '/tolerance',
    name: 'Tolerance Calculator',
    component: () => import('../views/ToleranceCalculator.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
