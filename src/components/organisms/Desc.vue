<script lang="ts" setup="">
import cartStore from '~/store/cartStore';
import image from '~/assets/images/image-product-1-thumbnail.jpg';

const onSubmit = (count: number) => {
  cartStore.products.push({
    count,
    price: 125,
    name: 'Autumn Limited Edition',
    image,
  });
};
</script>

<template>
  <article class="<lg:px-1/10 <lg:space-y-6 lg:(min-h-150 flex flex-col gap-10)">
    <MainDesc
      producer="sneaker company"
      title="Fall Limited Edition Sneakers"
      desc="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
    />
    <Price
      :price="250"
      :discount="50"
    />
    <Submiter @submit="onSubmit" />
  </article>
</template>
