import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import DiscordRedirect from '@/pages/DiscordRedirect.vue'
import SignUp from '@/pages/SignUp/SignUp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/discord',
    name: 'discord',
    component: DiscordRedirect
  },
  {
    path: '/register',
    name: 'signup',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
