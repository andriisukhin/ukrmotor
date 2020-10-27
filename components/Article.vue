<template lang="pug">
  .article
    .article__img(:style="{'background-image': `url(${article.img})`}")
    .article__content
      .article__title {{ article.title }}
      .article__text {{ article.text }}
      RouterButton(:href="href")
</template>

<script>
import RouterButton from './RouterButton';

export default {
  name: "Article",
  components: {
    RouterButton
  },
  props: {
    article: { type: Object, required: true },
    href: { type: [String, Number], required: true }
  }
}
</script>

<style lang="scss">
  .article {
    max-height: 250px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &__img {
      width: 30%;
      background-size: cover;
      padding-top: 20%;
    }
    &__content {
      width: 65%;
    }
    &__title {
      font-weight: 700;
      width: 70%;
    }
    &__text {
      width: 70%;
    }
  }

  @media(max-width: 800px) {
    .article {
      max-height: fit-content;
      flex-direction: column;
      align-items: center;
      &__img {
        width: 100%;
        padding-top: 78%;
      }
      &__content {
        width: 100%;
      }
      &__text {
        width: 100%;
      }
    }
  }
</style>
