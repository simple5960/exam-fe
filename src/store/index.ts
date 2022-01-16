import { createStore } from 'vuex'

export default createStore({
  state: {
    userId: 'undefined'
  },
  mutations: {
    generateUserId(state, str) {
      state.userId = str;
    }
  },
  actions: {
  },
  modules: {
  }
})
