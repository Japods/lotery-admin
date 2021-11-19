<template>
  <div class="counter-container flex py-12" id="counter" align="center">
    <div class="first-image relative w-1/3 hidden lg:block">
      <img src="@/assets/images/Landing/coin.png" alt="" />
    </div>
    <div class="counter flex flex-col lg:w-1/3 w-full">
      <countdown v-if="getTimeLap" :time="getTimeLap" :interval="100" tag="p">
        <template slot-scope="props">
          <div class="counter flex lg:px-5" align="center">
            <div class="countdown flex-column" v-if="props.days >= 1">
              {{ props.days }} :
              <div class="indicator">Dias</div>
            </div>
            <div class="countdown flex-column">
              {{ props.hours }} :
              <div class="indicator">Horas</div>
            </div>
            <div class="countdown flex-column">
              {{ props.minutes }}
              <div class="indicator">Minutos</div>
            </div>
            <div class="countdown flex-column" v-if="props.days < 1">
              : {{ props.seconds }}
              <div class="indicator">Segundos</div>
            </div>
          </div>
        </template>
      </countdown>
      <div class="participate mt-10 cursor-pointer" @click="goToApp()">
        Participar
      </div>
    </div>
    <div class="second-image relative w-1/3 hidden lg:block">
      <img src="@/assets/images/Landing/image-lotery.png" alt="" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import moment from "moment";

export default {
  components: {},
  computed: {
    ...mapGetters("games", ["GET_GAME_INFO"]),
    getTimeLap() {
      const date = moment(this.GET_GAME_INFO.closing_time).diff(moment());
      return Number(date);
    },
  },
  mounted() {
    this.$store.dispatch("games/GET_GAME");
  },
  methods: {
    goToApp() {
      window.open("https://app.sevenplay.io", "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.counter-container {
  background: linear-gradient(90deg, #fda632 19.24%, #f88b24 44.06%);
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.countdown {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  margin-left: 20px;
  margin-right: 20px;
}

.indicator {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}

.title-container {
  font-size: 32px;
  font-weight: 500;
}

.counter {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.participate {
  background: linear-gradient(
    180deg,
    #00a0cf -1.39%,
    #226cb1 50.32%,
    #443792 100%
  );
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 261px;
  height: 69px;
  border-radius: 6px;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
