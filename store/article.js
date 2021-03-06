import api from '../api'

const state = () => ({
  list: {
    data: []
  },
  hot: [],
  item: {}
})

const mutations = {
  GET_LIST(state, action) {
    state.list = action
  },

  GET_HOT_LIST(state, action) {
    state.hot = action
  },
  GET_ITEM(state, action) {
    state.item = action
  },
  GET_SEARCH_LIST(state, action) {
    state.list = action
  }
}

const actions = {
  async getList({ commit }, params) {
    const res = await api.article.getList(params)
    commit('GET_LIST', res)
  },

  async getHotList({ commit }) {
    const res = await api.article.getList({ hot: 1 })
    commit('GET_HOT_LIST', res.data)
  },

  async getItem({ commit }, id) {
    const res = await api.article.getItem(id)
    commit('GET_ITEM', res)
  },

  async getSearchList({ commit }, params) {
    const res = await api.article.getList(params)
    commit('GET_SEARCH_LIST', res)
  }
}

export { state, mutations, actions }
