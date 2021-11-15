<template>
  <div>
    <div class="background-modal modal-backdrop"></div>
    <div class="modal-drop relative">
      <XIcon class="close_icon" @click="$emit('closeModal')"></XIcon>
      <img :src="element.photo" alt="" />
    </div>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons";

export default {
  props: ["element"],
  components: {
    XIcon,
  },
};
</script>

<style lang="scss" scoped>
.background-modal {
  background: black;
  opacity: 0.5;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0%;
  margin: 0 !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-drop {
  height: 600px;
  width: 700px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 30px;
}

.close_icon {
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
}
</style>
