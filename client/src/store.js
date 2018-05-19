import Vue from 'vue'
import Vuex from 'vuex'
import List from '@/components/List.vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
    card: null
  },
  mutations: {
    addCards(state, value) {
      state.cards = value
    },
    editCard(state, value) {
      state.card = value
    }
  },
})
