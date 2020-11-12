<template lang="pug">
.article-page-bg
  .article-page(v-if="currentArticle")
    SectionTitle(:title="currentArticle.acf.title")
    .article-page__container
      .article-page__poster-article.poster-article
        .poster-article__img(:style="{'background-image': `url(${currentArticle.acf.primary_image})`}")
        .poster-article__text {{ currentArticle.acf.description }}
      .article-page__content.content
        .content__block(v-for="(block, b) in currentArticle.acf.blocks" :style="{'flex-direction': b % 2 === 0 ? 'row-reverse' : 'row'}")
          .content__img(v-if="block.photo" :style="{'background-image': `url(${block.photo})`}")
          .content__text(v-html="block.text" :class="{'content__text_fullwidth': !block.photo}")
      .article-page__social(v-if="currentArticle.acf.social_link")
        div СМИ о нас
        a(:href="currentArticle.acf.social_link" target="_blank")
          img(:src="currentArticle.acf.social_img")
      Carousel.article-page__gallery.article-page__gallery_desk.gallery(v-if="currentArticle.acf.gallery.length" :slides="currentArticle.acf.gallery" :options="{slidesToShow: 3, slidesToScroll: 1, dots: true, arrows: true}" arrowsStyle="arrows-out arrows-grey")
        template(v-slot:slide="props")
          div.gallery__slide(:style="{'background-image': `url(${props.item.url})`}")
      Carousel.article-page__gallery.article-page__gallery_mob.gallery(v-if="currentArticle.acf.gallery.length" :slides="currentArticle.acf.gallery" :options="{slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: true}" arrowsStyle="arrows-out arrows-grey")
        template(v-slot:slide="props")
          div.gallery__slide(:style="{'background-image': `url(${props.item.url})`}")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SectionTitle from '../../components/SectionTitle'
import Carousel from '../../components/Carousel'

export default {
  name: 'Service',
  components: {
    SectionTitle,
    Carousel
  },
  data() {
    return {
      currentArticle: null,
    }
  },
  computed: {
    ...mapState([
      'articles'
    ])
  },
  methods: {
    ...mapActions([
      'fetchArticles'
    ])
  },
  async fetch() {
    await this.fetchArticles();
    console.log(this.articles)
    this.currentArticle = this.articles.find(item => +item.id === +this.$route.params.id);
  },
  fetchOnServer: true,
}
</script>

<style lang="scss">
  .article-page-bg {
    background-image: url('../../static/triangle_left.png');
    background-repeat: no-repeat;
    background-position: 0 200px;
  }
  .article-page {
    padding: 150px 0;
    width: 90%;
    margin: 0 auto;
    
    &__container {
      width: 80%;
      margin: 0 auto;
    }
    &__poster-article {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content {
      margin: 20px 0;
      p {
        margin: 20px 0;
        font-weight: 400;
      }
    }
    &__social {
      div {
        font-weight: 700;
        color: #939393;
      }
      img {
        max-width: 150px;
        margin-top: 10px;
      }
    }
    &__gallery {
      margin-top: 50px;
      &_desk {
        display: block!important;
      }
      &_mob {
        display: none!important;
      }
    }
    .poster-article {
      &__img {
        width: 35%;
        padding-top: 25%;
        background-size: cover;
        background-position: center;
      }
      &__text {
        font-weight: 700;
        width: 60%;
      }
    }
    .content {
      &__block {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &__img {
        width: 35%;
        padding-top: 20%;
        background-size: cover;
        background-position: center;
      }
      &__text {
        width: 60%;
        &_fullwidth {
          width: 100%;
        }
      }
    }
    .gallery {
      &__slide {
        width: 100%;
        padding-top: 65%;
        background-size: cover;
        margin: 0 auto;
        outline: none;
      }
    }
  }

  @media(max-width: 800px) {
    .article-page-bg {
      background-size: 50%;
      background-position: -50px 212px;
      &:before {
        padding-top: 45%;
        width: 32%;
      }
    }
    .article-page {
      &__poster-article {
        flex-direction: column;
      }
      .poster-article {
        &__img {
          width: 100%;
          padding-top: 75%;
        }
        &__text {
          width: 100%;
        }
      }
      .content {
        &__block {
          flex-direction: column!important;
          margin-top: 20px;
        }
        &__img {
          width: 100%;
          padding-top: 75%;
        }
        &__text {
          width: 100%;
        }
      }
      &__gallery {
        &_desk {
          display: none!important;
        }
        &_mob {
          display: block!important;
        }
      }
    }
  }
</style>