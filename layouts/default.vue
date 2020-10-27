<template lang="pug">
  div
    HeaderBlock
    .container
      Nuxt
    FooterBlock
</template>

<script>
import HeaderBlock from '../components/Header'
import FooterBlock from '../components/Footer'
export default {
  name: "Layout",
  components: {
    HeaderBlock,
    FooterBlock
  }
}
</script>

<style lang="scss">
html {
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #263238;
}

a {
  text-decoration: none;
  color: #000;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  position: relative;
}
</style>
