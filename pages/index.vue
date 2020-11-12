<template lang="pug">
  main
    section.poster
      .poster__content ООО "УКРМОТОР" предлагает Вам большой выбор общепромышленных, крановых, взрывозащищенных и других типов электродвигателей
      .poster__contacts
        GreenButton(:imgUrl="phone" href="tel:+380660131000")
        GreenButton(:imgUrl="email" href="tel:+380660131000")
    section.services(v-if="services && services.length")
      .services__container
        ul.services__list
          li.services__item( v-for="service in services.slice(0,5)")
            nuxt-link.services__link(:to="`/services/${service.id}`")
              img(:src="service.acf.link_image")
              span {{ service.acf.title }}
    section.about(v-if="general && general.about")
      .about__container
        SectionTitle(title="О нас")
        .about__content(v-html="general.about")
    section.advantages(v-if="general && general.advantages")
      .advantages__title Преимущества работы с нами
      ul.advantages__list
        li.advantages__item(v-for="(adv, a) in general.advantages")
          .advantages__count
            span {{ a + 1 }}
          .advantages__description {{ adv.text }}
    section.gallery(v-if="gallery && gallery.length")
      .gallery__title
        SectionTitle(title="Фото")
      Carousel.gallery__slider.gallery__slider_desk(:slides="gallery" :options="{ slidesToShow: 4, slidesToScroll: 4, dots: true, arrow: true}")
        template(v-slot:slide="props")
          div.gallery__slide(:style="{'background-image': `url(${props.item})`}")
      Carousel.gallery__slider.gallery__slider_mob(:slides="gallery" :options="{ slidesToShow: 1, slidesToScroll: 1, dots: true, arrow: true}")
        template(v-slot:slide="props")
          div.gallery__slide(:style="{'background-image': `url(${props.item})`}")
      .gallery__btn-container
        RouterButton.gallery__btn(href="/photo")
    section.testimonials(v-if="general && general.testimonials")
      .testimonials__title Отзывы
      Carousel.testimonials__slider.testimonials__slider_desk(:slides="general.testimonials", :options="{ slidesToShow: 3, slidesToScroll: 1, dots: false, arrow: true }", arrowsStyle="arrows-out")
        template(v-slot:slide="props")
          div.testimonials__slide
            .testimonials__logo
              img(:src="props.item.logo")
            .testimonials__name {{ props.item.name }}
            .testimonials__raiting
              img.testimonials__star(:src="startFilled" v-for="s in +props.item.raiting")
              img.testimonials__star(:src="starStroked" v-for="s in (5 - +props.item.raiting)")
            p {{ props.item.text }}
      Carousel.testimonials__slider.testimonials__slider_mob(:slides="general.testimonials", :options="{ slidesToShow: 1, slidesToScroll: 1, dots: false, arrow: true }", arrowsStyle="arrows-out")
        template(v-slot:slide="props")
          div.testimonials__slide
            .testimonials__logo
              img(:src="props.item.logo")
            .testimonials__name {{ props.item.name }}
            .testimonials__raiting
              img.testimonials__star(:src="startFilled" v-for="s in props.item.raiting")
              img.testimonials__star(:src="starStroked" v-for="s in (5 - props.item.raiting)")
            p {{ props.item.text }}
    section.blog
      .blog__container
        SectionTitle(title="Блог")
        .blog__list(v-if="articles && articles.length")
          Article.blog__item(v-for="(article, a) in articles.slice(0, 3)" :key="a" :article="article" :href="`/blog/${article.id}`")
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import GreenButton from '../components/GreenButton';
import SectionTitle from '../components/SectionTitle';
import Carousel from '../components/Carousel';
import RouterButton from '../components/RouterButton';
import Article from '../components/Article';
import phone from '../static/phone.svg';
import email from '../static/email.svg';
import star_filled from '../static/star_filled.svg';
import star_stroked from '../static/star_stroked.svg';

export default {
  name: 'Main',
  components: {
    GreenButton,
    SectionTitle,
    Carousel,
    RouterButton,
    Article
  },
  data() {
    return {
      phone: phone,
      email: email,
      startFilled: star_filled,
      starStroked: star_stroked
    }
  },
  computed: {
    ...mapState([
      'services',
      'about',
      'advantages',
      'gallery',
      'testimonials',
      'articles',
      'general'
    ])
  },
  methods: {
    ...mapActions([
      'fetchServices',
      'fetchArticles',
      'fetchGallery',
      'fetchGeneral'
    ])
  },
  async fetch() {
    await this.fetchServices();
    await this.fetchArticles();
    await this.fetchGallery();
    await this.fetchGeneral();
  },
  fetchOnServer: true,
}
</script>

