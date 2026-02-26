import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/subject/:id',
      name: 'subject',
      component: () => import('@/views/SubjectView.vue'),
    },
    {
      path: '/exercises',
      name: 'exercises',
      component: () => import('@/views/ExerciseListView.vue'),
    },
    {
      path: '/exercise/:id',
      name: 'exercise',
      component: () => import('@/views/ExerciseDetailView.vue'),
    },
    {
      path: '/cheatsheet/:subjectId',
      name: 'cheatsheet',
      component: () => import('@/views/CheatsheetView.vue'),
    },
  ],
})

export default router
