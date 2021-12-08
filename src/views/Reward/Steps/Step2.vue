<template>
  <div class="body-content p-16">
    <div class="w-full">
      <div class="winTokens" align="center">
        <span>Has ganado!!!</span><br />
        <div class="flex w-full win-coins" align="center">
          <number
            ref="number1"
            :from="0"
            :format="theFormat"
            :to="GET_REWARD_INFO.given_reward"
            :duration="1"
            easing="Power1.easeOut"
          />
          <br />
        </div>
        Tokens
      </div>
      <span class="label"> Ticket Ganador </span>
      <div class="history-element mt-5 w-full">
        <div class="top flex">
          <div class="name-sort font-medium">
            {{ GET_REWARD_INFO.game.name }}
          </div>
        </div>
        <div class="bot flex mt-3">
          <div
            class="ball"
            :class="{ 'septime-ball': index === 6 }"
            v-for="(n, index) in GET_REWARD_INFO.game.winner.ticket_value"
            :key="index"
          >
            {{ n }}
          </div>
        </div>
      </div>
      <div class="label mt-5 w-full" aling="left">Tickets premiados</div>
      <div class="tickets-scroll mt-2">
        <div v-for="(element, key, index) in total_matchs" :key="index">
          <TicketContainer
            :ticket="element"
            :key="index"
            :selected="false"
          ></TicketContainer>
        </div>
      </div>
      <Button
        class="mt-5"
        :text="'Crear transaccion de retiro'"
        @action="createTransaction"
      ></Button>
      <div
        class="mt-2 white w-full cursor-pointer"
        @click="$emit('goBack')"
        align="center"
      >
        Volver
      </div>
    </div>
  </div>
</template>

<script>
import showNotification from "@/mixins/Notification";
import { mapGetters } from "vuex";
import Button from "@/components/Button/Button.vue";
import TicketContainer from "./TicketContainer.vue";

export default {
  components: {
    Button,
    TicketContainer,
  },
  computed: {
    ...mapGetters("rewards", ["GET_REWARD_INFO"]),
  },
  mixins: [showNotification],
  data() {
    return {
      total_matchs: [],
    };
  },
  mounted() {
    for (const key in this.GET_REWARD_INFO.reward) {
      const value = this.GET_REWARD_INFO.reward[key];
      if (value.length > 0) {
        value.forEach((element) => {
          this.total_matchs.push(element);
        });
      }
    }
  },
  methods: {
    createTransaction() {
      this.$emit("createTransaction");
    },
    theFormat(number) {
      return number.toFixed(2);
    },
  },
};
</script>

<style lang="scss" scoped>
.reclam-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
  color: white;
}

.centered {
  display: flex;
  align-items: center;
  justify-content: center;
}

.history-element {
  background: linear-gradient(90deg, #fda632 19.24%, #f88b24 44.06%);
  border-radius: 8px;
  height: 85px;
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

.win-coins {
  align-items: center;
  justify-content: center;
  font-size: 34px;
  color: #f88b24;
}

label {
  font-size: 12px;
}

.septime-ball {
  background: linear-gradient(
    180deg,
    #00a0cf -1.39%,
    #226cb1 50.32%,
    #443792 100%
  );
  color: white;
}

.tickets-scroll {
  overflow: overlay;
  max-height: calc(100vh - 650px);
  padding-bottom: 100px;
}

.body-content {
  padding-top: 10px !important;
}
</style>
