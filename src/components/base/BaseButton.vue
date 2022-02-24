<template>
  <div
    class="inline-block py-1"
    :class="!noBorder && 'border-y border-slate-400'"
  >
    <button
      class="relative w-full min-h-[44px] disabled:saturate-0"
      type="button"
      :disabled="disabled"
      @click.prevent="this.$emit('click')"
      v-button
    >
      <div class="relative px-6 py-2 z-10">
        <div v-if="loading" class="flex justify-center items-center">
          <svg
            class="animate-spin h-[24px] w-[24px] text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014
                12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
        <span v-else class="text-lg font-serif">
          <slot></slot>
        </span>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    loading: Boolean,
    disabled: Boolean,
    noBorder: Boolean,
  },
  emits: ['click'],
};
</script>
