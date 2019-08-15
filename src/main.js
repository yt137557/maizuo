import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/styles/base.scss"
import store from "./store/index"
Vue.config.productionTip = false
// 全局设置一个是否登录的flag  判断登录状态
window.login = "false"
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app")
