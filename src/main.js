import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "@/router";

import AOS from "aos";
import "aos/dist/aos.css";
import EasySlider from 'vue-easy-slider'
 
Vue.use(EasySlider)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  mounted() {
    AOS.init();
  },
}).$mount("#app");
