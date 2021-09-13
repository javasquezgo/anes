import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";

//Iconos de Font awesome
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faBalanceScale,
  faAtom,
  faVoteYea,
  faHeart,
  faCubes,
  faPlaceOfWorship
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

import router from "@/router";

import AOS from "aos";
import "aos/dist/aos.css";
import EasySlider from "vue-easy-slider";

Vue.use(EasySlider);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
