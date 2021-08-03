<template>
  <div>
    <div class="grid justify-items-center">
      <img :src="packageItem.img" alt="" class="mb-[-110px] z-10">
      <div class="glass">
        <div>
          <div class="text-center text-white font-extrabold text-[2rem] mt-[110px]">
            {{ packageItem.name }}
          </div>
          <div class="text-center text-white font-extrabold text-[1rem] my-8 mx-[20px]">
            {{ packageItem.description }}
          </div>
          <div class="text-center text-white font-extrabold text-[1rem]">
            Starting at
            <br>
            <span class="text-[2rem]">
              Tk{{ packageItem.pricePerMonth }}/month
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PackageCard',
  props: {
    packageItem: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>

</style>
