<template>
    <TheHeader />
    <main class="pt-[calc(124px+2rem)] pb-8 min-h-[calc(100vh-72px)]">
      <RouterView />
    </main>
    <TheFooter />
</template>

<script>
import { useStore } from 'vuex';

import { getAuthActionType } from '@/store/auth';
import { TheHeader, TheFooter } from './components/core';

export default {
  name: 'App',
  components: { TheHeader, TheFooter },
  setup: () => {
    const store = useStore();
    // Check user session before create
    if (typeof store.state.auth.isLoggedIn === 'undefined') {
      store.dispatch(getAuthActionType(true).CHECK_USER_SESSION);
    }
  },
};
</script>
