<template>
  <div v-if="!vertical" class="flex flex-col justify-between h-[6px] w-full">
    <div class="w-full h-px bg-border-400"></div>
    <div class="w-full h-px bg-border-200"></div>
  </div>
  <div v-else class="flex justify-between w=[6px] h-full">
    <div class="h-full w-px bg-border-400"></div>
    <div class="h-full w-px bg-border-200"></div>
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
