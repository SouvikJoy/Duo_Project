<template>
  <div id="App">
    <header class="fixed w-full">
      <TopNav />
    </header>
    <main class="bg-dark_body">
      <Nuxt :key="$route.fullPath" />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style lang="scss">

</style>
<script>
import TopNav from '~/components/common/TopNav';
import Footer from '~/components/common/Footer';
export default {
  components: { Footer, TopNav }
};
</script>
