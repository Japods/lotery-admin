<template>
  <div>
    <section
      class="contest-content"
      :style="{ top: GET_OPEN ? '5vh' : '120vh' }"
    >
      <div class="background" @click="closeContest"></div>
      <section class="view-content">
        <div class="header-contest p-5">
          <div class="top">
            <!-- <img
              src="@/assets/images/Auth/balls-login.png"
              height="31"
              width="38"
              alt=""
              srcset=""
              class="mr-3"
            /> -->
            <span v-if="!multi">Selecciona 7 numeros</span>
            <span v-else>Generar ticket aleatorio</span>

            <span v-ripple class="icon" @click="closeContest">
              <x-icon
                size="1.2x"
                class="custom-class cursor-pointer rounded-full"
              ></x-icon>
            </span>
          </div>

          <!-- HEADER TICKET TEMPLATE -->
          <div v-if="!multi" class="selecteds mt-5">
            <div
              class="item-ticket flex items-center justify-center"
              v-for="(n, index) in 7"
              :key="index"
            >
              <div
                @click="deselect(selected[n - 1])"
                class="ball w-full cursor-pointer h-full"
                v-if="
                  selected[n - 1] > 0 &&
                  deselected.indexOf(selected[n - 1]) == -1
                "
              >
                {{ selected[n - 1] }}
              </div>
            </div>
          </div>
          <!-- HEADER TICKET TEMPLATE -->
        </div>
        <div v-if="!loading" ref="contest" class="numbers-selected">
          <div class="select-content">
            <GenerateTicket
              class="animate"
              :style="{
                'margin-left': multi ? '-100%' : '',
              }"
              @multi="multi = $event"
              @select="selectNumber($event)"
              @deselect="deselect($event)"
              @send="sendSeven()"
              :selected="selected"
            />
          </div>

          <div
            @click="sendSeven()"
            class="
              mt-10
              primary
              no-margin
              sm
              relative
              overflow-hidden
              cursor-pointer
              mx-auto
              font-medium
              flex
              items-center
              justify-center
            "
            v-ripple
          >
            Confirmar numeros Ganadores
          </div>

          <!-- BUTTONS -->
          <div
            class="
              mt-8
              white
              flex
              w-full
              aleatory
              items-center
              justify-center
              f-14
              text-white
            "
            align="center"
          >
            <ArrowLeftIcon
              v-if="multi"
              @click="multi = !multi"
              size="1x"
              class="custom-class cursor-pointer mt-1"
            ></ArrowLeftIcon>
            <span
              v-if="multi"
              class="ml-3 cursor-pointer mr-2 tex"
              @click="getBack()"
            >
              Volver
            </span>
          </div>
        </div>
        <!-- BUTTONS -->
        <div ref="contest" v-else class="numbers-selected">
          <div class="loading container">
            <Spinner name="circle-solid-spin" noFadeIn color="#fda632" />
            <span>Generando Tickets</span>
          </div>
        </div>
      </section>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { XIcon, ArrowLeftIcon } from "vue-feather-icons";
import showNotification from "@/mixins/Notification";
import GenerateTicket from "./components/GenerateTicket.vue";
const someSound2 = require("../../assets/sounds/deselect-ball.mp3");

