<template>
  <TheHeader />
  <RouterView />
</template>

<script>
import { TheHeader } from './components/core';

export default {
  name: 'App',
  components: { TheHeader }
};
</script>
