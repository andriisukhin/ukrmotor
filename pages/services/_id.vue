<template lang="pug">
.service-page-bg
  .service-page(v-if="currentService")
    SectionTitle(:title="currentService.title")
    .service-page__container
      .service-page__poster-service.poster-service
        .poster-service__img(:style="{'background-image': `url(${currentService.img})`}")
        .poster-service__text {{ currentService.text }}
      .service-page__content.content
        .content__block(v-for="(block, b) in currentService.blocks" :style="{'flex-direction': b % 2 === 0 ? 'row-reverse' : 'row'}")
          .content__img(v-if="block.photo" :style="{'background-image': `url(${block.photo})`}")
          .content__text(v-html="block.text" :class="{'content__text_fullwidth': !block.photo}")
      .service-page__contacts
        div
          strong Наши контакты:
        div Моб. тел. +38 066 013 1000
        div Адрес: г. Полтава, пр. Шевченко, 20.
</template>

<script>
import { mapState } from 'vuex'
import SectionTitle from '../../components/SectionTitle'

export default {
  name: 'Service',
  components: {
    SectionTitle
  },
  data() {
    return {
      currentService: null,
    }
  },
  computed: {
    ...mapState([
      'services'
    ])
  },
  created() {
    this.currentService = this.services.find(item => item.id === this.$route.params.id);
    // this.currentService = JSON.parse(JSON.stringify(this.services.find(item => item.id === this.$route.params.id)))
  },
  fetchOnServer: true,
}
</script>

<style lang="scss">
  .service-page-bg {
    background-image: url('../../static/triangle_left.png');
    background-repeat: no-repeat;
    background-position: 0 200px;
  }
  .service-page {
    padding: 150px 0 50px;
    width: 90%;
    margin: 0 auto;
    &__container {
      width: 80%;
      margin: 0 auto;
    }
    &__poster-service {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__content {
      p {
        margin: 20px 0;
        font-weight: 400;
      }
    }
    &__contacts {
      margin-top: 50px;
    }
    .poster-service {
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
  }
  @media(max-width: 800px) {
    .service-page-bg {
      background-size: 50%;
      background-position: -50px 212px;
      &:before {
        padding-top: 45%;
        width: 32%;
      }
    }
    .service-page {
      &__poster-service {
        flex-direction: column;
      }
      .poster-service {
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
    }
  }
</style>