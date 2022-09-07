import router from '@/router/index'
import { asyncRoutes, constantRoutes } from '@/router/index'
const state = {
  routes: constantRoutes
}
const mutations = {
  setRoutes(state, matchRouter) {
    state.routes = [...constantRoutes, ...matchRouter]
  }
}
const actions = {
  fifterRoutes({ commit }, menus) {
    const routes = asyncRoutes.filter(ele => menus.includes(ele.meta.id))
    commit('setRoutes', routes)
    // 添加路由
    router.addRoutes([...routes, { path: '*', redirect: '/404', hidden: true }])
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
