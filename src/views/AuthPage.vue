<template>
  <BaseFrame class="flex justify-center items-center">
    <!-- Sign in -->
    <div class="flex justify-center flex-1 w-1/2">
      <BaseSurface class="w-[500px]">
        <div class="pt-4">
          <h2 class="px-5 py-3">Sign In</h2>
          <BaseDivider />
          <AuthFormSignIn class="px-5 pt-4 pb-10" @onSubmit="handleSignIn" />
        </div>
      </BaseSurface>
    </div>
    <div class="relative flex flex-col items-center flex-0 w-[100px] z">
      <div class="w-px h-[100px] bg-border-400"></div>
      <span class="text-xl font-display opacity-60">or</span>
      <div class="w-px h-[100px] bg-border-400"></div>
    </div>
    <!-- Sign up -->
    <div class="flex justify-center flex-1 w-1/2">
      <BaseSurface class="w-[500px]">
        <div class="pt-4">
          <h2 class="px-5 py-3">Sign Up</h2>
          <BaseDivider />
          <AuthFormSignUp class="px-5 pt-4 pb-10" @onSubmit="handleRegister" />
        </div>
      </BaseSurface>
    </div>
  </BaseFrame>
</template>

<script>
import { useStore } from 'vuex';

import { getAuthActionType } from '@/store/auth';
import { AuthFormSignIn, AuthFormSignUp } from '@/components/auth';

export default {
  name: 'AuthPage',
  components: { AuthFormSignIn, AuthFormSignUp },
  setup: () => {
    const store = useStore();

    const handleSignIn = (data) => {
      const { email, password } = data || {};
      store.dispatch(getAuthActionType(true).SIGN_IN_START, { email, password });
    };

    const handleRegister = (data) => {
      const { email, password, displayName } = data || {};
      store.dispatch(getAuthActionType(true).SIGN_UP_START, {
        email,
        password,
        additionalInfo: { displayName },
      });
    };

    return { handleSignIn, handleRegister };
  },
};
</script>
