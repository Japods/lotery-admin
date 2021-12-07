import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/style.css";
import VueToast from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import VueCountdown from "@chenfengyuan/vue-countdown";
import VueCarousel from "vue-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import Spinner from "vue-spinkit";
Vue.use(VueAxios, axios);
Vue.use(VueToast);
Vue.component(VueCountdown.name, VueCountdown);
Vue.use(VueCarousel);
Vue.component("Spinner", Spinner);

Vue.config.productionTip = false;
Vue.axios.defaults.baseURL = process.env.VUE_APP_URL;

Vue.directive("ripple", {
  // When the bound element is inserted into the DOM...

  inserted: function (el) {
    // listen for click events to trigger the ripple
    el.addEventListener(
      "click",
      function (e) {
        // Setup
        var target = el.getBoundingClientRect();
        var buttonSize =
          target.width > target.height ? target.width : target.height;
        // remove any previous ripple containers
        var elements = document.getElementsByClassName("ripple");
        while (elements[0]) {
          elements[0].parentNode.removeChild(elements[0]);
        }

        // create the ripple container and append it to the target element
        var ripple = document.createElement("span");
        ripple.setAttribute("class", "ripple");
        el.appendChild(ripple);

        // set the ripple container to the click position and start the animation
        setTimeout(function () {
          ripple.style.width = buttonSize + "px";
          ripple.style.height = buttonSize + "px";
          ripple.style.top = e.offsetY - buttonSize / 2 + "px";
          ripple.style.left = e.offsetX - buttonSize / 2 + "px";
          ripple.setAttribute("class", "ripple ripple-effect");
        }, 100);
      },
      false
    );
  },
});

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
