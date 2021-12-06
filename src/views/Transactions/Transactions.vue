<template>
  <div>
    <div class="login-container p-10">
      <div class="header-transactions flex">
        <div class="cube-info">
          <span>
            <span class="count count_pending">{{
              GET_TRANSACTIONS.count_pending
            }}</span>
            <br />
            Transacciones pendientes</span
          >
        </div>
        <div class="cube-info">
          <span>
            <span class="count count_aprove">{{
              GET_TRANSACTIONS.count_aprove
            }}</span>
            <br />
            Transacciones aprobadas</span
          >
        </div>
        <div class="cube-info">
          <span>
            <span class="count count_cancel">{{
              GET_TRANSACTIONS.count_cancel
            }}</span>
            <br />
            Transacciones canceladas</span
          >
        </div>
        <div class="cube-info">
          <span>
            <span class="count">{{ GET_TRANSACTIONS.count_total }}</span> <br />
            Transacciones totales</span
          >
        </div>
      </div>
      <div class="filters relative flex mt-5">
        <!-- <SearchComponent></SearchComponent> -->
        <SelectComponent
          class="ml-5"
          :type="'status'"
          :label="'Estatus'"
          @sendValue="status = $event"
        ></SelectComponent>
        <SelectComponent
          :type="'type'"
          class="ml-5"
          :label="'Tipo'"
          @sendValue="type = $event"
        ></SelectComponent>
        <!-- <div class="button-search mt-8" @click="getTransactions" align="center">
          Buscar
        </div> -->
      </div>
      <table class="table-auto w-full mt-10">
        <thead>
          <tr class="header-table">
            <th align="left" class="pl-2">ID</th>
            <th align="center">Status</th>
            <th align="center">Tipo</th>
            <th align="center">Usuario</th>
            <th align="center">Tokens Value</th>
            <th align="center">Valor USD</th>
            <!-- Deposito -->
            <th align="center" v-if="type === 0">Referencia</th>
            <th align="center" v-if="type === 0">Banco</th>
            <!-- Retiro -->
            <th align="center" v-if="type === 1">Datos de Retiro</th>
            <!-- Retiro -->
            <th align="center" v-if="status === 0">Actions</th>
          </tr>
        </thead>
        <EmptyState
          :text="'No se han encontrado transacciones'"
          class="mt-20"
          v-if="GET_TRANSACTIONS.data.length === 0"
        ></EmptyState>
        <tbody class="mt-10 object-table w-full">
          <tr
            class="body-table"
            v-for="(element, index) in GET_TRANSACTIONS.data"
            :key="index"
          >
            <td align="left" class="pl-2">{{ element._id }}</td>
            <td align="center">
              <div
                class="status"
                :class="{
                  status_pending: element.status === 0,
                  status_aprove: element.status === 1,
                  status_canceled: element.status === 2,
                }"
              >
                {{ element.status | getStatusTransactions }}
              </div>
            </td>
            <td align="center">
              {{ element.type | getStatusTypeTransactions }}
            </td>
            <td align="center">{{ element.user.email }}</td>
            <td align="center">
              <div class="flex justify-center">
                <div>
                  {{ element.tokens_value }}
                </div>
                <div>
                  <img
                    src="@/assets/images/Home/coins.png"
                    class="pl-5 pt-1"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </td>
            <td align="center">{{ element.value_USD }} $</td>
            <!-- Deposito -->
            <td align="center" v-if="type === 0">{{ element.ref }}</td>
            <td align="center" v-if="type === 0">{{ element.bank }}</td>
            <!-- Retiro -->
            <td align="center" v-if="type === 1">
              Banco: {{ element.wallet.bank }} <br />
              email: {{ element.wallet.email }} <br />
              CI: {{ element.wallet.ci }} <br />
              <span v-if="element.wallet.phone">
                {{ element.wallet.phone }}</span
              >
            </td>
            <!-- Retiro -->
            <td align="center" v-if="status === 0" class="cursor-pointer">
              <div class="flex actions-flex">
                <EyeIcon v-if="type === 0" @click.prevent="openModal(element)"></EyeIcon>
                <CheckIcon
                  v-if="status === 0"
                  class="count_aprove"
                  @click.prevent="aproveTransaction(element)"
                ></CheckIcon>
                <XCircleIcon
                  v-if="status === 0"
                  class="count_cancel"
                  @click.prevent="declineTransaction(element)"
                ></XCircleIcon>
              </div>
            </td>
            <!-- Deposito -->
          </tr>
        </tbody>
      </table>
    </div>
    <ModalTransactions
      v-if="open_modal"
      @closeModal="open_modal = false"
      :element="transaction_selected"
    ></ModalTransactions>
  </div>
