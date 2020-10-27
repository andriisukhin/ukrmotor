<template lang="pug">
.blog-page-bg
  section.blog-page
    SectionTitle(title="Блог")
    .blog-page__list
      Article.blog-page__item(v-for="(article, a) in blog" :key="a" :article="article" :href="`/blog/${article.id}`")
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
      'blog'
    ])
  },
  fetchOnServer: true,
}
</script>

<style lang="scss">
  .blog-page-bg {
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
  .blog-page {
    padding: 150px 0;
    width: 90%;
    margin: 0 auto;
    position: relative;
    
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
    .blog-page-bg {
      background-size: 50%;
    }
  }
</style>