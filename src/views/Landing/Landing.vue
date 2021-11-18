<template>
  <div class="">
    <div class="flex flex-col landing-content" align="center">
      <NavBar></NavBar>
      <Home></Home>
      <Counter></Counter>
      <HowToPlay></HowToPlay>
      <Awards></Awards>
      <Register></Register>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import NavBar from "./Components/NavBar/NavBar.vue";
import Home from "./Components/Home/Home.vue";
import Counter from "./Components/Counter/Counter.vue";
import HowToPlay from "./Components/HowToPlay/HowToPlay.vue";
import Awards from "./Components/Awards/Awards.vue";
import Register from "./Components/Register/Register.vue";
import Footer from "./Components/Footer/Footer.vue";

export default {
  components: {
    NavBar,
    Home,
    Counter,
    HowToPlay,
    Awards,
    Register,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  background: #2a2a7a !important;
  overflow-y: hidden;
}

.landing-content {
  color: $white;
  display: flex;
  align-items: center;
}

.view-content {
  max-width: 1400px;
  height: 100%;
  width: 100%;
}
</style>
