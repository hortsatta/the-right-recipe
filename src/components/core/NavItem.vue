<template>
  <li class="relative">
    <RouterLink class="group relative cursor-pointer block px-5 py-2" :to="to" v-button>
      <span class="flex justify-center items-center relative z-10">
        <BaseIcon v-if="icon" class=" mr-2 " :name="icon" />
        {{ label }}
      </span>
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    label: String,
    icon: String,
  },
};
</script>
