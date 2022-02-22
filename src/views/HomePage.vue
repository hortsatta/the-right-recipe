<template>
  <BaseFrame>
    <div class="flex justify-center items-start">
      <BaseSurface class="mr-4 flex-initial w-3/5">
        <div class="pb-12">
          <FeaturedRecipe :item="featuredRecipe" />
        </div>
      </BaseSurface>
      <BaseSurface class="ml-4 flex-initial w-2/5">
        <div class="pt-4">
          <h2 class="pl-5 py-3">Newest Recipes</h2>
          <BaseDivider />
          <PerfectScrollbar
            class="h-[354px]"
            :options="{ wheelSpeed: 0.5, wheelPropagation: false }"
          >
            <RecipeGrid :items="latestRecipes" />
          </PerfectScrollbar>
        </div>
      </BaseSurface>
    </div>
  </BaseFrame>
</template>

<script>
import { computed } from 'vue';
import { FeaturedRecipe, RecipeGrid } from '@/components/recipe';

export default {
  name: 'HomePage',
  components: { FeaturedRecipe, RecipeGrid },
  setup() {
    const featuredRecipe = computed(() => ({
      name: 'Chicken et al Queen',
      image: 'https://res.cloudinary.com/hortsatta/image/upload/v1645264562/chi_khvf3g.png',
      excerpt: `Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum
        tristique sem ut felis euismod, eget pellentesque metus bibendum. Cras id arcu augue.
        Praesent condimentum risus et massa dapibus laoreet. Integer quis sapien tincidunt
        mauris convallis gravida. Nunc eu luctus mauris. Praesent vehicula suscipit est
        aliquam consectetur.
      `
    }));

    const latestRecipes = computed(() => [
      {
        id: '1',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.'
      },
      {
        id: '2',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.'
      },
      {
        id: '3',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.'
      },
      {
        id: '4',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.'
      },
      {
        id: '5',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.'
      },
      {
        id: '6',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.'
      }
    ]);

    return { featuredRecipe, latestRecipes };
  }
};
</script>
