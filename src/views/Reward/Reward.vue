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
      <Step1
        @changeStep="changeStep($event)"
        @loadingTrue="loading = true"
        @loadingFalse="loading = false"
        v-if="step === 0 && !loading"
      ></Step1>
      <Step2
        v-if="step === 1 && !loading"
        @createTransaction="createTransaction"
        @goBack="step = 0"
      ></Step2>
      <Step3
        @transactCompleted="transactCompleted"
        @goBack="step = 0"
        v-if="step === 2 && !loading"
      ></Step3>
    </div>
  </div>
</template>

<script>
import Step1 from "./Steps/Step1.vue";
import Step2 from "./Steps/Step2.vue";
import Step3 from "./Steps/Step3.vue";
import showNotification from "@/mixins/Notification";

export default {
  components: {
    Step1,
    Step2,
    Step3,
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
      email: "",
      name: "",
      bank: "",
      phone_number: "",
      method_selected: 2,
      userinfo: {},
      template: {},
    };
  },
  computed: {
    getTitleStep() {
      switch (this.step) {
        case 0:
          return "Paso 1 : Verifica con la identificador del jugador y un ticket comprado  Glas recompensas del juego pasado";

        case 1:
          return "Paso 2 : Verifica si el jugador Gano y con que Tickets Gano";

        default:
          return "Paso 3 : Crea una transaccion de retiro para el usuario Ganador";
      }
    },
  },
  methods: {
    changeStep(template) {
      console.log("Epa", template);
      this.loading = true;
      this.template = template;

      console.log("Epa", template);
      this.$store
        .dispatch("rewards/VERIFY_REWARD", this.template)
        .then(() => {
          this.showNotification("Recompensas verificadas");
          this.loading = false;
          this.step = 1;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    createTransaction() {
      this.step = 2;
    },
    transactCompleted() {
      this.step = 0;
    },
  },
  watch: {
    loading() {
      console.log("Loading", this.loading);
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
