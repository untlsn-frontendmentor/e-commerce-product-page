<script lang="ts" setup="">
import image1 from '~/assets/images/image-product-1.jpg';
import image2 from '~/assets/images/image-product-2.jpg';
import image3 from '~/assets/images/image-product-3.jpg';
import image4 from '~/assets/images/image-product-4.jpg';
import useImages from '~/hooks/useImages';

const images = [image1, image2, image3, image4];

const { imagePos, curImage, curImageAnim } = useImages(images.length);
const openModal = ref(false);
</script>

<template>
  <div>
    <ImageScrollerCore
      v-model:cur-image-anim="curImageAnim"
      :image-pos="imagePos"
      :cur-image="curImage"
      :images="images"
      :hide-desktop-arrows="true"
      @click="openModal = true"
    />
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
    <div v-if="openModal" class="<lg:hidden fixed z-2000 bg-black/50 top-0 left-0 h-screen w-screen grid place-items-center" @click="openModal = false">
      <div class="scale-70 origin-top mt-25" @click.stop>
        <ImageScrollerCore
          v-model:cur-image-anim="curImageAnim"
          :image-pos="imagePos"
          :cur-image="curImage"
          :images="images"
        />
      </div>
    </div>
  </div>
</template>
