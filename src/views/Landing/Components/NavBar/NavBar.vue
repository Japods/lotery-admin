<template>
  <div class="view-content lg:pt-10 p-0">
    <div class="nav-wrapper hidden lg:flex justify-between items-center">
      <div class="image">
        <img src="@/assets/images/Landing/seven_play.png" class="mb-5" alt="" />
      </div>
      <div class="menu flex">
        <div class="cursor-pointer" @click="goToScroll('home')">
          Sevens + Play
        </div>
        <div class="cursor-pointer" @click="goToScroll('howToPlay')">
          ¿ Como se juega ?
        </div>
        <div class="cursor-pointer" @click="goToScroll('awards')">Premios</div>
        <div class="cursor-pointer" @click="goToScroll('play')">
          <Button class="w-16" :text="'Jugar'"></Button>
        </div>
      </div>
    </div>
    <div class="flex pl-5 menu-mobile lg:hidden">
      <IconButton
        @action="
          open = !open;
          selectedMenu = null;
        "
        class="lg:hidden"
      >
        <menu-icon slot="icon" size="1.5x" class="custom-class"></menu-icon>
      </IconButton>
    </div>
    <!-- MOBILE MENU -->
    <div
      v-if="open"
      class="flex flex-col lg:hidden flex absolute menu background-gold"
    >
      <div
        class="flex flex-col w-full"
        v-for="(btn, index) in buttons"
        @click="goToIfMobile(btn.id)"
        :key="index"
      >
        <div class="listItem">
          <div class="menu-item text-white py-3 px-3">
            {{ btn.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button/Button.vue";
import IconButton from "@/components/IconButton/IconButton.vue";
import { MenuIcon } from "vue-feather-icons";
export default {
  components: {
    Button,
    IconButton,
    MenuIcon,
  },
  created() {
    window.addEventListener("scroll", this.listenScroll);
  },
  data: function () {
    return {
      navBar: false,
      open: false,
      selectedMenu: null,
      buttons: [
        { text: "Sevens + Play", id: "home" },
        { text: "¿ Como se juega ?", id: "howToPlay" },
        { text: "Premios", id: "awards" },
        { text: "Jugar", id: "play" },
      ],
    };
  },
  methods: {
    listenScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        this.navBar = true;
      } else {
        this.navBar = false;
      }
    },
    goToIfMobile(value) {
      this.open = !this.open;

      this.goToScroll(value);
    },
    goToScroll(value) {
      document.getElementById(value).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.menu-mobile {
  background: $gold-gradient;
  height: 50px;
}

.background-gold {
  background: $gold-gradient;
}
</style>
