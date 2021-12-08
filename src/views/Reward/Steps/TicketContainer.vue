<template>
  <div>
    <div
      class="ticket-item"
      @click="selectTicket()"
      :class="{ aleatory: aleatory, selected: selected_ticket }"
    >
      <div class="header-ticket">
        <div>ID: {{ ticket._id || ticket.id }}</div>
        <div class="header-ticket">
          <span v-if="ticket.match">Matchs: {{ ticket.match }}</span>
          <span class="font-bold" v-else> {{ ticket.price || 2.5}}</span>
          <img
            src="../../../assets/images/Home/coins.png"
            class="ml-2"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div class="numbers">
        <div
          class="ball"
          :class="{ 'septime-ball': index === 6 }"
          v-for="(n, index) in ticket.ticket_value || ticket.tickets"
          :key="index"
        >
          {{ n }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['ticket', 'aleatory', 'selected'],
  data: function () {
    return {
      selected_ticket: false
    }
  },
  computed: {},
  mounted () {
    if (this.selected) {
      this.ticket.selected = false
    }
  },
  methods: {
    selectTicket () {
      if (!this.selected) {
        return
      }

      this.selected_ticket = !this.selected_ticket
      if (this.selected_ticket) {
        this.$emit('selectTicket', this.ticket)
      } else {
        this.$emit('deselectTicket', this.ticket)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ticket-item {
  background: #1a1a49;
  border-radius: 8px;
  height: 85px;
  margin-bottom: 10px;
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.ball {
  background: #ffffff;
  box-shadow: inset 5px -8px 15px rgb(44 43 43 / 22%);
  border-radius: 50%;
  width: 31px;
  height: 31px;
  color: #1b1454;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 800;
  font-size: 13px;
  line-height: 18px;
}

.numbers {
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  margin-top: 15px;
}

.header-ticket {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.septime-ball {
  background: linear-gradient(90deg, #fda632 19.24%, #f88b24 44.06%);
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: white;
}

.aleatory {
  background: #313150;
}

.selected {
  border-left: 7px solid #f88b24;
}
</style>
