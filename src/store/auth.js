import router from '../router'
import axios from 'axios'

export default {
  namespaced: true,

  state: {
    authenticated: false,
    user: {},
  },

  getters: {
    authenticated(state) {
      return state.authenticated
    },

    user(state) {
      return state.user
    }
  },

  mutations: {
    SET_AUTHENTICATED(state, value) {
      state.authenticated = value
    },
    SET_USER(state, value) {
      state.user = value
    },
    SET_USER_TOKEN(state, value) {
      state.user.token = value
    }
  },

  actions: {
    login({commit}, data) {
      let token = data.token

      commit('SET_USER', data.user)
      commit('SET_USER_TOKEN', token)
      commit('SET_AUTHENTICATED', true)
      router.push({name: 'home'})
    },
    logout({commit}) {
      commit('SET_USER', {})
      commit('SET_AUTHENTICATED', false)
    },
    reloadUser({commit}, token) {
      return axios.create({
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      }).get('http://127.0.0.1:8000/api/user').then(({data}) => {
        commit('SET_USER', data)
        commit('SET_USER_TOKEN', token)
      }).catch(() => {
        commit('SET_USER', {})
        commit('SET_AUTHENTICATED', false)
      })
    }
  }
}