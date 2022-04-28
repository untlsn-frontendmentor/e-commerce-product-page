<script lang="ts" setup="">
import { $ref } from 'vue/macros';
import Menu from '~/assets/images/icon-menu.svg';
import Logo from '~/assets/images/logo.svg';
import cartStore from '~/store/cartStore';

const openNav = $ref(false);

const fullCount = $computed(() => cartStore.products.reduce((acc, cur) => acc + cur.count, 0));
</script>

<template>
  <header class="flex p-6 gap-4 items-center bg-white fixed top-0 left-0 w-full h-16 z-1000">
    <button @click="openNav = true">
      <Menu />
    </button>
    <p class="flex-1">
      <a href="/">
        <Logo />
      </a>
    </p>
    <CartButton :count="fullCount" @click="cartStore.openBox = !cartStore.openBox" />
  </header>
  <LeftNav :open-nav="openNav" @close="openNav = false" />
  <CartBox />
</template>
