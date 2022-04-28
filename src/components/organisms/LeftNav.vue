<script lang="ts" setup="">
import Cross from '~/assets/images/icon-close.svg';

defineProps<{
  openNav: boolean
}>();
const emit = defineEmits<{
  (type: 'close'): void
}>();

const close = () => emit('close');
</script>

<template>
  <div
    class="fixed top-0 left-0 h-screen w-screen z-2000 bg-black/70"
    :class="`${openNav ? '' : 'invisible'}`"
    @click="close"
  />
  <nav
    class="fixed top-0 left-0 bg-white h-screen w-3/5 p-6 transition-transform transform z-2000"
    :class="`${openNav ? 'translate-x-0' : '-translate-x-100%'}`"
    @click.stop
  >
    <button @click="close">
      <Cross />
    </button>
    <ul class="pt-12 space-y-3 font-bold">
      <li><a href="/">Collections</a></li>
      <li><a href="/">Men</a></li>
      <li><a href="/">Women</a></li>
      <li><a href="/">About</a></li>
      <li><a href="/">Contact</a></li>
    </ul>
  </nav>
</template>
