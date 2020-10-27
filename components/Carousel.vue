<template lang="pug">
  VueSlickCarousel(
    :class="arrowsStyle"
    ref="carousel"
    v-bind="options"
    )
    div(v-for="slide in slides")
      slot(name="slide" :item="slide")
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  name: 'Carousel',
  components: {
    VueSlickCarousel,
  },
  props: {
    slides: { type: Array, required: true },
    options: { type: Object, required: true },
    arrowsStyle: { type: String, default: '' },
  },
}
</script>

<style lang="scss">
  .slick-dots {
    display: flex!important;
    padding: 0;
    justify-content: center;
    margin-top: 50px;
    li {
      display: block;
      margin: 0 5px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #c8c8c8;
      button {
        display: none
      }
    }
    .slick-active {
      background: #0097ff;
    }
  }
  .slick-arrow {
    position: absolute;
    z-index: 1;
    top: 40%;
    transform: translate(0, -50%);
    font-size: 0;
    appearance: none;
    background: none;
    outline: none;
    box-shadow: none;
    border: none;
    cursor: pointer;
    transition: transform .3s ease;
  }
  .slick-prev {
    left: 40px;
    &:before {
      content: url('../static/arrow-prev.png');
      width: 20px;
    }
    &:active {
      transform: translate(-10px, -50%);
    }
  }
  .slick-next {
    right: 40px;
    &:before {
      content: url('../static/arrow-next.png');
      width: 20px;
    }
    &:active {
      transform: translate(10px, -50%);
    }
  }
  .slick-slide {
    border: 0!important;
    outline: none!important;
    * {
      border: 0!important;
      outline: none!important;
    }
  }
  .arrows-out {
    .slick-arrow {
      top: 50%;
    }
    .slick-prev {
      left: -50px;
    }
    .slick-next {
      right: -50px;
    }
  }
  .arrows-grey {
    .slick-next {
      &:before {
        content: url('../static/grey-arrow-right.png');
        transform: rotate(180deg);
      }
      &:hover {
        &:before {
          content: url('../static/blue-arrow-right.png');
        }
      }
    }
    .slick-prev {
      &:before {
        content: url('../static/grey-arrow-left.png');
        transform: rotate(180deg);
      }
      &:hover {
        &:before {
          content: url('../static/blue-arrow-left.png');
        }
      }
    }
  }
</style>