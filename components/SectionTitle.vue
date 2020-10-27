<template lang="pug">
  .section-title {{ title }}
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    title: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>
  .section-title {
    width: 100%;
    padding: 10px 0;
    font-weight: 700;
    font-size: 24px;
    background: #b4b4b4;
    color: #fff;
    text-align: center;
  }
</style>