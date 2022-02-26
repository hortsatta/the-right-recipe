<template>
  <BaseFrame class="flex justify-center items-center">
    <BaseButton
      :loading="isSignInOutSubmitting"
      :disabled="isSignInOutSubmitting"
      @click="handleSignOut"
    >
      Sign Out
    </BaseButton>
  </BaseFrame>
</template>

<script>
import { computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

import { getAuthActionType } from '@/store/auth';

export default {
  name: 'UserAccountPage',
  setup: () => {
    const store = useStore();
    const router = useRouter();

    watch(
      () => (store.state.auth.isLoggedIn),
      (value) => {
        if (value) { return; }
        router.push({ name: 'home' });
      },
    );

    const handleSignOut = async () => {
      store.dispatch(getAuthActionType(true).SIGN_OUT_START);
    };

    return {
      isSignInOutSubmitting: computed(() => store.state.auth.isSignInOutSubmitting),
      handleSignOut,
    };
  },
};
</script>
