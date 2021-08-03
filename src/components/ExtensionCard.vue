<template>
  <div class="grid grid-cols-1 place-items-center justify-items-center">
    <img :src="extensionItem.img" alt="">
    <p v-if="extensionItem.price" class="text-white">
      {{ extensionItem.price }} BDT
    </p>
  </div>
</template>

<script>
export default {
  name: 'ExtensionCard',
  props: {
    extensionItem: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
