<template>
  <TheHeader />
  <main class="py-8">
    <RouterView />
  </main>
  <TheFooter />
</template>

<script>
import { TheHeader, TheFooter } from './components/core';

export default {
  name: 'App',
  components: { TheHeader, TheFooter },
};
</script>
