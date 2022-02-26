<template>
  <li class="relative">
    <RouterLink class="group relative cursor-pointer block px-5 py-2" :to="to" v-button>
      <span class="relative z-10">{{ label }}</span>
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
  },
};
</script>
