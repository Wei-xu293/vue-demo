import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/directives' // Default landing page
    },
    {
      path: '/directives',
      component: () => import('@/views/DirectivesDemo.vue')
    },
    {
      path: '/components',
      component: () => import('@/views/ComponentsDemo.vue')
    },
    {
      path: '/communication',
      component: () => import('@/views/CommunicationDemo.vue')
    },
    {
      path: '/animations',
      component: () => import('@/views/AnimationsDemo.vue')
    }
  ]
})

export default router