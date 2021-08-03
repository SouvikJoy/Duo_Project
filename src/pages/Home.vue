<template>
  <div class="bg-box">
    <div class="container mx-auto">
      <div class="grid grid-cols-2 justify-items-stretch pt-[150px]">
        <div class="justify-self-center place-self-center mx-40">
          <div class="mb-4">
            <img :src="landingPageDetails.brandLogoBig" alt="">
          </div>
          <div class="heading_1 mb-6">
            {{ landingPageDetails.heading }}
          </div>
          <div class="heading_2">
            {{ landingPageDetails.subHeading }}
          </div>
        </div>

        <!--        Landing Page SVG Illustration-->

        <div class="justify-self-center">
          <img :src="landingPageDetails.landingPageIllustration" alt="">
        </div>
      </div>

      <!--      Domain Extension with Price-->

      <div class="grid grid-cols-1 place-items-center justify-items-center mt-6 package_box">
        <div :style="{ backgroundImage: `url(${require('~/assets/back.png')})` }" class="box_1">
          <div>
            <img src="~/assets/fake_1.png" alt="" class="mt-[60px] ml-[90px]">
          </div>
          <div class="grid grid-cols-11 mx-[40px]">
            <div v-for="(extensionItem, index) in extensionItems" :key="index">
              <ExtensionCard :extension-item="extensionItem" />
            </div>
          </div>

          <!--          Package Section-->

          <div
            class="grid grid-cols-4 gap-60 place-items-center justify-content-center mb-8"
          >
            <div
              v-for="(packageItem, index) in packageItems"
              :key="index"
            >
              <PackageCard :package-item="packageItem" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="~/assets/fake_2.png" alt="">
      </div>
      <div>
        <img src="~/assets/fake_3.png" alt="" class="w-[70%] ml-[140px]">
      </div>
    </div>
  </div>
</template>

<script>
import PackageCard from '~/components/PackageCard';
import ExtensionCard from '~/components/ExtensionCard';
export default {
  components: { ExtensionCard, PackageCard },
  data: () => ({
    landingPageDetails: {
      heading: 'Superior Cloud Server & Hosting in One Platform',
      subHeading: 'Reliable website hosting, 99.9% uptime guarantee, free SSL certificate, easy WordPress installs & 24 hours support.',
      brandLogoBig: require('~/assets/Debugger.tech.png'),
      landingPageIllustration: require('~/assets/svg_landing.png')
    },
    packageItems: [
      {
        name: 'Web Hosting',
        pricePerMonth: '700',
        description: 'Ideal to get started and go on to a more advanced hosting package.',
        img: require('~/assets/hosting.png')
      },
      {
        name: 'Reseller Hosting',
        pricePerMonth: '9000',
        description: 'Ideal to get started and go on to a more advanced hosting package.',
        img: require('~/assets/reseller.png')
      },
      {
        name: 'Virtual Servers',
        pricePerMonth: '200',
        description: 'Ideal to get started and go on to a more advanced hosting package.',
        img: require('~/assets/virtual.png')
      },
      {
        name: 'Dedicated Servers',
        pricePerMonth: '500',
        description: 'Ideal to get started and go on to a more advanced hosting package.',
        img: require('~/assets/dedicated.png')
      }
    ],
    extensionItems: [
      {
        extensionName: 'com',
        img: require('~/assets/com.png'),
        price: '900'
      },
      {
        img: require('~/assets/break.png')
      },
      {
        extensionName: 'xyz',
        img: require('~/assets/xyz.png'),
        price: '900'
      },
      {
        img: require('~/assets/break.png')
      },
      {
        extensionName: 'me',
        img: require('~/assets/me.png'),
        price: '500'
      },
      {
        img: require('~/assets/break.png')
      },
      {
        extensionName: 'net',
        img: require('~/assets/net.png'),
        price: '700'
      },
      {
        img: require('~/assets/break.png')
      },
      {
        extensionName: 'org',
        img: require('~/assets/org.png'),
        price: '9200'
      },
      {
        img: require('~/assets/break.png')
      },
      {
        extensionName: 'top',
        img: require('~/assets/top 1.png'),
        price: '900'
      }
    ]
  })
};
</script>

<style lang="scss">

</style>
