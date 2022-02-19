<template>
  <header
    class="relative mx-auto px-4 max-w-screen-3xl w-full"
    :class="!compact && 'py-5'"
  >
    <nav class="flex justify-between items-center h-full">
      <TheLogo to="#" />
      <ul class="grid grid-rows-1 grid-flow-col font-display uppercase">
        <NavItem :to="'#'" :label="'Home'" />
        <NavItem :to="'#'" :label="'Browse'" />
        <NavItem :to="'#'" :label="'Articles'" />
        <NavItem :to="'#'" :label="'About'" />
        <NavItem :to="'#'" :label="'Login'" />
        <NavItem :to="'#'" :label="'Register'" />
      </ul>
    </nav>
    <BaseDivider class="left-0 bottom-0 divider" />
  </header>
</template>

<script>
import NavItem from './NavItem.vue';
import TheLogo from './TheLogo.vue';

export default {
  name: 'TheHeader',
  components: { NavItem, TheLogo },
  props: {
    compact: Boolean
  }
};
</script>

<style scoped>
.divider {
  position: absolute;
}
</style>
