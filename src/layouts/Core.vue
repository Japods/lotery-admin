<template>
  <section class="section-core flex">
    <div class="side-nav">
      <div
        v-for="(element, index) in menu"
        @click="goToRoute(element)"
        class="item-big"
        :key="index"
      >
        <div class="item-nav">
          <MinusSquareIcon
            v-if="element.title === 'Transactions'"
          ></MinusSquareIcon>
          <UsersIcon v-if="element.title === 'Usuarios'"></UsersIcon>
          <LifeBuoyIcon v-if="element.title === 'Games'"></LifeBuoyIcon>
          <AwardIcon v-if="element.title === 'Reward'"></AwardIcon>
          <LogOutIcon v-if="element.title === 'Salir'"></LogOutIcon>
        </div>
        <span class="menu-title mt-2 cursor-pointer">{{ element.title }}</span>
      </div>
    </div>
    <div class="router-view">
      <span class="ml-12">{{ $route.name }}</span>
      <router-view />
    </div>
    <Contest />
  </section>
</template>

<script>
import {
  MinusSquareIcon,
  UsersIcon,
  LifeBuoyIcon,
  LogOutIcon,
  AwardIcon 
} from "vue-feather-icons";
import Contest from "@/views/Contest/Contest.vue";
import showNotification from "@/mixins/Notification";

export default {
  components: {
    MinusSquareIcon,
    UsersIcon,
    LifeBuoyIcon,
    LogOutIcon,
    Contest,
    AwardIcon
  },
  mixins: [showNotification],
  data() {
    return {
      menu: [
        {
          href: "/",
          title: "Transactions",
          name: "Transacciones",
        },
        {
          href: "/games",
          title: "Games",
          name: "Games",
        },
        {
          href: "/reward",
          title: "Reward",
          name: "Reward",
        },
        {
          href: "/",
          title: "Salir",
          name: "Login",
        },
      ],
    };
  },
  methods: {
    goToRoute(value) {
      if (this.$route.name === value.name) {
        return;
      }

      if (value.name === "Login") {
        this.showNotification("Sesion cerrada");
      }

      this.$router.push({ name: value.name });
    },
  },
};
</script>

<style lang="scss" scoped>
.side-nav {
  color: $white;
  height: 100vh;
  width: 100px;
  background: #313150;
  padding: 20px;
}

.item-nav {
  background: #1a1a3d;
  border-radius: 10px;
  height: 50px;
  width: 50px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.menu-title {
  font-size: 12px;
}

.item-big {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.router-view {
  padding: 20px;
  width: calc(100% - 100px);
  color: white;
}
</style>
