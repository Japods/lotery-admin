<template>
  <div ref="contest">
    <div class="container" align="center">
      <div
        class="item cursor-pointer"
        :class="{
          disabled: (!selected[5] || validateSeven) && n > 49,
          selected: selected.indexOf(n) != -1
        }"
        v-for="(n, index) in 99"
        :key="index"
        @click="selectNumber(n)"
      >
        {{ index + 1 }}
      </div>
    </div>
  </div>
</template>

<script>
// const someSound2 = require('../../../assets/sounds/deselect-ball.mp3')

export default {
  props: ['selected'],
  components: {},
  data: () => ({
    // someSound2
  }),
  computed: {
    validateSeven () {
      const seven = this.selected.filter(number => number > 49)

      if (seven != 0 && this.selected.length < 7) {
        return true
      }

      return false
    }
  },
  methods: {
    goToAleatory () {
      this.$emit('multi', true)
    },
    selectNumber (n) {
      // this.closeContest()
      // const audio = new Audio(this.someSound2)

      // VALIDIATE ONLYR LAST NUMBER MUST BET > 49
      if (!this.selected[5] && n > 49) {
        return
      }

      // DESCELECT NUMBER
      if (this.selected.indexOf(n) != -1) {
        this.deselect(n)
        return
      }
      // audio.play()

      // SELECT NUMBER OR CHANGE SEVEN
      this.$emit('select', n)
    },
    deselect (n) {
      this.$emit('deselect', n)
    },
    sendSeven () {
      this.$emit('send', 1)
    }
    // Functions Aleatory
  },
  watch: {
    GET_OPEN (val) {
      if (val) {
        // eslint-disable-next-line no-unused-expressions
        this.$refs.contest.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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

.item {
  width: 40px;
  height: 40px;
  background: #313150;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  justify-content: center;
  display: flex;
  align-items: center;
  color: $white;

  &:hover {
    background: #3299f5;
  }

  &.selected {
    background: #3299f5;
  }

  &.disabled {
    cursor: not-allowed !important;
    opacity: 0.5;
    background: #313150;

    &:active {
      pointer-events: none;
    }
  }
}

.aleatory {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.no-margin {
  width: 80%;
}
</style>
