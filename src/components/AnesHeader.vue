<template>
  <header class="font-slab">
    <div class="flex items-center justify-between h-16 mb-4 shadow-md lg:px-16">
      <div class="flex items-center">
        <font-awesome-icon
          :icon="['far', 'clock']"
          class="mx-4 text-xl text-blue-sky"
        />
        <p class="text-gray-text">
          Horario: Lunes - Viernes 8:00 a.m. - 5:00 p.m.
        </p>
      </div>
      <div class="flex items-center">
        <a href="https://www.facebook.com/anes.elsavador">
          <font-awesome-icon
            :icon="['fab', 'facebook-f']"
            class="mx-4 text-xl text-blue-sky"
          />
        </a>

        <a href="https://twitter.com/anessalvador?lang=es">
          <font-awesome-icon
            :icon="['fab', 'twitter']"
            class="mx-4 text-xl text-blue-sky"
          />
        </a>
      </div>
    </div>

    <nav class="items-center justify-between mx-auto mb-4 md:flex contain-dom">
      <div class="flex items-center">
        <menu-icon @click="toogle()" class="ml-4 md:hidden" />

        <img
          class="w-20 h-20 mx-auto md:m-0"
          src="@/assets/image/logo.jpg"
          alt="Logo Anes"
        />
      </div>
      <ul
        class="mt-6 font-bold font-slab md:flex md:mt-0"
        :class="showMenu ? 'block' : 'hidden'"
      >
        <li class="nav-menu">
          <router-link to="/">Inicio</router-link>
        </li>

        <li class="nav-menu">
          <router-link to="/quienes-somos">Quienes Somos</router-link>
        </li>

        <li class="nav-menu">
          <router-link to="/asociate">Asóciate</router-link>
        </li>

        <li class="nav-menu">
          <router-link to="/comite">Comités</router-link>
        </li>
        <li class="nav-menu">
          <router-link to="/ssamanes">SSAMANES</router-link>
        </li>
        <li class="nav-menu">
          <router-link to="/votacion"><span>Votación</span></router-link>
        </li>
        <li class="nav-menu">
          <router-link to="/contacto">Contacto</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";

export default {
  name: "AnesHeader",
  data() {
    return {
      showMenu: false,
    };
  },
  components: {
    MenuIcon,
  },

  methods: {
    toogle() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
