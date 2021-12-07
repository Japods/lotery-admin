import state from "./rewardsState.js";
import mutations from "./rewardsMutation.js";
import actions from "./rewardsAction.js";
import getters from "./rewardsGetter.js";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
