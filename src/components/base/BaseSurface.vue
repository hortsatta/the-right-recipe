<template>
  <div class="relative p-[5px] border-2 border-border-200 rounded-[2px]
    before:content-['•'] before:top-[5px] before:left-[5px] before:flex before:justify-center
    before:items-center before:absolute before:h-[14px] before:text-border-200 before:border-2
    before:w-[14px] before:border-border-200
    after:content-['•'] after:top-[5px] after:right-[5px] after:flex after:justify-center
    after:items-center after:absolute after:h-[14px] after:text-border-200 after:border-2
    after:w-[14px] after:border-border-200
  ">
    <div class="border-2 border-border-200 rounded-[2px] inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSurface'
};
</script>

<style scoped>
.outer::before {
  content: "*";
  position: absolute;
  width: 14px;
  height: 14px;
  border: 2px solid ;
}
</style>
