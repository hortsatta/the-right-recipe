import { createRouter, createWebHistory } from 'vue-router';

import { store } from '@/store';
import { AuthPage, HomePage, UserAccountPage } from '@/views';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: HomePage,
  },
  {
    path: '/blog',
    name: 'blog',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: HomePage,
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      requiresAuth: true,
    },
    component: UserAccountPage,
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === 'auth' && store.state.auth.isLoggedIn) {
    next({ name: 'home' });
    return;
  }

  if (!to.matched.some((route) => route.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.auth.isLoggedIn) {
    next();
  } else {
    next({ name: 'home' });
  }
});

export default router;
