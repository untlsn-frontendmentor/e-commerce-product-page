<script lang="ts" setup="">
import Trash from '~/assets/images/icon-delete.svg';
import cartStore from '~/store/cartStore';

const article = $ref({} as HTMLElement);
</script>

<template>
  <article
    v-if="cartStore.openBox"
    :ref="article"
    tabindex="-1"
    class="fixed top-18 left-0 bg-white z-1000 w-24/25 ml-1/50 rounded-xl"
    @blur="cartStore.openBox = false"
  >
    <h1 class="py-5 pl-8 font-bold">
      Cart
    </h1>
    <hr class="border-gray-200">
    <ul v-if="cartStore.products.length" class="p-8 pb-0 space-y-6">
      <li
        v-for="(product, i) in cartStore.products"
        :key="i"
        class="flex justify-between items-center gap-4"
      >
        <img class="h-14 rounded-lg" :src="product.image" alt="product">
        <div class="text-black/50 flex-1">
          <h1>{{ product.name }}</h1>
          <p>
            <span>${{ product.price }} x {{ product.count }} </span>
            <b class="text-black">
              ${{ product.price * product.count }}
            </b>
          </p>
        </div>
        <button @click="cartStore.products.splice(i, 1)">
          <Trash />
        </button>
      </li>
    </ul>
    <p v-else class="font-bold opacity-50 text-center py-24">
      Your cart is empty.
    </p>
  </article>
</template>
