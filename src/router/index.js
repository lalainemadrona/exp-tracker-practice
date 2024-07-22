import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginView },
    { path: '/home', component: HomeView },
    { path: '/login', component: LoginView },
    { path: '/:pathMatch(.*)*', component: NotFound }
  ]
})

export default router
