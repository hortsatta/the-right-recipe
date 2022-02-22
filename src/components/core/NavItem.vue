<template>
  <li class="relative" v-button>
    <RouterLink class="relative block px-5 py-2 z-10" :to="to">
      {{ label }}
    </RouterLink>
  </li>
</template>

<script>
export default {
  name: 'NavItem',
  props: {
    to: {
      type: String,
      required: true
    },
    label: String
  }
};
</script>
