<template>
  <div class="input-wrapper my-3" :class="{ nomargin: nomargin }">
    <label class="font-medium" :for="label"> {{ label }} </label>
    <input
      class="shadow mt-2"
      :type="type"
      :id="label"
      v-model="content"
      :placeholder="placeholder"
      v-on:keyup.enter="submitKeyEnter"
      :disabled="disabled"
      :class="{ disabled: disabled, background_blue: background_blue }"
    />
  </div>
</template>
<script>
export default {
  props: [
    "label",
    "placeholder",
    "value",
    "type",
    "disabled",
    "background_blue",
    "nomargin",
  ],
  data: function () {
    return {
      content: "",
    };
  },
  methods: {
    submitKeyEnter() {
      this.$emit("keyEnter");
    },
  },
  mounted() {
    this.content = this.value;
  },
  watch: {
    value() {
      this.content = this.value;
    },
    content() {
      this.$emit("emitValue", this.content);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-wrapper {
  width: 100%;

  input {
    outline: none;
    height: 40px;
    border-radius: 6px;
    width: 100%;
    padding-left: 10px;
    background: #1a1a3d;
  }

  ::placeholder {
    font-size: 12px;
  }

  label {
    font-size: 12px;
  }
}

.disabled {
  opacity: 0.6;
}

.background_blue {
  background: #313150 !important;
}

.nomargin {
  margin: 0;
}
</style>
