<script lang="ts" setup="">
defineProps<{
  title: string,
  desc: string,
  producer: string
}>();
</script>

<template>
  <div>
    <h3 class="uppercase text-orange-300 font-bold <lg:mt-4">
      {{ producer }}
    </h3>
    <h1 class="text-4xl lg:text-5xl font-bold my-4 <lg:mt-2">
      {{ title }}
    </h1>
    <p class="opacity-50 lg:text-lg">
      {{ desc }}
    </p>
  </div>
</template>
