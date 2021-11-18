<template>
  <button :class="{ dark: dark }" @click="action()" class="light">
    <slot name="icon"> </slot>
  </button>
</template>

<script>
export default {
  props: ["dark"],
  methods: {
    action() {
      this.$emit("action");
    },
  },
};
</script>
<style lang="scss" scoped>
.light {
  color: $white;
  transition: all 0.1s;
  border-radius: 100%;
  padding: 8px;

  &.dark {
    &:hover {
      background: #4682b4;
    }
  }
}
</style>
