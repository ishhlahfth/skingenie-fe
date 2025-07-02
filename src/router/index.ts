import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/journey/IndexJourney.vue'),
  },
  {
    path: '/personal-info',
    name: 'personal-info',
    component: () => import('@/views/journey/PersonalInformation.vue'),
  },
  {
    path: '/skin-info',
    name: 'skin-info',
    component: () => import('@/views/journey/SkinInformation.vue'),
  },

  {
    path: '/result',
    name: 'result',
    component: () => import('@/views/journey/ResultPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
