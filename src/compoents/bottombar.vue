<template>
  <ul class="ulbox">
    <li v-for="item in list" :key="item.id">
      <router-link :to="item.href">
        <i class="iconfont" :class="[item.icon]"></i>
        <span>{{item.name}}</span>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    list: Array
  }
}
</script>
<style  lang='scss'>
@import "~./../../assets/styles/common/minxi.scss";
.ulbox {
  display: flex;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  @include border-top;
  li {
    flex: 1;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #797d82;

    &.router-link-active {
      color: #ff5f16;
    }
  }
  .iconfont {
    font-size: 22px;
  }
}
</style>
