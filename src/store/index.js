import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)
import films from "./modules/films"
import user from "./modules/user"

export default new Vuex.Store({
  modules: films,
  users
})
