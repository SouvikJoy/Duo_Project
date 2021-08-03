<template>
  <component
    :is="type"
    :href="href"
    :disabled="disabled"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'FooterLink',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: null
    },
    linkClass: {
      type: String,
      default: 'null'
    }
  },
  computed: {
    type () {
      if (this.href) {
        return 'a';
      } else {
        return 'p';
      }
    }
  }
};
</script>

<style scoped>
</style>
