import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import DiscordRedirect from '@/pages/DiscordRedirect.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
