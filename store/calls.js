import Service from '@/services/Service.js'

export const state = () => ({
  user: null
})
export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    Service.setToken(userData)
  },
  CLEAR_USER_DATA() {
    localStorage.removeItem('user')
    location.reload()
  }
}
export const actions = {
  register({ commit }, registerInfo) {
    return Service.register(registerInfo).then(({ data }) => {
      commit('SET_USER_DATA', data)
    })
  },
  getAdmins({ commit }) {
    return Service.getAdmins()
  }
}
export const getters = {
  userInfo(state) {
    return state.user
  }
}
