<template>
  <div class="login-container p-16">
    <div class="flex justify-center">
      <img
        class="mt-5"
        src="@/assets/images/Sevens/sevens_2.svg"
        width="120"
        alt=""
        srcset=""
      />
    </div>
    <Input
      :label="'Email:'"
      :placeholder="'Introduzca su email aqui...'"
      :type="'text'"
      :value="name"
      @emitValue="name = $event"
    ></Input>
    <Input
      :label="'Contraseña:'"
      :placeholder="'******'"
      :type="'password'"
      :value="password"
      @emitValue="password = $event"
      @keyEnter="login"
    ></Input>
    <Button class="mt-10" @action="login" :text="'Iniciar Sesion'"></Button>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";
import Input from "@/components/Input/Input.vue";
import showNotification from "@/mixins/Notification";
export default {
  components: {
    Button,
    Input,
  },
  data: function () {
    return {
      name: "",
      password: "",
    };
  },
  mixins: [showNotification],
  name: "Login",
  mounted() {
    this.$store.commit("auth/SET_INITIAL_STATE");
  },
  methods: {
    login() {
      if (this.email === "" || this.password === "") {
        this.showNotification("Llene todos los campos");
        return;
      }
      const user = {
        email: this.name,
        password: this.password,
      };
      this.$store.dispatch("auth/LOGIN_TO", user).then(() => {
        this.showNotification("Bienvenido a Admin Lotery");
        this.$router.push({ name: "Transacciones" });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#auth {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-container {
  background: #313150;
  height: 600px;
  border-radius: 10px;
  color: $white;
  font-family: Open Sans;
}
</style>
