import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store';
import { HomePage } from '@/views';
import ChildViewPage from '@/views/ChildViewPage.vue';

// Lazy load components
const RecipesPage = () => import(/* webpackChunkName: "group-recipes" */ '@/views/RecipesPage.vue');
const RecipeAddPage = () => import(/* webpackChunkName: "group-recipes" */ '@/views/RecipeAddPage.vue');
const AuthPage = () => import('@/views/AuthPage.vue');
const UserAccountPage = () => import('@/views/UserAccountPage.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: ChildViewPage,
    children: [
      {
        path: '',
        name: 'recipes-list',
        component: RecipesPage,
      },
      {
        path: 'new',
        name: 'recipes-add',
        component: RecipeAddPage,
      },
    ],
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
