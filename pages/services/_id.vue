<template lang="pug">
.service-page-bg
  .service-page(v-if="currentService")
    SectionTitle(:title="currentService.acf.title")
    .service-page__container
      .service-page__poster-service.poster-service
        .poster-service__img(:style="{'background-image': `url(${currentService.acf.primary_image})`}")
        .poster-service__text {{ currentService.acf.description }}
      .service-page__content.content
        .content__block(v-for="(block, b) in currentService.acf.blocks" :style="{'flex-direction': b % 2 === 0 ? 'row-reverse' : 'row'}")
          .content__img(v-if="block.img" :style="{'background-image': `url(${block.img.url})`}")
          .content__text(v-html="block.text" :class="{'content__text_fullwidth': !block.img}")
      .service-page__contacts
        div
          strong Наши контакты:
        div Моб. тел. +38 066 013 1000
        div Адрес: г. Полтава, пр. Шевченко, 20.
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
  methods: {
    ...mapActions([
      'fetchServices'
    ])
  },
  async fetch() {
    await this.fetchServices();
    this.currentService = this.services.find(item => +item.id === +this.$route.params.id);
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

      img {
        width: 70%;
        height: auto;
        display: block;
        margin: 0 auto;
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
        margin: 20px 0;
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
      &__content {
        img {
          width: 100%;
        }
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