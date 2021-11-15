<template>
  <section id="auth" class="view-content text-white font-lg font-bold px-5">
    <router-view />
  </section>
</template>

<script>
export default {
  name: "HomeAuth",
  mounted() {},
};
</script>

<style lang="scss" scoped>
#auth {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
