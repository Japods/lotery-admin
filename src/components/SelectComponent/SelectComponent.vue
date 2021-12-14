<template>
  <div>
    <span class="label"> {{ label }} </span>
    <div class="selected-item mt-2" @click="showMenu = !showMenu">
      <span>{{ item }} </span>
      <ChevronDownIcon></ChevronDownIcon>
    </div>
    <div class="select-menu" v-if="showMenu">
      <div
        class="item"
        v-for="(element, index) in items"
        @click="
          item = element.name;
          showMenu = false;
          $emit('sendValue', element.id);
        "
        :key="index"
      >
        {{ element.name }}
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from "vue-feather-icons";

export default {
  components: {
    ChevronDownIcon,
  },
  props: ["type", "label", "value"],
  data: function () {
    return {
      status: [
        { name: "Pendiente", id: 0 },
        { name: "Aprobado", id: 1 },
        { name: "Cancelado", id: 2 },
      ],
      types: [
        { name: "Todos", id: null },
        { name: "Deposito", id: 0 },
        { name: "Retiro", id: 1 },
        // { name: "Buy Tickets", id: 2 },
        // { name: "Transfer", id: 3 },
        { name: "Reward", id: 4 },
      ],
      items: [],
      item: "",
      showMenu: false,
    };
  },
  mounted() {
    switch (this.type) {
      case "status":
        this.items = this.status;
        this.item = this.items[0].name;
        break;
      case "type":
        this.items = this.types;
        this.item = this.items[0].name;
        break;

      default:
        break;
    }
  },
  methods: {
    filterSend() {
      this.$emit("sendFilter");
    },
  },
};
</script>

<style lang="scss">
.selected-item {
  width: 200px;
  height: 40px;
  background: #313150;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
}

.select-menu {
  background: #212138;
  margin-top: 20px;
  border-radius: 10px;
  position: absolute;
  width: 200px;
}

.item {
  padding: 10px;
  cursor: pointer;
}

.item:hover {
  background: #313150;
}

.label {
  font-size: 12px;
}
</style>
