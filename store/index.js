import Vuex from 'vuex'

export default () => (
  new Vuex.Store({
    status: {
      items: [],
      users: [],
      tags: []
    },
    getters :{
      items : (state) => state.items,
      users : (state) => state.users,
      tags : (state) => state.tags
    },
    mutations: {
      setItems(state,{items}) {
        state.items = items
      },
      setUsers(state,{users}) {
        state.users = users
      },
      setTags(state,{tags} ) {
        state.tags = tags
      },
    },
    actions: {
      async fetchItems({commit}) {
        const items = 
          await this.$axios.$get('')
        commit('setItems',({items}))

      },
      async fetchTags({commit}) {
        const tags = await this.$axios.$get('https://qiita.com/api/v2/tags?sort=count&pre_page=100')
        commit('setTags',({tags}))
    }
  }
}))
