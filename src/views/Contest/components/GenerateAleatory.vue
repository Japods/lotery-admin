<template>
  <div>
    <div
      class="container-aleatory mt-10"
      v-if="randomTicket == 0"
      align="center"
    >
      <img src="@/assets/images/Home/withdraw.png" class="mb-5" alt="" />
      <span>Tu Balance</span>
      <div class="balance header-balance mt-5">
        <number
          ref="number1"
          :from="0"
          :to="GET_BALANCE_USER"
          :duration="1"
          :format="theFormat"
          easing="Power1.easeOut"
        />
        <span class="ml-3">Tokens</span>
        <div>
          <img
            src="@/assets/images/Home/coins.png"
            class="pl-5 pt-1"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div class="generator mt-10">
        <div class="information-calc relative mt-3 px-5 mx-5">
          <div class="result w-1/3 text-center">
            <input
              type="text"
              pattern="[0-9]"
              maxlength="3"
              v-model="coin"
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              style="width: 100%"
              @change="setMaxRandom()"
              class="input-result px-3 py-1 text-center"
            />
          </div>
          <div class="sm:mx-10"><RefreshCwIcon></RefreshCwIcon></div>
          <div class="input w-1/3">
            <input
              type="text"
              pattern="[0-9]"
              :value="getValue"
              disabled
              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
              class="input-result px-3 py-1 text-center"
            />
            <div class="w-ol pl-2 sm:pl-5">
              <img
                src="@/assets/images/Home/coins.png"
                class="pt-1"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div ref="contest" v-else class="numbers-selected">
      <div class="container-aleatory" align="left">
        <span class="pl-5 font-bold">Tickets Generados</span>
        <div class="tickets-scroll mt-2 sm:px-8 px-4" align="left">
          <!-- <TicketContainer
            :ticket="element"
            v-for="(element, index) in randomTicket"
            :key="index"
            :aleatory="true"
          ></TicketContainer> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RefreshCwIcon } from "vue-feather-icons";
import { mapGetters } from "vuex";

export default {
  components: { RefreshCwIcon },
  props: ["randomTicket"],
  data: () => ({
    coin: 5,
  }),
  computed: {
    ...mapGetters("games", ["GET_GAME_INFO"]),
    ...mapGetters("user", ["GET_BALANCE_USER"]),
    getValue() {
      return Number(this.coin * this.GET_GAME_INFO.ticket_price).toFixed(2);
    },
  },
  methods: {
    theFormat(number) {
      return number.toFixed(2);
    },
    setMaxRandom() {
      if (this.coin > 999) {
        this.coin = 999;
      }
      this.$emit("setMaxRandom", this.coin);
    },
  },
};
</script>

<style lang="scss" scoped>
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

.aleatory {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

// Aleatory Styles

.header-aleatory {
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-aleatory {
  padding-top: 0px;
  height: 100%;
  overflow: hidden;
  justify-content: center;
  justify-items: center;
  color: $white;
}

.header-balance {
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.information-calc {
  background: #313150;
  border-radius: 8px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  max-width: 500px;
}

.input-result {
  background: transparent;
  box-shadow: inset 0px 0px 6px rgb(232 232 232 / 15%);
  border-radius: 5px;
  height: 40px;
  margin-right: auto;
  outline: none;
  font-size: 17px;
  min-width: 80px;
}

.w-ol {
  width: 38px;
}

.input {
  display: flex;
  align-items: center;
}

.w-ol {
  width: 38px;
}

.input {
  display: flex;
  align-items: center;
}

input[type="file"] {
  position: absolute;
  z-index: -1;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
}

label[for="filesBusiness"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.result {
  display: flex;
  align-items: center;
}

//Style Tickets Ramdoms

.tickets-scroll {
  overflow: auto;
  max-height: calc(100vh - 460px);
  padding-bottom: 10px;
}
</style>
