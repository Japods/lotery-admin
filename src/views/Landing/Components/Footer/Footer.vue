<template>
  <div class="gold-container">
    <div class="view-content flex home-content no-border w-1/4 pt-6">
      <IconButton class="mx-1" :dark="true">
        <facebook-icon
          slot="icon"
          size="1.5x"
          class="custom-class cursor-pointer"
        ></facebook-icon>
      </IconButton>
      <IconButton class="mx-1" :dark="true">
        <twitter-icon
          slot="icon"
          size="1.5x"
          class="custom-class cursor-pointer"
        ></twitter-icon>
      </IconButton>
      <IconButton class="mx-1" :dark="true">
        <instagram-icon
          slot="icon"
          size="1.5x"
          class="custom-class cursor-pointer"
        ></instagram-icon>
      </IconButton>
    </div>
    <div
      class="view-content flex flex-col lg:flex-row home-content my-12"
      align="center"
    >
      <div class="cursor-pointer mt-10">
        © 2021. SEVENPLAY | Todos los derechos reservados
      </div>
      <div class="cursor-pointer mt-10">Documentación legal</div>
      <div class="cursor-pointer mt-10">Política de privacidad</div>
      <div class="cursor-pointer mt-10">
        Términos y condiciones del sitio web
      </div>
      <div class="cursor-pointer mt-10">Política sobre cookies</div>
    </div>
  </div>
</template>
<script>
import { TwitterIcon, FacebookIcon, InstagramIcon } from "vue-feather-icons";
import IconButton from "@/components/IconButton/IconButton.vue";

export default {
  components: {
    TwitterIcon,
    FacebookIcon,
    InstagramIcon,
    IconButton,
  },
  data: function () {
    return {};
  },
  methods: {
    goRss(value) {
      window.open(value, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.home-content {
  height: auto !important;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid white;
}

.gold-container {
  background: #201a57;
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

.no-border {
  border-top: none;
  width: 200px;
}
</style>
