<template>
  <div
    class="
      view-content
      nav-wrapper
      flex
      justify-between
      items-center
      home-content
      mb-20
    "
    align="center"
    id="home"
  >
    <div class="left w-3/6 hidden lg:block mb-16" align="center">
      <img
        src="@/assets/images/Landing/seven_play_big.png"
        width="582"
        class="mb-5"
        alt=""
      />
      <h1 class="title-landing">Registrate y gana todas las semanas</h1>
      <br />
      <Button class="mt-10" :text="'Registrate ahora'"></Button>
    </div>
    <div
      class="
        right
        w-3/6
        relative
        hidden
        lg:flex
        items-center
        justify-center
        h-full
      "
    >
      <img
        src="@/assets/images/Landing/background.png"
        class="absolute seven-image"
        alt=""
      />
      <img
        src="@/assets/images/Landing/phone_image.png"
        class="relative"
        alt=""
      />
    </div>
    <div class="lg:hidden flex-col" align="center">
      <img
        src="@/assets/images/Landing/seven_play_big.png"
        width="582"
        class="mb-5"
        alt=""
      />
      <img
        src="@/assets/images/Landing/phone_image.png"
        class="mt-16 relative"
        alt=""
        width="250"
      />
      <Button class="mt-10" :text="'Registrate ahora'"></Button>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button/Button.vue";

export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.seven-image {
  right: 50px;
  height: calc(100vh - 150px);
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
}

.title-landing {
  font-weight: 600;
  font-size: 24px;
  margin-top: 20px;
}

.home-content {
  height: calc(100vh - 70px) !important;
}
</style>
