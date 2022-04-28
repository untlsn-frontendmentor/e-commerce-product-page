<script lang="ts" setup="">
defineProps<{
  title: string,
  desc: string,
  producer: string
}>();
</script>

<template>
  <div>
    <h3 class="uppercase text-[#FF7D1B]">
      {{ producer }}
    </h3>
    <h1 class="text-4xl font-bold mt-4 mb-8">
      {{ title }}
    </h1>
    <p class="opacity-50">
      {{ desc }}
    </p>
  </div>
</template>
