import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    year: 2020
  },
  mutations: {
    setYear (state, year) {
      state.year = year
    }
  },
  actions: {

  }
})
