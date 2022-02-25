<template>
  <form @submit.prevent="handleSubmit">
    <!-- Fields -->
    <div class="grid grid-flow-row gap-y-4 pb-12">
      <BaseInput type="email" name="email" label="Email" inputId="register-email" />
      <BaseInput type="password" label="Password" name="password" inputId="register-password" />
      <BaseInput type="password" label="Confirm Password" name="confirmPassword" />
      <hr class="mt-4 border-dashed border-border-200" />
      <BaseInput label="Name" name="displayName" />
    </div>
    <!-- Form controls -->
    <div class="flex justify-between items-center w-full">
      <BaseButton :disabled="isSubmitting" @click="reset" noBorder>
        <span class="flex items-center">
          <BaseIcon class=" mr-2 " name="restart_alt" />
          Reset
        </span>
      </BaseButton>
      <BaseButton
        class="w-[200px]"
        :loading="isSignUpSubmitting"
        :disabled="isSubmitting"
        @click="handleSubmit"
      >
        Register
      </BaseButton>
  </div>
  </form>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useForm } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'AuthFormSignUp',
  setup: (_, ctx) => {
    const store = useStore();

    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'password do not match.'),
      displayName: yup.string().notRequired().min(3, 'name must be at least 3 characters.').nullable()
        .transform((value) => value || null),
    });

    const initialValues = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    };

    const { handleSubmit: submit, resetForm } = useForm({
      validationSchema: schema,
      initialValues,
    });

    const handleSubmit = submit(async (data) => {
      ctx.emit('onSubmit', data);
    });

    const reset = () => {
      resetForm(initialValues);
    };

    return {
      isSignUpSubmitting: computed(() => store.state.auth.isSignUpSubmitting),
      isSubmitting: computed(() => store.getters['auth/isSubmitting']),
      handleSubmit,
      reset,
    };
  },
};
</script>
