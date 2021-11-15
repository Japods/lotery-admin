import state from './gamesState.js'
import mutations from './gamesMutation.js'
import actions from './gamesAction.js'
import getters from './gamesGetter.js'

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
