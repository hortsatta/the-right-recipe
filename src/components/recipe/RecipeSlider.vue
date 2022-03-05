<template>
  <div>
    <!-- Recipe slides -->
    <div
      class="flex flex-col items-center"
      v-for="item in items"
      :key="item.id"
    >
      <!-- Recipe image -->
      <div class="relative mt-6 mb-8 max-w-[320px] max-h-[320px] w-full h-full">
        <img
          class="relative z-10"
          :src="item.image"
          alt="featured recipe image"
        />
        <div class="absolute w-3/4 h-3/4 left-1/2 top-[60%] bg-[#341800] rounded-full
          transform -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-60"></div>
        <div class="absolute w-[92%] h-[92%] left-1/2 top-[52%] bg-[#341800] rounded-full
          transform -translate-x-1/2 -translate-y-1/2 blur opacity-40"></div>
      </div>
      <!-- Recipe title and controls -->
      <div
        class="flex w-full justify-between items-center px-8 py-4 border-t-2
          border-border-200 border-dashed"
      >
        <h4>{{ item.name }}</h4>
        <BaseButton @click="() => handleViewRecipe(item.url)">
          View Recipe
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeSlider',
  props: {
    items: {
      type: Array,
      required: true,
    },
    setup: () => {
      const handleViewRecipe = (url) => {
        console.log('url', url);
      };

      return {
        handleViewRecipe,
      };
    },
  },
};
</script>
