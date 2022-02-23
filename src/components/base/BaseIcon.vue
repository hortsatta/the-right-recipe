<template>
  <i v-if="!tooltip" class="material-icons-round leading-none">
    {{ name }}
  </i>
  <i
    v-else
    class="material-icons-round leading-none"
    :content="tooltip"
    v-tippy
  >
    {{ name }}
  </i>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    tooltip: String
  }
};
</script>
