import  { createStore }  from 'vuex'

const store = createStore({
  state: {
    isShowBack: true
  },
  getters: {
    isShowBack (state) {
      return state.isShowBack
    }
  },
  mutations: {
    setShowBack (state, isShowBack) {
      state.isShowBack = isShowBack
    }
  },
  actions: {},
  modules: {}
})

export default store