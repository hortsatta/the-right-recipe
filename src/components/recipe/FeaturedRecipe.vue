<template>
  <div class="flex flex-col items-center">
    <!-- Recipe title -->
    <div class="flex items-center pt-12 pb-7">
      <img
        class="w-[70px] h-[65px] opacity-50"
        src="~@/assets/images/border-left.svg"
        alt="border left"
      />
      <div class="px-12">
        <h4 class="text-4xl text-center">Chicken et al Queen</h4>
        <h2 class="text-xl text-center text-slate-700 uppercase">Recipe of the Day</h2>
      </div>
      <img
        class="w-[70px] h-[65px] opacity-50"
        src="~@/assets/images/border-right.svg"
        alt="border right"
      />
    </div>
    <BaseDivider />
    <!-- Recipe top view image -->
    <div class="w-[500px] h-[500px] p-8">
      <div class="relative flex w-full h-full justify-items-center items-center plate">
        <img
          class="relative z-10 rotate-anim"
          src="https://res.cloudinary.com/hortsatta/image/upload/v1645264562/chi_khvf3g.png"
          alt="featured recipe image"
        >
        <div class="absolute w-3/4 h-3/4 left-1/2 top-[60%] bg-[#341800] rounded-full
          transform -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-80"></div>
        <div class="absolute w-[92%] h-[92%] left-1/2 top-[52%] bg-[#341800] rounded-full
          transform -translate-x-1/2 -translate-y-1/2 blur opacity-60"></div>
      </div>
    </div>
    <BaseDividerAlt class="mb-8" />
    <!-- Recipe introduction -->
    <div>
      <p class="text-center">
        Curabitur euismod scelerisque augue. Cras faucibus at nunc at hendrerit. Vestibulum
        tristique sem ut felis euismod, eget pellentesque metus bibendum. Cras id arcu augue.
        Praesent condimentum risus et massa dapibus laoreet. Integer quis sapien tincidunt
        mauris convallis gravida. Nunc eu luctus mauris. Praesent vehicula suscipit est
        aliquam consectetur.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturedRecipe'
};
</script>

<style scoped>
.rotate-anim {
  animation: rotate 60s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
