import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PassengerDetailView from '@/views/passenger/PassengerDetailView.vue'
import PassengerLayoutView from '@/views/passenger/PassengerLayoutView.vue'
import PassengerAirlineView from '@/views/passenger/PassengerAirlineView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/passenger/:id',
      name: 'passenger-detail',
      component: PassengerLayoutView,
      props: true,
      children: [
        { path: '', name: 'passenger-detail', component: PassengerDetailView, props: true },
        {
          path: '/airline/:id',
          name: 'passenger-airline',
          component: PassengerAirlineView,
          props: true
        }
      ]
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'not found',
      component: NotFoundView
    }
  ]
})

export default router
