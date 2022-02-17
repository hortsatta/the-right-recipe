<template>
  <div class="h-screen bg-orange-50 bg-tile">
    <TheHeader />
    <RouterView />
  </div>
</template>

<script>
import { TheHeader } from './components/base';

export default {
  name: 'App',
  components: { TheHeader }
};
</script>
