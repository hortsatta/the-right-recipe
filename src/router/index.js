import { createRouter, createWebHistory } from 'vue-router';

import { AuthPage, HomePage } from '@/views';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (!to.matched.some((route) => route.meta.requiresAuth)) {
//     next();
//     return;
//   }

//   if (store.state.auth.userLoggedIn) {
//     next();
//   } else {
//     next({ name: 'home' });
//   }
// });

export default router;
