<template>
  <div class="inline-block py-1 border-y border-slate-400">
    <button
      class="relative"
      type="button"
      @click="click"
      v-button
    >
      <span class="relative block px-6 py-2 text-lg font-serif z-10">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    click: Function
  }
};
</script>
