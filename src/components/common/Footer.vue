<template>
  <div class="bg-color_header text-white">
    <div class="container mx-auto">
      <div class="grid grid-rows-7 grid-cols-4 place-items-center ml-6 pt-[70px]">
        <div v-for="(link, index) in footerLinks" :key="index">
          <FooterLink :href="link.href">
            {{ link.text }}
          </FooterLink>
        </div>
      </div>
      <div class="col-span-2 py-20 pl-20">
        <img src="~/assets/LogoMain.png" alt="" class="w-80">
        <p class="mb-6">
          We serve Web hosting, VPS, Dedicated Server, domain registering service for you. Most affordable, reliable and easily managed.
        </p>
        <div class="flex justify-start mb-6">
          <img src="~/assets/facebook icon.png" alt="" class="social_icon">
          <img src="~/assets/instagram icon.png" alt="" class="social_icon">
          <img src="~/assets/twitter icon.png" alt="" class="social_icon">
          <img src="~/assets/linkedin icon.png" alt="" class="social_icon">
        </div>
        <div>
          © 2021 debugger.tech, LLC. All rights reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterLink from '~/components/common/FooterLink';
export default {
  name: 'Footer',
  components: { FooterLink },
  data: () => ({
    footerLinks: [
      {
        text: 'Domains'
      },
      {
        text: 'Domain Name Search',
        href: 'https://facebook.com'
      },
      {
        text: 'Domain Transfer',
        href: 'https://facebook.com'
      },
      {
        text: 'Personal Domain',
        href: 'https://facebook.com'
      },
      {
        text: 'Whois Lookup',
        href: 'https://facebook.com'
      },
      {
        text: 'Domain registration',
        href: 'https://facebook.com'
      },
      {
        text: 'Manage Domain',
        href: 'https://facebook.com'
      },
      {
        text: 'Cheap SSL certificate',
        href: 'https://facebook.com'
      },
      {
        text: 'Buy Domain Name',
        href: 'https://facebook.com'
      },
      {
        text: 'WHOIS checker',
        href: 'https://facebook.com'
      },
      {
        text: 'Free SSL certificate',
        href: 'https://facebook.com'
      },
      {
        text: 'Hosting'
      },
      {
        text: 'Shared Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Wordpress Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Web Hosting for School',
        href: 'https://facebook.com'
      },
      {
        text: 'Tomcat Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Reseller Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'VPS Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'JSP Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Dedicated Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Application Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Server'
      },
      {
        text: 'Dedicated Server',
        href: 'https://facebook.com'
      },
      {
        text: 'Cloud Server',
        href: 'https://facebook.com'
      },
      {
        text: 'Storage Server',
        href: 'https://facebook.com'
      },
      {
        text: 'High Performance VPS',
        href: 'https://facebook.com'
      },
      {
        text: 'IDH VPS Server',
        href: 'https://facebook.com'
      },
      {
        text: 'Virtual Dedicated Server',
        href: 'https://facebook.com'
      },
      {
        text: 'VPS Server',
        href: 'https://facebook.com'
      },
      {
        text: 'IDH Cloud Server',
        href: 'https://facebook.com'
      },
      {
        text: 'Website Builder',
        href: 'https://facebook.com'
      },
      {
        text: 'Java Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'CMS Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'E-Commerce Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'C Panel Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Email Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Cheap Web Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Web Design Services',
        href: 'https://facebook.com'
      },
      {
        text: 'Student Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'License'
      },
      {
        text: 'Dedicated Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Application Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Java Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'CMS Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'E-Commerce Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'C Panel Hosting',
        href: 'https://facebook.com'
      },
      {
        text: 'Email Hosting',
        href: 'https://facebook.com'
      }
    ]
  })
};
</script>

<style scoped>

</style>
<!--© 2021 debugger.tech, LLC. All rights reserved-->
