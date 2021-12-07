import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./auth/auth.js";
import transactions from "./transactions/transactions.js";
import games from "./games/games.js";
import rewards from "./rewards/rewards.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    transactions,
    games,
    rewards,
  },
  plugins: [createPersistedState()],
});
