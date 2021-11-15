<template>
  <div class="game-container flex flex-col p-10">
    <div class="flex">
      <div class="w-1/3">
        <CountDown v-if="GET_GAME_INFO" :game_info="GET_GAME_INFO"></CountDown>
      </div>
      <div class="statistics w-3/4 flex flex-col pl-5">
        <div class="flex">
          <div class="cube-info">Usuarios Jugando</div>
          <div class="cube-info">Tickets Comprados</div>
          <div class="cube-info">Total Recolectado</div>
          <div class="cube-info">
            <div class="count flex align-center">
              {{ GET_GAME_POOL[0].reward_pool || 0 }}
              <img
                src="@/assets/images/Home/coins.png"
                class="pl-5 pt-1"
                alt=""
                srcset=""
              />
            </div>
            <br />
            Premio 7
          </div>
        </div>
        <div class="flex mt-5">
          <div class="cube-info">
            <div class="count flex align-center">
              {{ GET_GAME_POOL[1].reward_pool || 0 }}
              <img
                src="@/assets/images/Home/coins.png"
                class="pl-5 pt-1"
                alt=""
                srcset=""
              />
            </div>
            <br />
            Premio 6
          </div>
          <div class="cube-info">
            <div class="count flex align-center">
              {{ GET_GAME_POOL[2].reward_pool || 0 }}
              <img
                src="@/assets/images/Home/coins.png"
                class="pl-5 pt-1"
                alt=""
                srcset=""
              />
            </div>
            <br />
            Premio 5
          </div>
          <div class="cube-info">
            <div class="count flex align-center">
              {{ GET_GAME_POOL[3].reward_pool || 0 }}
              <img
                src="@/assets/images/Home/coins.png"
                class="pl-5 pt-1"
                alt=""
                srcset=""
              />
            </div>
            <br />
            Premio 4
          </div>
          <div class="cube-info">
            <div class="count flex align-center">
              {{ GET_GAME_POOL[4].reward_pool || 0 }}
              <img
                src="@/assets/images/Home/coins.png"
                class="pl-5 pt-1"
                alt=""
                srcset=""
              />
            </div>
            <br />
            Premio 3
          </div>
        </div>
      </div>
    </div>
    <div class="flex mt-10">
      <!-- <div class="history w-1/3">
        <span>Historial de sorteos</span>
        <History></History>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CountDown from "./Components/CountDown.vue";

export default {
  components: {
    CountDown,
  },
  computed: {
    ...mapGetters("games", ["GET_GAME_INFO"]),
    ...mapGetters("games", ["GET_GAME_POOL"]),
  },
  mounted() {
    this.getGameActual();
  },
  methods: {
    getGameActual() {
      const token = this.$store.state.auth.token;
      // eslint-disable-next-line prefer-const
      let autorization = {
        token: token,
      };

      this.$store.dispatch("games/GET_GAME_POOL", autorization);
      this.$store.dispatch("games/GET_GAME_STATISTIC", autorization);

      this.$store.dispatch("games/GET_GAME", autorization);
    },
  },
};
</script>

<style lang="scss" scoped>
.cube-info {
  width: calc(100% / 4);
  margin-right: 10px;
  background: #313150;
  height: 140px;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px;
  text-align: center;
}

.count {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.history {
  height: calc(100vh - 450px);
  overflow: auto;
}
</style>
