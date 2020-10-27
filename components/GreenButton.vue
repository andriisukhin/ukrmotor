<template lang="pug">
  a.green_btn(type="button" :href="href")
    img(:src="imgUrl")
</template>

<script>
export default {
  name: "GreenButton",
  props: {
    imgUrl: { type: String, required: true },
    href: { type: String, required: true }
  }
}
</script>

<style lang="scss">
  .green_btn {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #69e781;
    box-shadow: 1px 1px 10px 5px rgba(#69e781, .7);
    width: 60px;
    height: 60px;
    img {
      max-width: 30px;
    }
  }
</style>