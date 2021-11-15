<template>
  <div
    class="history-content mt-8"
    :class="{ centered: GET_GAME_HISTORY.length === 0 }"
  >
    <EmptyState
      :text="'Aun no se han cerrado sorteos'"
      v-if="GET_GAME_HISTORY.length === 0"
    ></EmptyState>
    <div
      v-else
      class="history-element mt-5 w-full"
      v-for="(n, index) in GET_GAME_HISTORY"
      :key="index"
    >
      <div class="top flex">
        <div class="name-sort font-medium">
          {{ n.name }}
        </div>
        <div class="date font-medium">
          {{ n.closing_time | dateFormat }}
        </div>
      </div>
      <div class="bot flex mt-3">
        <div
          class="ball"
          v-for="(n, index) in n.winner.ticket_value"
          :key="index"
        >
          {{ n }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyState from "@/components/EmptyState/EmptyState.vue";
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  props: {},
  components: {
    EmptyState,
  },
  filters: {
    dateFormat(value) {
      return moment(value).format("ll");
    },
  },
  computed: {
    ...mapGetters("games", ["GET_GAME_HISTORY"]),
  },
  mounted() {
    this.getGamesHistory();
  },
  methods: {
    getGamesHistory() {
      const token = this.$store.state.auth.token;
      const autorization = {
        token: token,
      };
      this.$store.dispatch("games/GET_GAME_HISTORY", autorization);
    },
  },
};
</script>

<style lang="scss" scoped>
.history-content {
  color: white;
  overflow: auto;
  height: calc(100vh - 200px);
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.history-element {
  background: linear-gradient(90deg, #fda632 19.24%, #f88b24 44.06%);
  border-radius: 8px;
  height: 103px;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.ball {
  background: #ffffff;
  box-shadow: inset 5px -8px 15px rgb(44 43 43 / 22%);
  border-radius: 50%;
  color: #1b1454;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 18px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.top {
  align-items: center;
  justify-content: space-between;
}

.bot {
  align-items: center;
  justify-content: space-evenly;
}
</style>
