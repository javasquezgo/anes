import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Error from "@/views/Error";
import QuienesSomos from "@/views/QuienesSomos.vue";
import Historia from "@/views/Historia.vue";
import Asociate from "@/views/Asociate.vue";
import Contacto from "@/views/Contacto.vue";

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
      path: "/quienes-somos",
      name: "quienes-somos",
      component: QuienesSomos,
    },
    {
      path: "/historia",
      name: "historia",
      component: Historia,
    },
    {
      path: "/asociate",
      name: "asociate",
      component: Asociate,
    },
    {
      path: "/contacto",
      name: "contacto",
      component: Contacto,
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});
