<template>
  <BaseFrame>
    <div class="flex justify-center items-start">
      <div class="flex-initial w-2/3">
        <FeaturedRecipe />
      </div>
      <div class="flex-initial w-1/3"></div>
    </div>
  </BaseFrame>
</template>

<script>
import { FeaturedRecipe } from '@/components/recipe';

export default {
  name: 'HomePage',
  components: { FeaturedRecipe }
};
</script>