</template>

<script>
import showNotification from "@/mixins/Notification";
import { mapGetters } from "vuex";
import { EyeIcon, CheckIcon, XCircleIcon } from "vue-feather-icons";
import SelectComponent from "@/components/SelectComponent/SelectComponent.vue";
import EmptyState from "@/components/EmptyState/EmptyState.vue";
import ModalTransactions from "@/components/ModalTransactions/ModalTransactions.vue";

export default {
  components: {
    EyeIcon,
    CheckIcon,
    SelectComponent,
    EmptyState,
    ModalTransactions,
    XCircleIcon,
  },
  data: function () {
    return {
      type: 0,
      status: 0,
      transaction_selected: {},
      open_modal: false,
    };
  },
  mixins: [showNotification],
  name: "Login",
  filters: {
    getStatusTransactions(value) {
      switch (value) {
        case 0:
          return "Pendiente";
        case 1:
          return "Aprobado";
        case 2:
          return "Cancelado";
        default:
          return "No definido";
      }
    },
    getStatusTypeTransactions(value) {
      switch (value) {
        case 0:
          return "Deposit";
        case 1:
          return "Retiro";
        case 2:
          return "Buy Tickets";
        case 3:
          return "Transfer";
        case 4:
          return "Reward";
        default:
          return "No definido";
      }
    },
  },
  computed: {
    ...mapGetters("transactions", ["GET_TRANSACTIONS"]),
  },
  mounted() {
    console.log("Transact", this.$store.state.auth.token);
    this.getTransactions();
  },
  methods: {
    getTransactions() {
      const token = this.$store.state.auth.token;
      const template = {
        token: token,
        type: this.type,
        status: this.status,
      };
      this.$store.dispatch("transactions/GET_TRANSACTIONS", template);
    },
    openModal(value) {
      this.transaction_selected = value;
      this.open_modal = true;
    },
    aproveTransaction(element) {
      const token = this.$store.state.auth.token;
      const template = {
        token: token,
        transaction_id: element._id,
        status: 1,
      };
      this.$store
        .dispatch("transactions/APROVE_OR_DECLINE", template)
        .then(() => {
          this.getTransactions();
          this.showNotification("Transaccion Aprobada");
        });
    },
    declineTransaction(element) {
      const token = this.$store.state.auth.token;
      const template = {
        token: token,
        transaction_id: element._id,
        status: 2,
      };
      this.$store
        .dispatch("transactions/APROVE_OR_DECLINE", template)
        .then(() => {
          this.getTransactions();
          this.showNotification("Transaccion Rechazada");
        });
    },
  },
  watch: {
    type() {
      this.getTransactions();
    },
    status() {
      this.getTransactions();
    },
  },
};
</script>

<style lang="scss" scoped>
.cube-info {
  width: calc(100% / 4);
  margin-right: 10px;
  background: #313150;
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px;
  text-align: center;
}

// Tables Class

.header-table {
  background: #313150;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.body-table {
  height: 50px;
  margin-top: 10px;
  padding-left: 20px;
}

.scroll-transactions {
  overflow: auto;
  background: blue;
  height: 500px !important;
}

tbody {
  display: block;
  height: calc(100vh - 470px);
  overflow: auto;
}
thead,
tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed; /* even columns width , fix width of table too*/
}
thead {
  width: calc(
    100% - 1em
  ); /* scrollbar is average 1em/16px width, remove it from thead width */
}

.status_pending {
  background: #cfb226;
}
.status_aprove {
  background: #23b75e;
}
.status_canceled {
  background: #ee5959;
}

.status {
  width: 90px;
  border-radius: 8px;
}

.button-search {
  background: linear-gradient(90deg, #fda632 19.24%, #f88b24 44.06%);
  color: #ffff;
  border-radius: 10px;
  width: 200px;
  height: 40px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  justify-content: center;
  cursor: pointer;
}

.filters {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.count {
  font-size: 24px;
}

.count_pending {
  color: #cfb226;
}

.count_aprove {
  color: #23b75e;
}

.count_cancel {
  color: #ee5959;
}

.actions-flex {
  align-items: center;
  justify-content: space-evenly;
}
</style>
