<template>
  <div class="outsite">
    <div class="reward-content relative">
      <div v-if="loading" class="loading-container" align="center">
        <Spinner name="circle-solid-spin" noFadeIn color="#fda632" />
        <div class="mt-10">Verificando recompensas</div>
      </div>
      <div v-if="!loading" class="header-content" align="center">
        {{ getTitleStep }}
      </div>
      <div v-if="!loading" class="body-content p-16 mt-16">
        <Input
          :label="'CI o Numero Telefonico:'"
          :placeholder="'Introduzca la identificacion del usuario aqui...'"
          :type="'text'"
          :value="indetification"
          @emitValue="indetification = $event"
        ></Input>
        <div class="label mt-10">
          Inserte un ticket jugado o el ticket ganador
        </div>
        <div class="flex w-full input-container mt-5" align="center">
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
          class="mt-20"
          @action="setWinner"
          :text="'Verificar recompensas'"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";
import Button from "@/components/Button/Button.vue";
import showNotification from "@/mixins/Notification";

export default {
  components: {
    Input,
    Button,
  },
  mixins: [showNotification],
  data() {
    return {
      indetification: "",
      number_1: "",
      number_2: "",
      number_3: "",
      number_4: "",
      number_5: "",
      number_6: "",
      number_7: "",
      seven: [],
      step: 0,
      loading: false,
    };
  },
  computed: {
    getTitleStep() {
      switch (this.step) {
        case 0:
          return "Paso 1 : Verifica con la identificador del jugador y un ticket comprado  Glas recompensas del juego pasado";

        case 1:
          return "Paso 2 : Genera una transaccion de retiro con los mismos datos de identificacion del usuario ganador";

        default:
          return "Paso 2 : Genera una transaccion de retiro con los mismos datos de identificacion del usuario ganador";
      }
    },
  },
  methods: {
    setWinner() {
      this.loading = true;
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
        ticket_value: this.seven,
        user: this.indetification,
      };

      setTimeout(() => {
        this.$store.dispatch("rewards/VERIFY_REWARD", autorization).then(() => {
          this.loading = false;
          this.showNotification("Recompensas verificadas");
        });
      }, 1500);
    },
  },
};
</script>

<style lang="scss" scoped>
.reward-content {
  background: #313150;
  width: 40%;
  display: flex;
  height: 80vh;
  border-radius: 10px;
  padding: 40px;
  flex-direction: column;
}

.outsite {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-content {
  font-size: 18px;
  font-weight: 600;
}

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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  background: #1a1a3d;
  padding: 20px;
  border-radius: 10px;
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

.label {
  font-size: 12px;
  font-weight: 500;
}

.loading-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
