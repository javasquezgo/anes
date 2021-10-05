import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

//Iconos de Font awesome
import { faBalanceScale } from "@fortawesome/free-solid-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";
import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faHandSparkles } from "@fortawesome/free-solid-svg-icons";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faHands } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { faBookReader } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faBalanceScale,
  faAtom,
  faVoteYea,
  faHeart,
  faCubes,
  faPlaceOfWorship,
  faClock,
  faFacebookF,
  faTwitter,
  faHandSparkles,
  faHouseUser,
  faHands,
  faSun,
  faSearchLocation,
  faBookReader,
  faPaintBrush
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
