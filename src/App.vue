<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import showNotification from "@/mixins/Notification";

export default {
  name: "App",
  components: {},
  mixins: [showNotification],
  mounted() {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const { response = {} } = error;
        const message = response.data.error?.message
          ? response.data.error?.message
          : response.data.message;

        // if (response.data.code === 401) {
        //   this.$router.push({ name: 'HomeAuth' })
        //   return
        // }

        this.showNotification(message);

        return Promise.reject(error);
      }
    );
  },
};
</script>

<style lang="scss">
#app {
  height: 100vh;
  overflow-y: overlay;
  overflow-x: hidden;
}
</style>
