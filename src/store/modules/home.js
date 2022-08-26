import { getWorkAll } from '@/api/home'
export default {
  namespaced: true,
  state: {
    money: ''
  },
  mutations: {
    GETWORKALL(state, totle) {
      state.money = totle
    }
  },
  actions: {
    async getWorkAll({ commit }, params) {
      try {
        const { data } = await getWorkAll(params)
        commit('GETWORKALL', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