<style lang="scss">
  .poster {
    padding: 0 20vw;
    background-image: url('../static/poster.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(#0c1a40,.5)
    }
    &__content {
      font-weight: 500;
      color: #fff;
      font-size: 46px;
      text-align: center;
      z-index: 1;
    }
    &__contacts {
      z-index: 1;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 15vw;
      a {
        &:last-child {
          margin-top: 20px;
        }
      }
    }
  }
  .services {
    background-image: url('../static/triangle_left.png');
    background-repeat: no-repeat;
    background-position: -120px 0px;
    background-size: 20%;
    padding-top: 50px;
    &__container {
      margin: 0 auto;
      width: 90%;
    }
    &__list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      width: 100%;
      margin: 0 auto;
      max-width: 1120px;
    }
    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 50%;
      padding: 20px;
      box-shadow: 1px 1px 15px 0px rgba(0,0,0,.2);
      width: 200px;
      height: 200px;
      background: #fff;
    }
    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        max-height: 100px
      }
      span {
        font-weight: 700;
      }
    }
  }

  .about {
    padding: 70px 0 100px;
    position: relative;
    overflow: hidden;
    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      right: -5%;
      width: 20%;
      padding-top: 18%;
      background-image: url('../static/triangle_right.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__container {
      width: 86%;
      margin: 0 auto; 
    }
    &__content {
      padding-top: 20px;
      margin: 0 auto;
      width: 80%;
      p {
        font-weight: 500;
        margin: 20px 0;
      }
    }
  }

  .advantages {
    padding: 50px 0;
    color: #fff;
    background: #0097ff;
    &__title {
      font-size: 24px;
      font-weight: 700;
      text-align: center;
    }
    &__list {
      padding: 50px 0 0 0;
      max-width: 1120px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
    }
    &__count {
      width: 120px;
      height: 120px;
      background: #fff;
      border-radius: 50%;
      position: relative;
      span {
        color: #0097ff;
        position: absolute;
        right: 12px;
        bottom: 0;
        font-size: 100px;
        line-height: 100px;
        font-weight: 900;
      }
    }
    &__description {
      text-align: center;
      margin-top: 15px;
    }
  }

  .gallery {
    padding: 50px 0;
    position: relative;
    &:before {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 20%;
      padding-top: 18%;
      background-image: url('../static/triangle_left.png');
      background-repeat: no-repeat;
      background-size: cover;
    }

    &__title {
      width: 90%;
      margin: 0 auto;
    }
    &__slider {
      margin-top: 50px;
      &_desk {
        display: block!important;
      }
      &_mob {
        display: none!important;
      }
    }
    &__slide {
      width: 90%;
      padding-top: 66%;
      background-size: cover;
      margin: 0 auto;
      outline: none;
    }
    &__btn-container {
      text-align: center;
    }
    &__btn {
      margin-top: 50px;
    }

  }
  
  .testimonials {
    background: #0097ff;
    padding-bottom: 80px;
    &__title {
      font-size: 24px;
      font-weight: 700;
      text-align: center;
      padding: 50px 0;
    }
    &__slider {
      max-width: 80%;
      margin: 0 auto;
      &_desk {
        display: block!important;
      }
      &_mob {
        display: none!important;
      }
    }
    &__slide {
      width: 90%;
      min-height: 400px;
      margin: 0 auto;
      background: #fff;
      position: relative;
      margin-top: 70px;
      text-align: center;
      padding: 20px;
    }
    &__logo {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 140px;
      height: 140px;
      background: #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        max-width: 100px;
      }
    }
    &__name {
      padding-top: 50px;
      text-transform: uppercase;
      font-weight: 500;
    }
    &__raiting {
      display: flex;
      justify-content: center;
      margin: 10px 0;
    }
    &__star {
      max-width: 20px;
    }
  }

  .blog {
    padding: 50px 0;
    overflow: hidden;
    
    &::before {
      position: absolute;
      content: '';
      bottom: 0;
      right: 0%;
      width: 20%;
      padding-top: 18%;
      background-image: url('../static/triangle_right.png');
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__container {
      width: 90%;
      margin: 0 auto;
    }
    &__list {
      margin-top: 50px;
    }
    &__item {
      margin-top: 50px;
    }
  }

  @media(max-width: 1200px) {
    .poster {
      &__contacts {
        right: 10vw;
      }
    }
    .services {
      &__item {
        width: 170px;
        height: 170px;
      }
      &__link {
        img {
          max-height: 80px;
        }
      }
    }
  }
  @media(max-width: 800px) {
    section {
      overflow: hidden;
    }
    .poster {
      padding: 0 10vw;
      &__content {
        font-size: 22px;
      }
      &__contacts {
        display: flex;
        top: auto;
        bottom: 30px;
        right: 50%;
        transform: translateX(50%)
      }
      a {
        margin: 0 10px;
        &:last-child {
          margin-top: 0;
        }
      }
    }
    .services {
      overflow: visible;
      &__list {
        flex-direction: column;

      }
      &__item {
        margin-top: 20px;
      }
    }
    .advantages {
      &__list {
        flex-direction: column;
        align-items: center;
      }
      &__item {
        margin-top: 20px;
      }
    }

    .gallery {
      &__slider {
        &_desk {
          display: none!important;
        }
        &_mob {
          display: block!important;
        }
      }
      &:before {
        display: none;
      }
    }
    .testimonials {
      &__slider {
        &_desk {
          display: none!important;
        }
        &_mob {
          display: block!important;
        }
      }
    }

    .blog {
      &:before {
        width: 28%;
        padding-top: 50%;
      }
    }
  }
</style>
