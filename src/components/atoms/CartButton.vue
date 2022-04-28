<script lang="ts" setup="">
import Cart from '~/assets/images/icon-cart.svg';

defineProps<{
  count: number,
}>();
</script>

<template>
  <button class="relative">
    <span class="absolute -top-1 -right-1 h-6 w-9 bg-orange rounded-full text-center text-white scale-50 origin-top-right font-bold">
      {{ count }}
    </span>
    <Cart class="text-[#69707D]" />
  </button>
</template>
