<template>
  <div>
    <Input
      :label="'Buscar:'"
      :placeholder="'Escriba aqui...'"
      :type="'text'"
      :value="text"
      @emitValue="text = $event"
      :background_blue="true"
      :nomargin="true"
    ></Input>
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";

export default {
  components: {
    Input,
  },
  data: function () {
    return {
      text: "",
    };
  },
};
</script>
