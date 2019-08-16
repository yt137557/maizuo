<template>
  <div>
    <Banner :list="imglist"></Banner>电影的二级页面
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex"
import Banner from "./../../compoents/banner"
export default {
  components: {
    Banner
  },
  methods: {
    ...mapActions("film", ["getlist"])
  },
  computed: {
    ...mapState("film", ["imglist"])
  },
  created() {
    this.getlist()
  }
}
</script>
<style lang='scss'>
</style>

