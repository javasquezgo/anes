import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Error from "@/views/Error";
import QuienesSomos from "@/views/QuienesSomos.vue";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
    {
      path: "/quienes-somos",
      name: "quienes-somos",
      component: QuienesSomos,
    },
  ],
});
