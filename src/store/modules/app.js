
const app = {
  state: {
    userName: '张三'
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.userName = name
    }
  },
  actions: {
    setName ({ commit }, name) {
      commit('SET_NAME', name)
    }
  }
}

export default app
