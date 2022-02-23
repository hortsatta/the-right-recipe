<template>
  <form @submit.prevent="handleSubmit">
    <!-- Fields -->
    <div class="grid grid-flow-row gap-y-4 pb-12">
      <BaseInput label="Email" name="email" />
      <BaseInput label="Password" name="password" />
      <BaseInput label="Confirm Password" name="confirmPassword" />
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
        :disabled="isSubmitting"
        @click="handleSubmit"
      >
        Register
      </BaseButton>
  </div>
  </form>
</template>

<script>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

export default {
  name: 'AuthFormSignUp',
  setup() {
    const initialValues = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: '',
    };

    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      confirmPassword: yup.string().required().oneOf([yup.ref('password')], 'password do not match.'),
      displayName: yup.string().optional().min(30),
    });

    const { handleSubmit: submit, isSubmitting } = useForm({
      validationSchema: schema,
      initialValues,
    });

    const handleSubmit = submit(async (data) => {
      console.log(data);
    });

    const reset = () => {

    };

    return { isSubmitting, handleSubmit, reset };
  },
};
</script>
