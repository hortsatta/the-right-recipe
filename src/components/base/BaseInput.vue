<template>
   <div class="relative">
    <label class="font-display" :for="name">
      {{ label }}
    </label>
    <input
      class="block pl-4 py-2 pr-8 w-full font-sans rounded-sm border"
      :class="errorClasses"
      :type="type"
      :name="name"
      :id="name"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
    <BaseIcon
      v-if="errorMessage"
      name="cancel"
      class="absolute bottom-[10px] right-2 text-red-600"
      :tooltip="errorMessage"
    />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useField } from 'vee-validate';

export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: String
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange
    } = useField(props.name, undefined, {
      initialValue: props.value
    });

    const errorClasses = computed(() => ([
      errorMessage?.value ? 'border-red-600' : 'border-border-400',
      errorMessage?.value ? 'focus:outline-red-600' : 'focus:outline-blue-400'
    ]));

    return {
      inputValue,
      errorMessage,
      errorClasses,
      handleChange,
      handleBlur
    };
  }
};
</script>
