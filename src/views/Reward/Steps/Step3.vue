<template>
  <div class="body-content p-16">
    <div class="form mt-10" align="left">
      <Input
        :label="'Nombre:'"
        :placeholder="'Introduzca su nombre aqui...'"
        :type="'text'"
        :value="name"
        @emitValue="name = $event"
      ></Input>
      <Input
        :label="'RUT-RIF-CI'"
        :placeholder="'Introduzca su identificacion...'"
        :type="'text'"
        :disabled="true"
        :value="GET_IDENTIFICATION"
      ></Input>
      <Input
        :label="'Numero de Telefono:'"
        v-if="method_selected === 2"
        :placeholder="'Introduzca su pago movil aqui...'"
        :type="'text'"
        :value="phone_number"
        @emitValue="phone_number = $event"
      ></Input>
      <Input
        :label="'Banco:'"
        v-if="method_selected === 2"
        :placeholder="'Banesco'"
        :type="'text'"
        :value="bank"
        @emitValue="bank = $event"
      ></Input>
      <div class="px-5 my-3" align="center">
        <span v-if="method_selected === 2" class="label"
          >Advertencia: El nombre del banco debe estar escrito correctamente, de
          lo contrario el retiro sera cancelado</span
        >
      </div>
      <Button
        class="mt-16"
        :text="'Crear transaccion de retiro'"
        @action="createTransaction"
      ></Button>
      <div
        class="mt-5 white w-full cursor-pointer"
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
import Input from "@/components/Input/Input.vue";
import Button from "@/components/Button/Button.vue";

export default {
  components: {
    Input,
    Button,
  },
  computed: {
    ...mapGetters("rewards", ["GET_REWARD_INFO", "GET_IDENTIFICATION"]),
  },
  mixins: [showNotification],
  data() {
    return {
      total_matchs: [],
      email: "",
      name: "",
      bank: "",
      phone_number: "",
      method_selected: 2,
      userinfo: {},
    };
  },
  mounted() {},
  methods: {
    createTransaction() {
      const template = {
        token: this.$store.state.auth.token,
        bank: this.bank,
        ci: this.GET_IDENTIFICATION,
        user: this.GET_IDENTIFICATION,
        phone_number: this.phone_number,
        game_id: this.GET_REWARD_INFO.game._id,
      };
      this.$store.dispatch("rewards/REWARD_REQUEST", template).then(() => {
        this.$emit("transactCompleted");
        this.showNotification("Transaccion de retiro realizada");
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
