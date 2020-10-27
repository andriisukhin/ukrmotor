<template lang="pug">
.services-page-bg
  section.services-page
    SectionTitle(title="Товары и услуги")
    .services-page__list
      Article.services-page__item(v-for="(article, a) in services" :key="a" :article="article" :href="`/services/${article.id}`")
</template>

<script>
import Article from '../../components/Article'
import { mapState } from 'vuex'

export default {
  name: 'Blog',
  components: {
    Article
  },
  computed: {
    ...mapState([
      'services'
    ])
  },
  fetchOnServer: true,
}
</script>

<style lang="scss">
  .services-page-bg {
    background-image: url('../../static/triangle_left.png');
    background-repeat: no-repeat;
    background-position: 0 200px;
    &::before {
      position: absolute;
      content: '';
      bottom: 50vh;
      right: 0;
      width: 20%;
      padding-top: 25%;
      background-image: url('../../static/triangle_right.png');
      background-repeat: no-repeat;
      background-size: cover;
      
    }
  }
  .services-page {
    padding: 150px 0;
    width: 90%;
    margin: 0 auto;
    &__list {
      padding-top: 50px;
      width: 90%;
      margin: 0 auto;
    }
    &__item {
      margin-top: 50px;
    }
  }

  @media(max-width: 800px) {
    .services-page-bg {
      background-size: 50%;
    }
  }
</style>