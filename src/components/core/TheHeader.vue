<template>
  <header
    class="fixed top-0 left-0 w-full bg-orange-50 bg-tile z-[999] ease-in-out duration-300"
    :class="headerClass"
  >
    <div
      class="relative mx-auto w-full ease-in-out duration-300"
      :class="wrapperClass"
    >
      <nav class="mx-auto flex justify-between items-center max-w-screen-3xl h-full">
        <TheLogo
          class="ml-4 w-[162px] h-[60px] ease-in-out duration-300"
          :class="logoClass"
          to="#"
        />
        <ul class="grid grid-rows-1 grid-flow-col gap-1 font-serif text-xl">
          <NavItem :to="{ name: 'home' }" :label="'Home'" />
          <NavItem :to="'/recipes'" :label="'Browse'" />
          <NavItem :to="'/blog'" :label="'Blog'" />
          <NavItem :to="'/about'" :label="'About'" />
          <NavItem v-if="isLoggedIn" :to="{ name: 'account' }" :label="'Account'" :icon="'face'" />
          <NavItem v-else :to="{ name: 'auth' }" :label="'Login | Register'" />
        </ul>
      </nav>
      <BaseDivider class="absolute left-0 bottom-0" />
    </div>
  </header>
</template>

<script>
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  ref,
} from 'vue';
import { useStore } from 'vuex';
import { throttle } from 'lodash';

import NavItem from './NavItem.vue';
import TheLogo from './TheLogo.vue';

export default {
  name: 'TheHeader',
  components: { NavItem, TheLogo },
  setup: () => {
    const store = useStore();
    const isCompact = ref(false);

    const handleScroll = () => {
      if (window.top.scrollY >= 150) {
        isCompact.value = true;
      } else {
        isCompact.value = false;
      }
    };

    const throttledScroll = throttle(handleScroll, 200, { trailing: true });

    onBeforeMount(() => {
      window.addEventListener('scroll', throttledScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', throttledScroll);
    });

    return {
      isLoggedIn: computed(() => store.state.auth.isLoggedIn),
      headerClass: computed(() => isCompact.value && 'shadow-[0_0_5px_0_rgba(0,0,0,0.4)]'),
      wrapperClass: computed(() => (isCompact.value ? 'pt-1 pb-2 max-w-full' : 'py-8 max-w-screen-3xl')),
      logoClass: computed(() => (isCompact.value ? 'py-2' : 'py-0')),
    };
  },
};
</script>
