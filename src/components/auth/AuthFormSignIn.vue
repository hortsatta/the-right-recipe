<template>
  <form @submit.prevent="handleSubmit">
    <!-- Fields -->
    <div class="grid grid-flow-row gap-y-4 pb-12">
      <BaseInput label="Email" name="email" />
      <BaseInput label="Password" name="password" />
    </div>
    <!-- Form controls -->
    <BaseButton
      class="w-full"
      :disabled="isSubmitting"
      @click="handleSubmit"
    >
      Login
    </BaseButton>
  </form>
</template>

<script>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'AuthFormSignIn',
  setup() {
    const initialValues = { email: '', password: '' };
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required(),
    });

    const { handleSubmit: submit, isSubmitting } = useForm({
      validationSchema: schema,
      initialValues,
    });

    const handleSubmit = submit(async (data) => {
      console.log(data);
    });

    return { isSubmitting, handleSubmit };
  },
};
</script>
