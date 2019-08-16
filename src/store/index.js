import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
import film from "./modules/film"
import user from "./modules/user"

export default new Vuex.Store({
  modules: {
    film,
    user
  }
})
