<template>
  <button
    v-ripple
    @click="action()"
    @mouseover="over()"
    :class="[
      btn,
      size,
      'flex mx-auto justify-center items-center',
      disabled ? 'disabled' : '',
    ]"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    btn: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {},
    size: {
      type: String,
      default: "sm",
    },
  },
  methods: {
    action() {
      this.$emit("action");
    },
    over() {
      this.$emit("over");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  font-size: 14px;
  padding: 0px 20px;
  width: 90%;
  max-width: 350px;
  font-weight: 500;
  position: relative;
  transition: all 0.3s;
  min-width: 120px;
  overflow: hidden;
}

.xs {
  height: 30px;
  min-height: 30px;
}

.sm {
  height: 40px;
  min-height: 40px;
}

.primary {
  background: $gold-gradient;
  color: $white;
  border-radius: 100px;
}

.transparent {
  background: transparent;
}

.disabled {
  pointer-events: none;
  opacity: 0.5;
}
</style>
