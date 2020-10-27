<template lang="pug">
  footer.footer
    .footer__container
      img.footer__map(:src="map")
      .footer__content
        .footer__title Контакты
        .footer__contacts
          .footer__contact.contact
            img(:src="phone")
            .contact__text
              strong Менеджер по продажам 
              span Моб.тел. 
              a(href="tel:+380660131000")
                strong 066 013 1000 
              span (МТС)
          .footer__address.address
            img(:src="marker")
            .address__text Украина, Полтавская область, г. Полтава, пер. Шевченко, 20
          .footer__social
            a(href="#")
              img(:src="youtube")
            a(href="#")
              img(:src="instagram")
            a(href="#")
              img(:src="facebook")

</template>

<script>
import marker from '../static/marker.svg'
import phone from '../static/phone.svg'
import youtube from '../static/youtube.svg'
import instagram from '../static/instagram.svg'
import facebook from '../static/facebook.svg'
import map from '../static/map.png'

export default {
  name: 'Footer',
  data() {
    return {
      marker: marker,
      phone: phone,
      youtube: youtube,
      instagram: instagram,
      facebook: facebook,
      map: map
    }
  }
}
</script>

<style lang="scss">
  .footer {
    padding: 50px 0;
    background: #0097ff;
    &__container {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__map {
      max-width: 45%;
      max-height: 300px;
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      color: #fff;
      width: 45%;
    }
    &__title {
      font-size: 24px;
      font-weight: 700;
      margin: 20px 0;
    }
    &__contact {
      display: flex;
      align-items: center;
      img {
        max-width: 30px;
      }
      a {
        color: #fff;
      }
    }
    &__address {
      display: flex;
      align-items: center;
      margin-top: 20px;
      img {
        max-width: 30px;
      }
    }
    &__social {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      a {
        display: block;
      }
      img {
        width: 50px;
      }
    }
  }

  .contact {
    &__text {
      margin-left: 20px;
    }
  }

  .address {
    &__text {
      margin-left: 20px;
    }
  }

  @media(max-width: 800px) {
    .footer {
      &__container {
        flex-direction: column-reverse;
      }
      &__map {
        width: 100%;
        max-width: 100%;
        margin-top: 20px;
      }
      &__content {
        width: 100%;
      }
    }
  }
</style>