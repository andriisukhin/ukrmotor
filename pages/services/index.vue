<template lang="pug">
.services-page-bg
  section.services-page(v-if="services && services.length")
    SectionTitle(title="Товары и услуги")
    .services-page__list
      Article.services-page__item(
        v-for="(article, a) in services"
        :key="a"
        :article="article"
        :href="`/services/${article.id}`")
</template>

<script>
import Article from '../../components/Article'
import { mapState, mapActions } from 'vuex'

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
  methods: {
    ...mapActions([
      'fetchServices'
    ])
  },
  fetchOnServer: true,
  async fetch() {
    await this.fetchServices();
  }
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