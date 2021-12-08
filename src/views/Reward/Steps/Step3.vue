<template>
  <div class="body-content p-16">
    <div class="form mt-10" align="left">
      <Input
        :label="'Email:'"
        :placeholder="'example@example.com'"
        :type="'text'"
        :value="email"
        @emitValue="email = $event"
      ></Input>
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
        :value="GET_USER_INFO.ci"
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
      <div class="px-5 my-3">
        <span v-if="method_selected === 2" class="label"
          >Advertencia: El nombre del banco debe estar escrito correctamente, de
          lo contrario el retiro sera cancelado</span
        >
      </div>

      <!-- <div class="info px-5 my-3">
        <span class="label">Seleccione su banco: </span>
        <div class="input-select w-full px-5">
          spale
          <ChevronDownIcon @click="showBanks"></ChevronDownIcon>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import showNotification from "@/mixins/Notification";
import { mapGetters } from "vuex";
import Input from "@/components/Input/Input.vue";

export default {
  components: {
    Input,
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
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
