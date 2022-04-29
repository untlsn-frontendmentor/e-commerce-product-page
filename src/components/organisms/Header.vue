<script lang="ts" setup="">
import Menu from '~/assets/images/icon-menu.svg';
import Logo from '~/assets/images/logo.svg';
import cartStore from '~/store/cartStore';
import avatar from '~/assets/images/image-avatar.png';

const openNav = ref(false);

const fullCount = computed(() => cartStore.products.reduce((acc, cur) => acc + cur.count, 0));
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-16 bg-white z-1000 px-6 lg:px-32">
    <header class="flex gap-4 items-center border-b-2 border-gray-200 py-6">
      <button class="lg:hidden" @click="openNav = true">
        <Menu />
      </button>
      <p class="<lg:flex-1">
        <a href="/">
          <Logo />
        </a>
      </p>
      <nav class="<lg:hidden flex-1">
        <ul class="flex gap-4 font-bold text-black/50 nav-li">
          <li>
            <a href="/">Collections</a>
          </li>
          <li>
            <a href="/">Men</a>
          </li>
          <li>
            <a href="/">Women</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <CartButton class="hover:opacity-60" :count="fullCount" @click="cartStore.openBox = !cartStore.openBox" />
      <img class="h-8 hover:opacity-60 cursor-pointer" :src="avatar" alt="avatar">
    </header>
  </div>
  <LeftNav :open-nav="openNav" @close="openNav = false" />
  <CartBox />
</template>

<style lang="scss">
.nav-li li {
  @apply transition-opacity relative opacity-50;
  &::before {
    @apply transition-opacity opacity-0 w-full h-3px bg-[#FF7D1B] -bottom-6 absolute content-[''];
  }
  &:hover, &:focus {
    opacity: 1;
    &::before {
      opacity: 1;
    }
  }
}
</style>
