<template>
  <div class="homebox">
    <router-view></router-view>
    <bottombar :list="info"></bottombar>
  </div>
</template>
<script>
import bottombar from './../../compoents/bottombar'
export default {
  data () {
    return {
      info: [
        { id: 1, name: '电影', icon: 'icon-dianyingyuan', href: '/films' },
        { id: 2, name: '影院', icon: 'icon-yingyuana', href: '/cinemas' },
        { id: 3, name: '特惠', icon: 'icon-zaochuntehui-', href: '/jingtong' },
        { id: 4, name: '我的', icon: 'icon-wode', href: '/center' }
      ]
    }
  },
  components: {
    bottombar
  }
}
</script>
<style lang='scss'>
.homebox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  > div:first-child {
    flex: 1;
  }
}
</style>
