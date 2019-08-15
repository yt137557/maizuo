<template>
  <div>
    登陆一级页面
    <input type="text" />
    <input type="password" />
    <button @click="fn1">点我登陆</button>
  </div>
</template>
<script>
export default {
  methods: {
    fn1 () {
      // 点击按钮就去登陆 跳转到之前想去的那个页面
      window.login = true
      // 1取出之前存在路由信息对象里的路径信息  进行跳转
      let path = ''
      // 判断我的query 里数据对象是否为空
      if (Object.keys(this.$route.query).length === 0) {
        path = '/'
      } else {
        path = this.$route.query.red
      }
      // 2 用localStorage 的方式去拿到path
      // let path = localStorage.getItem("path") || "/"
      this.$router.replace(path)
    }
  }
}
</script>>
