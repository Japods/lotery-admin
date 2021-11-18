<template>
  <div class="gold-container"  align="center">
    <div class="title-container relative">
      Sorteo Activo <br />
      <span>{{ game_info.name }}</span>
    </div>
    <countdown  v-if="getTimeLap" :time="getTimeLap" :interval="100" tag="p">
      <template slot-scope="props">
        <div class="counter flex px-5" align="center">
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
    <Button
      class="mt-3"
      :btn="'take-button'"
      @action="$emit('action')"
      :text="'Cerrar Sorteo y escoger Ticket Ganador'"
    ></Button>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import moment from "moment";

export default {
  props: ["game_info"],
  computed: {
    getTimeLap() {
      const date = moment(this.game_info.closing_time).diff(moment());
      return Number(date);
    },
  },
  components: {
    Button,
  },
  data: function () {
    return {
      time_close: 0,
    };
  },
  methods: {
    openNewTicket() {
      this.$store.commit("games/SET_OPEN", true);
    },
  },
};
</script>

<style lang="scss" scoped>
.gold-container {
  background: linear-gradient(90deg, #fda632 19.24%, #f88b24 44.06%);
  border-radius: 8px;
  width: 100%;
  height: 25 0px;
  padding-top: 20px;
  padding-bottom: 30px;
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

.counter {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.countdown {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
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

.info-icon {
  position: absolute;
  top: -15px;
  right: 5px;
}

.history-contest {
  font-size: 12px;
  font-weight: 400;
}
</style>
