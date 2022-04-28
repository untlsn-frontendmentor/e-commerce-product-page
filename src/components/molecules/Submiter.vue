<script lang="ts" setup="">
import minus from '~/assets/images/icon-minus.svg?url';
import plus from '~/assets/images/icon-plus.svg?url';
import Cart from '~/assets/images/icon-cart.svg';

let value = $ref(1);

watchEffect(() => {
  if (value < 1) value = 1;
});
</script>

<template>
  <form class="lg:grid grid-cols-3 items-center gap-4">
    <div class="bg-[#F7F8FD] flex items-center px-6 py-4 justify-between rounded-xl">
      <button type="button" @click="value--">
        <img :src="minus" alt="minus">
      </button>
      <p class="font-bold">
        {{ value }}
      </p>
      <button type="button" @click="value++">
        <img :src="plus" alt="plus">
      </button>
    </div>
    <Button class="col-span-2">
      <Cart class="inline brightness-0 invert-[1]" />
      <span>Add to cart</span>
    </Button>
  </form>
</template>
