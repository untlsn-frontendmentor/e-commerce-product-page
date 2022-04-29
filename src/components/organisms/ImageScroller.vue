<script lang="ts" setup="">
import image1 from '~/assets/images/image-product-1.jpg';
import image2 from '~/assets/images/image-product-2.jpg';
import image3 from '~/assets/images/image-product-3.jpg';
import image4 from '~/assets/images/image-product-4.jpg';
import Next from '~/assets/images/icon-next.svg';
import Previous from '~/assets/images/icon-previous.svg';
import useImages from '~/hooks/useImages';

const images = [image1, image2, image3, image4];

const posTrans = {
  '-1': '-translate-x-100% duration-500',
  0: 'translate-x-0 duration-0',
  1: 'translate-x-100% duration-500',
};

const { imagePos, curImage, curImageAnim } = useImages(images.length);
</script>

<template>
  <div>
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
      <button class="change-button left-5" @click="curImageAnim--">
        <Previous />
      </button>
      <button class="change-button right-5" @click="curImageAnim++">
        <Next />
      </button>
    </div>
    <ul class="justify-center gap-4 hidden lg:flex">
      <li v-for="(image, i) in images" :key="image" class="h-20 w-20">
        <img
          :src="image"
          alt="image"
          class="rounded-xl border-4 hover:opacity-50 cursor-pointer"
          :class="`${curImageAnim == i ? 'border-orange-500 opacity-50' : 'border-transparent'}`"
          @click="curImageAnim = i"
        >
      </li>
    </ul>
  </div>
</template>

<style>
.change-button {
  @apply absolute rounded-full p-4 bg-white h-12 w-12 lg:hidden;
}
</style>
