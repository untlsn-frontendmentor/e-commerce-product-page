<script lang="ts" setup="">
const props = defineProps<{
  price: number,
  discount: number
}>();

const priceAfterDiscount = computed(() => {
  const percent = props.discount / 100;
  const minus = props.price * percent;
  return props.price - minus;
});
</script>

<template>
  <section class="flex gap-2 <lg:items-center lg:flex-col justify-between">
    <div class="font-bold flex items-center">
      <h1 class="pr-2 text-2xl">
        ${{ priceAfterDiscount.toFixed(2) }}
      </h1>
      <p class="px-2 py-1 rounded bg-[#FDEEE1] text-[#FF7D1B] text-sm">
        {{ discount }}%
      </p>
    </div>
    <p class="opacity-30">
      <s>${{ price.toFixed(2) }}</s>
    </p>
  </section>
</template>
