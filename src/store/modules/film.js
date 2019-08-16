import req from "./../../utinis/anios"

export default {
  namespaced: true,
  state: {
    imglist: []
  },
  getters: {},
  mutations: {
    setlist(state, payload) {
      state.imglist = payload
    }
  },
  actions: {
    getlist(context) {
      req
        .get("?cityId=440300&pageNum=1&pageSize=5&type=1&k=2139792")
        .then(data => {
          let newdat = data.films
          newdat = newdat.map(item => item.poster)
          console.log(newdat)
          context.commit("setlist", newdat)
        })
    }
  }
}
