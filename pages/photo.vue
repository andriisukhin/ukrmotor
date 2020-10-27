<template lang="pug">
.photo-page-bg
  div.photo-page
    SectionTitle(title="Фото")
    Carousel.photo-page__slider.photo-page__slider_desk(:slides="allPhotos" :options="{slidesToShow: 1, slidesToScroll: 1, dots: true, arrow: true}", arrowsStyle="arrows-out arrows-grey")
      template(v-slot:slide="props")
        div.photo-page__slide
          .photo-page__photo(v-for="photo in props.item" :style="{'background-image': `url(${photo})`}")
    Carousel.photo-page__slider.photo-page__slider_mob(:slides="gallery" :options="{slidesToShow: 1, slidesToScroll: 1, dots: true, arrow: true}")
      template(v-slot:slide="props")
        .photo-page__photo(:style="{'background-image': `url(${props.item})`}")
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Carousel from '../components/Carousel'
import SectionTitle from '../components/SectionTitle'

export default {
  name: 'Photo',
  components: {
    Carousel
  },
  computed: {
    ...mapGetters([
      'allPhotos',
      'SectionTitle'
    ]),
    ...mapState([
      'gallery'
    ])
  },
  fetchOnServer: true,
}
</script>

<style lang="scss">
  .photo-page-bg {
    background-image: url('../static/triangle_left.png');
    background-repeat: no-repeat;
    background-position: 0 200px;
    &::before {
      position: absolute;
      content: '';
      bottom: 5vh;
      right: 0;
      width: 20%;
      padding-top: 25%;
      background-image: url('../static/triangle_right.png');
      background-repeat: no-repeat;
      background-size: cover;
      
    }
  }
  .photo-page {
    padding: 150px 0;
    width: 90%;
    margin: 0 auto;
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
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 0 0 4%;
    }
    &__photo {
      width: 30%;
      background-size: cover;
      padding-top: 20%;
      margin-top: 20px;
      margin-right: 3%;
      &:nth-child(3n) {
        margin-right: 0
      }
    }
  }

  @media(max-width: 800px) {
    .photo-page-bg {
      background-size: 50%;
    }
    .photo-page {
      &__slider {
        &_desk {
          display: none!important;
        }
        &_mob {
          display: block!important;
        }
      } 
      &__photo {
        width: 90%;
        margin: 0 auto;
        background-size: cover;
        padding-top: 75%;
      }
    }
  }
</style>