import { createRouter as _createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Draws from './views/Draws.vue'
import DrawDetails from './views/DrawDetails.vue'

export function createRouter () {
  return _createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/draws',
        name: 'draws',
        component: Draws
      },
      {
        path: '/draws/:drawDate',
        name: 'drawDetails',
        component: DrawDetails
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: '/'
      },
    ],
    scrollBehavior() {
      // always scroll to top
      return { top: 0 }
    }
  })
}
