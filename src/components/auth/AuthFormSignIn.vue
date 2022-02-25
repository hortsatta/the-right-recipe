<template>
  <form @submit.prevent="handleSubmit">
    <!-- Fields -->
    <div class="grid grid-flow-row gap-y-4 pb-12">
      <BaseInput type="email" label="Email" name="email" />
      <BaseInput type="password" label="Password" name="password" />
    </div>
    <!-- Form controls -->
    <BaseButton
      class="w-full"
      :loading="isSignInSubmitting"
      :disabled="isSubmitting"
      @click="handleSubmit"
    >
      Login
    </BaseButton>
  </form>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'AuthFormSignIn',
  setup: (_, ctx) => {
    const store = useStore();

    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required(),
    });

    const initialValues = { email: '', password: '' };

    const { handleSubmit: submit } = useForm({
      validationSchema: schema,
      initialValues,
    });

    const handleSubmit = submit(async (data) => {
      ctx.emit('onSubmit', data);
    });

    return {
      isSignInSubmitting: computed(() => store.state.auth.isSignInSubmitting),
      isSubmitting: computed(() => store.getters['auth/isSubmitting']),
      handleSubmit,
    };
  },
};
</script>