export default {
  components: {
    XIcon,
    GenerateTicket,
    ArrowLeftIcon,
  },
  mixins: [showNotification],
  data: () => ({
    maxRandom: 5,
    selected: [],
    randomTicket: [],
    someSound2,
    deselected: [],
    loading: false,
    multi: false,
  }),
  computed: {
    ...mapGetters("games", ["GET_GAME_INFO"]),
    ...mapGetters({ GET_OPEN: "games/GET_OPEN" }),
    textButton() {
      if (this.multi) {
        return "Volver";
      } else {
        return "Generar tickets aleatorio";
      }
    },
  },
  methods: {
    closeContest() {
      this.$store.commit("games/SET_OPEN", false);
      setTimeout(() => {
        this.selected = [];
        this.deselected = [];
        this.randomTicket = [];
        this.multi = false;
      }, 1000);
    },
    selectNumber(n) {
      if (this.selected.length <= 6) {
        this.selected.push(n);
      } else {
        const seven = this.selected.filter((number) => number > 49);
        const index = this.selected.indexOf(seven[0]);
        this.selected.splice(index, 1);
        setTimeout(() => {
          this.selected.push(n);
        }, 250);
      }
    },
    getBack() {
      if (this.multi == true && this.randomTicket != 0) {
        this.randomTicket = [];
        return;
      }
      this.multi = !this.multi;
    },
    deselect(n) {
      const audio = new Audio(this.someSound2);
      audio.play();
      this.deselected.push(n);
      setTimeout(() => {
        this.selected.splice(this.selected.indexOf(n), 1);
        this.deselected.splice(this.deselected.indexOf(n), 1);
      }, 250);
    },
    randomNumber(min, max, ticket) {
      // min and max included
      // eslint-disable-next-line prefer-const
      let number = Math.floor(Math.random() * (max - min + 1) + min);
      while (ticket.includes(number)) {
        number = Math.floor(Math.random() * (max - min + 1) + min);
      }

      return number;
    },
    getRandomTicket() {
      // eslint-disable-next-line prefer-const
      let ticket = [];
      for (let index = 0; index < 7; index++) {
        if (index < 7) {
          ticket.push(this.randomNumber(1, 49, ticket));
        } else {
          ticket.push(this.randomNumber(1, 99, ticket));
        }
      }
      return ticket;
    },

    generateRandom() {
      this.loading = true;
      this.randomTicket = [];
      for (let index = 0; index < this.maxRandom; index++) {
        this.randomTicket.push({
          id: index + 1,
          price: this.GET_GAME_INFO.ticket_price,
          ticket_value: this.getRandomTicket(),
        });
      }
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    },
    sendSeven() {
      if (this.multi && this.randomTicket == 0) {
        this.generateRandom();
        return;
      }

      if (this.selected.length < 6 && !this.multi) {
        this.showNotification("Complete el ticket con 7 numeros");
        return;
      }

      this.loading = true;

      const token = this.$store.state.auth.token;
      // eslint-disable-next-line no-unused-vars
      let ticket = [];
      if (this.multi) {
        ticket = this.randomTicket.map((element) => element.ticket_value);
      } else {
        ticket = [this.selected];
      }

      const template = {
        token: token,
        id: this.GET_GAME_INFO._id,
        ticket_value: ticket,
      };
      this.$store
        .dispatch("games/BUY_TICKETS_GAME", template)
        .then((data) => {
          setTimeout(() => {
            console.log("Data", data);
            this.$router.push({ name: "TicketInfo" });
            this.loading = false;
            this.closeContest();
          }, 1000);
        })
        .catch(() => {
          this.loading = false;
        });
    },
    // Functions Aleatory
    generateTicketsAleatory() {
      this.generateTickets = false;
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
  watch: {
    GET_OPEN(val) {
      if (val) {
        // eslint-disable-next-line no-unused-expressions
        this.$refs.contest.focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: -5vh;
  left: 0;
}

section {
  position: fixed;
  z-index: 1;
  left: 0px;
  width: 100%;
  transition: all 0.75s;
  left: 50%;
  padding-top: 0px !important ;
  transform: translateX(-50%);
}

.f-14 {
  font-size: 14px;
}

.primary {
  max-width: 350px;
  background: $gold-gradient;
  color: $white;
  border-radius: 100px;
}

.sm {
  height: 40px;
  min-height: 40px;
}

.header-contest {
  height: 160px;
  background: linear-gradient(90deg, #fda632 19.24%, #f88b24 44.06%);
  box-shadow: 0px -6px 15px rgba(0, 0, 0, 0.8);
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
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
  animation-name: fade;
  animation: fade 0.2s ease-in-out;

  &:hover {
    max-height: 90%;
    max-width: 90%;
  }
}

@keyframes fade {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

.numbers-selected {
  background: #1a1a3d;
  height: calc(100vh - 5vh - 160px);
  padding-top: 20px;
}

.select-content {
  overflow: hidden;
  display: -webkit-box;
  width: 100%;
}

.animate {
  transition: all 0.5s;
  width: 100%;
}

.container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(50px, auto);
  padding: 20px;
  padding-top: 0px;
  height: calc(100vh - 5vh - 400px);
  overflow: overlay;
  justify-content: center;
  justify-items: center;
}

.loading {
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 5vh - 400px);
}

.icon {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: -10px;
  right: 10px;
  overflow: hidden;
  border-radius: 50%;
  top: 18px;
}

.top {
  justify-content: center;
  display: flex;
  align-items: center;
  color: $white;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
}

.item-ticket {
  background: rgba(230, 204, 170, 0.61);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.selecteds {
  justify-content: space-evenly;
  display: flex;
  align-items: center;
}
</style>
