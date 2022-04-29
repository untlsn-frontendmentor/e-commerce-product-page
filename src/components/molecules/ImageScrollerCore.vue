<script lang="ts" setup="">
import Next from '~/assets/images/icon-next.svg';
import Previous from '~/assets/images/icon-previous.svg';

const posTrans = {
  '-1': '-translate-x-100% duration-500',
  0: 'translate-x-0 duration-0',
  1: 'translate-x-100% duration-500',
};

defineProps<{
  imagePos: number
  curImageAnim: number
  curImage: number
  images: string[]
  hideDesktopArrows?: boolean
}>();

defineEmits<{
  (type: 'update:curImageAnim', value: number): void
}>();
</script>

<template>
  <div class="relative flex items-center overflow-x-hidden <lg:w-screen">
    <div class="relative" :class="posTrans[imagePos]">
      <img
        v-if="imagePos == 1"
        class="absolute transform -translate-x-100% top-0 left-0"
        :src="images[curImageAnim]"
        alt="product"
      >
      <img
        :src="images[curImage]"
        alt="product"
      >
      <img
        v-if="imagePos == -1"
        class="absolute transform translate-x-100% top-0 right-0"
        :src="images[curImageAnim]"
        alt="product"
      >
    </div>
    <button class="change-button left-5" :class="`${hideDesktopArrows ? 'lg:hidden' : ''}`" @click="$emit('update:curImageAnim', curImageAnim-1)">
      <Previous />
    </button>
    <button class="change-button right-5" :class="`${hideDesktopArrows ? 'lg:hidden' : ''}`" @click="$emit('update:curImageAnim', curImageAnim+1)">
      <Next />
    </button>
  </div>
</template>

<style>
.change-button {
  @apply absolute rounded-full p-4 bg-white h-12 w-12;
}
</style>
