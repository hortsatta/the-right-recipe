<template>
    <TheHeader />
    <main class="mt-[124px] py-8 min-h-[calc(100vh-196px)]">
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
