<template lang="pug">
  nuxt-link.router-button(:to="href") Подробнее 
</template>

<script>
export default {
  name: 'RouterButton',
  props: {
    href: { type: [String, Number], required: true }
  }
}
</script>

<style lang="scss">
  .router-button {
    padding: 10px 50px;
    color: #fff;
    background: #b7262a;
    font-weight: 500;
    margin-top: 20px;
    text-align: center;
    display: inline-block;
  }
</style>