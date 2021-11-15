import state from "./transactionsState.js";
import mutations from "./transactionsMutation.js";
import actions from "./transactionsAction.js";
import getters from "./transactionsGetter.js";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
