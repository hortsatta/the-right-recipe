<template>
  <a class="inline-block" :href="to">
    <img class="w-full h-full" src="~@/assets/images/logo.svg" alt="Logo">
    <h1 class="absolute w-0 h-0 opacity-0 overflow-hidden">
      The Right Recipe
    </h1>
  </a>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
