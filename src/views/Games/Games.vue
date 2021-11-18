<template>
  <div class="game-container flex flex-col p-10">
    <div class="flex">
      <div class="w-1/3">
        <CountDown
          @action="closeGame = true"
          v-if="GET_GAME_INFO"
          :game_info="GET_GAME_INFO"
        ></CountDown>
      </div>
      <div class="statistics w-3/4 flex flex-col pl-5">
        <div class="flex">
          <div class="cube-info">
            <div class="count flex align-center">
              {{ GET_GAME_STATISTIC.users }}
            </div>
            <br />
            Usuarios Jugando
          </div>
          <div class="cube-info">
            <div class="count flex align-center">
              {{ GET_GAME_STATISTIC.tickets }}
            </div>
            <br />
            Tickets Comprados
          </div>
          <div class="cube-info">
            <div class="count flex align-center">
              {{ GET_GAME_STATISTIC.money }}
              <img
                src="@/assets/images/Home/coins.png"
                class="pl-5 pt-1"
                alt=""
                srcset=""
              />
            </div>
            <br />
            Total Recolectado
          </div>
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
    <div class="flex mt-32 justify-center" v-if="closeGame">
      <div class="selector w-full flex flex-col" align="center">
        <div class="title-container">Escoger Ticket Ganador</div>
        <div class="flex w-full input-container" align="center">
          <div class="item-win">
            <input
              type="text"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              class="input-number"
              maxlength="2"
              v-model="number_1"
              :class="{ 'input-full': number_1.length > 0 }"
            />
          </div>
          <div class="item-win">
            <input
              type="text"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              class="input-number"
              maxlength="2"
              v-model="number_2"
              :class="{ 'input-full': number_2.length > 0 }"
            />
          </div>
          <div class="item-win">
            <input
              type="text"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              class="input-number"
              maxlength="2"
              v-model="number_3"
              :class="{ 'input-full': number_3.length > 0 }"
            />
          </div>
          <div class="item-win">
            <input
              type="text"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              class="input-number"
              maxlength="2"
              v-model="number_4"
              :class="{ 'input-full': number_4.length > 0 }"
            />
          </div>
          <div class="item-win">
            <input
              type="text"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              class="input-number"
              maxlength="2"
              v-model="number_5"
              :class="{ 'input-full': number_5.length > 0 }"
            />
          </div>
          <div class="item-win">
            <input
              type="text"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              class="input-number"
              maxlength="2"
              v-model="number_6"
              :class="{ 'input-full': number_6.length > 0 }"
            />
          </div>
          <div class="item-win">
            <input
              type="text"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              class="input-number"
              maxlength="2"
              v-model="number_7"
              :class="{ 'input-full': number_7.length > 0 }"
            />
          </div>
        </div>
        <Button
          class="mt-3"
          @action="setWinner"
          :btn="'take-button'"
          :text="'Confirmar'"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CountDown from "./Components/CountDown.vue";
import Button from "@/components/Button/Button.vue";
import showNotification from "@/mixins/Notification";

export default {
  components: {
    CountDown,
    Button,
  },
  mixins: [showNotification],
  computed: {
    ...mapGetters("games", ["GET_GAME_INFO"]),
    ...mapGetters("games", ["GET_GAME_POOL"]),
    ...mapGetters("games", ["GET_GAME_STATISTIC"]),
  },
  data: function () {
    return {
      closeGame: false,
      number_1: "",
      number_2: "",
      number_3: "",
      number_4: "",
      number_5: "",
      number_6: "",
      number_7: "",
      seven: [],
    };
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
        game_id: this.GET_GAME_INFO._id,
      };

      this.$store.dispatch("games/GET_GAME_POOL", autorization);
      this.$store.dispatch("games/GET_GAME_STATISTIC", autorization);

      this.$store.dispatch("games/GET_GAME", autorization);
    },
    setWinner() {
      if (
        Number(this.number_1) > 49 ||
        Number(this.number_2) > 49 ||
        Number(this.number_3) > 49 ||
        Number(this.number_4) > 49 ||
        Number(this.number_5) > 49 ||
        Number(this.number_6) > 49
      ) {
        return this.showNotification(
          "Las posiciones del 1 al 6, son maximo del 1-49"
        );
      }

      if (Number(this.number_1) > 99) {
        return this.showNotification("La posicion 7, es desde 1 - 99");
      }

      this.seven.push(Number(this.number_1));
      this.seven.push(Number(this.number_2));
      this.seven.push(Number(this.number_3));
      this.seven.push(Number(this.number_4));
      this.seven.push(Number(this.number_5));
      this.seven.push(Number(this.number_6));
      this.seven.push(Number(this.number_7));

      const token = this.$store.state.auth.token;

      let autorization = {
        token: token,
        game_id: this.GET_GAME_INFO._id,
        seven: this.seven,
      };

      this.$store.dispatch("games/SET_WINNER", autorization).then(() => {
        this.seven = [];
        this.closeGame = false;
        this.showNotification("Ticket ganador generado correctamente");
        this.$store.dispatch("games/GET_GAME", autorization);
      });
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

.input-number {
  background: rgba(230, 204, 170, 0.61);
  box-shadow: inset 0px 4px 4px rgb(0 0 0 / 25%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  text-align: center;
}

.selector {
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  background: $gold-gradient;
  height: 200px;
  border-radius: 10px;
  align-items: center;
}

.input-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}

.title-container {
  font-size: 32px;
  font-weight: 500;
}

.take-button {
  background: linear-gradient(
    180deg,
    #00a0cf -1.39%,
    #226cb1 50.32%,
    #443792 100%
  );
  border-radius: 10px;
}

.input-full {
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
  text-align: center;
}
</style>
