<template>
  <div v-if="!vertical" class="h-[6px] relative w-full">
    <div class="absolute top-0 w-full h-px bg-black opacity-40"></div>
    <div class="absolute bottom-0 w-full h-px bg-black opacity-20"></div>
  </div>
  <div v-else class="w=[6px] relative h-full">
    <div class="absolute left-0 h-full w-px bg-black opacity-40"></div>
    <div class="absolute right-0 h-full w-px bg-black opacity-20"></div>
  </div>
</template>

<script>
export default {
  name: 'BaseDivider',
  props: {
    vertical: Boolean
  }
};
</script>
