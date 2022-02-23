<template>
  <div class="grid grid-flow-row divide-y divide-border-200">
    <div class="px-1 py-1" v-for="item in items" :key="item.id">
      <div v-button>
        <div class="relative flex items-center z-10">
          <!-- Recipe image -->
          <div class="relative mr-4 pl-5 pr-4 py-3">
            <div class="shrink-0 w-[120px] h-[86px]
              bg-gray-400 rounded-[6px] overflow-hidden">
              <img
                class="w-full h-full object-cover"
                :src="item.image"
                :alt="item.name"
              />
            </div>
            <div
              class="absolute -top-1 right-0 border-r-2 border-border-200 border-dashed"
              style="height: calc(100% + 0.5rem)"
            ></div>
          </div>
          <div>
            <!-- Recipe name -->
            <h4>{{ item.name }}</h4>
            <!-- Recipe excerpt -->
            <p class="pr-2 text-sm leading-4">{{ item.excerpt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeGrid',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
