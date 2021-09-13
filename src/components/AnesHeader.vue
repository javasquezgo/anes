<template>
  <header class="mx-auto my-4 contain-dom">
    <nav class="items-center justify-between md:flex">
      <div class="flex items-center">
        <menu-icon @click="toogle()" class="ml-4 md:hidden" />

        <img
          class="w-20 h-20 mx-auto md:m-0"
          src="@/assets/image/logo.jpg"
          alt="Logo Anes"
        />
      </div>
      <ul
        class="mt-6 font-poppins md:flex md:mt-0"
        :class="showMenu ? 'block' : 'hidden'"
      >
        <li class="nav-menu">
          <router-link to="/">Inicio</router-link>
        </li>

        <li class="nav-menu">
          <router-link to="/quienes-somos">Quienes Somos</router-link>
        </li>

        <li class="nav-menu">
          <a href="#"><span>Asóciate</span></a>
        </li>
        <li class="nav-menu">
          <a href="#"><span>Comités</span></a>
        </li>
        <li class="nav-menu">
          <a href="#"><span>Que hacemos</span></a>
        </li>
        <li class="nav-menu">
          <a href="#"><span>Convenios</span></a>
        </li>
        <li class="nav-menu">
          <a href="#"><span>Contacto</span></a>
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
