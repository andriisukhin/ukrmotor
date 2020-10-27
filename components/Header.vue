<template lang="pug">
  header.header
    nuxt-link.header__logo(to='/')
      img(src="../static/logo.png")
      span УКРМОТОР
    .header__mob-menu.header__mob-menu_desk
      ul.header__menu
        li
          nuxt-link(to="/services") Товары  и услуги
        li
          nuxt-link(to="/blog") Блог
        li
          nuxt-link(to="/photo") Фото
      .header__phone
        img(src="../static/vodafon.png")
        a(href="tel:+380660131000") 066 013 1000 
    .header__mob-menu.header__mob-menu_mob(v-if="menuShow")
      ul.header__menu
        li
          nuxt-link(to="/services" @click="menuShow = false") Товары  и услуги
        li
          nuxt-link(to="/blog" @click="menuShow = false") Блог
        li
          nuxt-link(to="/photo" @click="menuShow = false") Фото
      .header__phone
        img(src="../static/vodafon.png")
        a(href="tel:+380660131000") 066 013 1000
    button.header__burger.burger(type="button" @click="menuShow = !menuShow")
      .burger__line
      .burger__line
      .burger__line
    
</template>

<script>
export default {
  name: "HeaderBlock",
  data() {
    return {
      menuShow: false,
    }
  },
  // created() {
  //   this.menuShow = false;
  // },
  watch: {
    '$route': {
      handler() {
        this.menuShow = false
      }
    }
  }
}
</script>

<style lang="scss">
  .header {
    background: #fff;
    padding: 15px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 1px 1px 8px 0px rgba(0,0,0,.2);
    &__logo {
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
        font-weight: 700;
      }
    }
    &__phone {
      display: flex;
      align-items: center;
      img {
        max-width: 20px;
      }
      a {
        margin-left: 20px;
      }
    }
    &__mob-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &_desk {
        display: flex;
      }
      &_mob {
        display: none;
      }
    }
    &__menu {
      appearance: none;
      display: flex;
      justify-content: space-between;
      li {
        appearance: none;
        display: block;
        margin: 0 30px;
      }
    }
    &__burger {
      display: none;
      width: 30px;
      height: 20px;
      flex-direction: column;
      justify-content: space-between;
      padding: 0;
      box-shadow: 0;
      border: 0;
      background: none;
      appearance: none;
      outline: none;
      .burger__line {
        width: 30px;
        height: 4px;
        background-color: #0097ff;
      }
    }
  }

  @media(max-width: 1200px) {
    .header {
      font-size: 16px;
    }
  }

  @media(max-width: 800px) {
    .header {
      height: 60px;
      font-size: 22px;
      &__mob-menu {
        position: fixed;
        background: #fff;
        top: 60px;
        left: 0;
        width: 100%;
        height: calc(100% - 60px);
        flex-direction: column;
        justify-content:  center;
        &_mob {
          display: flex;
        }
        &_desk {
          display: none;
        }
      }
      &__menu {
        flex-direction: column;
        align-items: center;
        padding: 0;
        li {
          margin: 10px 0;
        }
      }
      &__phone {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%)
      }
      &__burger {
        display: flex;
      }
    }
  }
</style>