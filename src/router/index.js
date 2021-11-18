import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/app",
    component: () => import("@/layouts/Core.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "/",
        name: "Transacciones",
        component: () => import("@/views/Transactions/Transactions.vue"),
      },
      {
        path: "games",
        name: "Games",
        component: () => import("@/views/Games/Games.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("@/layouts/Auth.vue"),
    children: [
      {
        path: "/",
        name: "Login",
        component: () => import("@/views/Auth/Login/Login.vue"),
      },
    ],
  },
  {
    path: "/",
    name: "Landing",
    component: () => import("@/views/Landing/Landing.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters["auth/GET_TOKEN"]) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }

  window.scrollTo(0, 0);
  next();
});

export default router;
