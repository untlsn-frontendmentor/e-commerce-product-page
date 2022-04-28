<script lang="ts" setup="">

</script>

<template>
  <article>
    <MainDesc
      producer="sneaker company"
      title="Fall Limited Edition Sneakers"
      desc="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
    />
    <Price
      :price="250"
      :discount="50"
    />
    <Submiter />
  </article>
</template>
