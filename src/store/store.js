import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import actions from './actions.js'
import mutations from './mutations.js'

Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  actions,
  mutations
})
