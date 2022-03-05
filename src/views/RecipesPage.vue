<template>
  <BaseFrame>
    <!-- Search and controls -->
    <div class="flex justify-between items-center mx-auto mb-10 w-full">
      <BaseButton class="w-[175px]" no-border>
        <BaseIcon class="mr-2" name="tune" />
        Filters
      </BaseButton>
      <BaseSearchInput
        class="max-w-xl w-full"
        name="search"
        placeholder="Search"
      />
      <BaseButton
        class="w-[175px]"
        no-border
        @click="createNewRecipe"
      >
        <BaseIcon class="mr-2" name="add_circle_outline" />
        New Recipe
      </BaseButton>
    </div>
    <div class="grid grid-flow-col auto-cols-fr gap-x-4">
      <!-- Latest recipes slider -->
      <BaseSurface>
        <div class="pt-4">
          <h2 class="px-5 py-3">Latest Recipes</h2>
          <BaseDivider />
          <PerfectScrollbar
            class="h-[472px]"
            :options="{ wheelSpeed: 0.5, wheelPropagation: false }"
          >
            <RecipeSlider :items="latestRecipes" />
          </PerfectScrollbar>
        </div>
      </BaseSurface>
      <!-- Popular recipes -->
      <BaseSurface>
        <div class="pt-4">
          <h2 class="px-5 py-3">Popular Recipes</h2>
          <BaseDivider />
          <PerfectScrollbar
            class="h-[472px]"
            :options="{ wheelSpeed: 0.5, wheelPropagation: false }"
          >
            <RecipeGrid :items="popularRecipes" />
          </PerfectScrollbar>
        </div>
      </BaseSurface>
      <!-- Just for you recipes -->
      <BaseSurface>
        <div class="pt-4">
          <h2 class="px-5 py-3">Just for You</h2>
          <BaseDivider />
          <PerfectScrollbar
            class="h-[472px]"
            :options="{ wheelSpeed: 0.5, wheelPropagation: false }"
          >
            <RecipeGrid :items="popularRecipes" />
          </PerfectScrollbar>
        </div>
      </BaseSurface>
    </div>
  </BaseFrame>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { RecipeGrid, RecipeSlider } from '@/components/recipe';

export default {
  name: 'RecipesPage',
  components: { RecipeGrid, RecipeSlider },
  setup: () => {
    const router = useRouter();

    const latestRecipes = computed(() => ([
      {
        id: '0',
        name: 'Chicken et al Queen',
        image: 'https://res.cloudinary.com/hortsatta/image/upload/v1645264562/chi_khvf3g.png',
        url: '#',
      },
    ]));

    const popularRecipes = computed(() => [
      {
        id: '1',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.',
      },
      {
        id: '2',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.',
      },
      {
        id: '3',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.',
      },
      {
        id: '4',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.',
      },
      {
        id: '5',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.',
      },
      {
        id: '6',
        name: 'This Is A Recipe Title',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-S7g3U08dDseRltJvUf0LRht6U84jBW7-Q&usqp=CAU',
        excerpt: 'Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum tristique sem ut felis euismod, eget pellentesque metus bibendum.',
      },
    ]);

    const createNewRecipe = () => {
      router.push({ name: 'recipes-add' });
    };

    return {
      latestRecipes,
      popularRecipes,
      createNewRecipe,
    };
  },
};
</script>
