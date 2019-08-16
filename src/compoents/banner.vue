<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in list" :key="item.index">
        <img :src="item" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" v-if="pagination"></div>

    <!-- 如果需要导航按钮  使用v-if 绑定查看是否需要前后按钮-->
    <template v-if="navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>
  </div>
</template>
<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import { type } from "os"
import { truncate } from "fs"

export default {
  props: {
    list: Array,
    pagination: {
      type: Boolean,
      default: true
    },
    navigation: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    intiSwiper() {
      new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: this.pagination
          ? {
              el: ".swiper-pagination"
            }
          : {},
        // 如果需要前进后退按钮
        navigation: this.navigation
          ? {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          : {}
      })
    }
  },
  updated() {
    this.intiSwiper()
  }
}
</script>

<style lang='scss'>
.swiper-container {
  height: 210px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    // vertical-align: middle;
  }
}
</style>>
