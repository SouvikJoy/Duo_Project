<template>
  <nav>
    <div class="sales flex justify-end place-items-center" :style="{ backgroundImage: `url(${require('~/assets/noise.png')})` }">
      <div class="text-[0.8rem] mr-4">
        Sales: +8801712123456789 (9AM - 5PM)
      </div>
      <img src="~/assets/bd.png" alt="" class="mr-1">
      <div class="mr-4">
        BDT
      </div>
    </div>
    <div class="grid grid-cols-3 place-items-center bg-color_header text-white py-4">
      <div>
        <NuxtLink :to="{ name: 'home' }">
          <img src="~/assets/LogoMain.png" alt="main_logo">
        </NuxtLink>
      </div>
      <div class="flex place-items-center">
        <NuxtLink
          v-for="(link, index) in navLinks"
          :key="index"
          text
          :to="link.to"
          :aria-label="link.label"
          class="mx-4 font-bold z-40"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
      <div class="flex justify-around place-items-center">
        <div class="mr-4 font-bold">
          User
        </div>
        <img src="~/assets/profile-img.jpg" alt="profile-img" class="w-10 rounded-[50%]">
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TopNav',
  data: () => ({
    navLinks: [
      {
        text: 'Home',
        label: 'home',
        to: '/'
      },
      {
        text: 'Server',
        label: 'server',
        to: '/server'
      },
      {
        text: 'Hosting',
        label: 'hosting',
        to: '/hosting'
      },
      {
        text: 'Domain',
        label: 'domain',
        to: '/domain'
      },
      {
        text: 'Reseller',
        label: 'reseller',
        to: '/reseller'
      },
      {
        text: 'Company',
        label: 'company',
        to: '/company'
      }
    ]
  })
};
</script>

<style lang="scss">

</style>
