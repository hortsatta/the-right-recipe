<template>
   <div class="relative">
    <label
      class="absolute left-[10px] top-[50%] -translate-y-[50%] leading-[0] cursor-text"
      :for="name"
    >
      <BaseIcon class="text-border-400" name="search" />
    </label>
    <input
      class="block pl-10 py-2 pr-8 w-full font-sans rounded-sm border"
      type="text"
      :name="name"
      :id="id"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
    <button
      class="absolute bottom-[10px] right-2 leading-[0]"
      @click="() => handleChange(null)"
    >
      <BaseIcon
        v-if="inputValue"
        name="close"
        tooltip="clear search"
      />
    </button>
   </div>
</template>

<script>
import { computed } from 'vue';
import { useField } from 'vee-validate';

export default {
  name: 'BaseSearchInput',
  props: {
    inputId: String,
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup: (props) => {
    const {
      value: inputValue,
      // errorMessage,
      handleBlur,
      handleChange,
    } = useField(props.name, undefined, {
      initialValue: props.value,
    });

    const id = computed(() => props.name);

    return {
      inputValue,
      id,
      handleChange,
      handleBlur,
    };
  },
};
</script>
