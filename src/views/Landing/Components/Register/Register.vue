<template>
  <div class="gold-container" id="play">
    <div
      class="view-content lg:flex flex-col home-content my-12"
      align="center"
    >
      <div class="w-3/6">
        <img
          src="@/assets/images/Landing/icon_seven.png"
          class="mb-5 relative"
          alt=""
        />
      </div>
      <div class="w-full lg:w-3/6">
        <span class="title-awards">Que esperas para ganar?</span> <br />
        <Button class="mt-10" :text="'Registrate ahora'"></Button>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button/Button.vue";
export default {
  components: {
    Button,
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.home-content {
  height: auto !important;
  max-width: 1200px;
  display: flex;
  align-items: center;
}

.gold-container {
  background: #2a2a7a;
  border-radius: 8px;
  width: 100%;
  height: 25 0px;
  padding-top: 20px;
  padding-bottom: 30px;
}

.title-awards {
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 46px;
}
.subtitle-awards {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
}

.item {
  font-size: 18px;
  line-height: 25px;
}
</style>
