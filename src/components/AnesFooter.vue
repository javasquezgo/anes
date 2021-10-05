<template>
  <footer class="py-16 bg-gray-500">
    <div class="mx-auto contain-dom lg:flex lg:justify-between">
      <div class="flex flex-col mb-14 md:flex-row">
        <div class="flex self-center w-48 h-48 rounded-full bg-white-bone">
          <img
            class="self-center mx-auto"
            width="128px"
            height="128px"
            src="@/assets/image/logo.jpg"
            alt="Logo Anes"
          />
        </div>
        <div class="text-white-bone font-slab">
          <h4 class="my-4 font-bold text-center md:text-left md:ml-9">ANES</h4>
          <p class="px-7 md:w-96">
            Calle antigua a Huizucar, No. 157, Reparto Los Héroes, entre calles:
            Gabriel Rosales y Matías Alvarado, San Salvador, El Salvador, C.A.
            <br />Tel: 2248-2430, 2248-2431, Fax: 2248-2430,
            <br />aneselsalvador@anes.org.sv <br />Apartado Postal No. 01-163
            <br />SSAMANES: 227322-75
          </p>
        </div>
      </div>
      <div class="flex items-center justify-between px-5 md:justify-evenly">
        <div
          class="
            flex
            items-center
            justify-center
            w-32
            h-32
            rounded-full
            lg:mr-10
            bg-white-clear
          "
        >
          <a href="https://www.facebook.com/anes.elsavador">
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
              class="mx-4 text-7xl facebook"
            />
          </a>
        </div>
        <div
          class="
            flex
            items-center
            justify-center
            w-32
            h-32
            rounded-full
            bg-white-clear
          "
        >
          <a href="https://twitter.com/anessalvador?lang=es">
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              class="mx-4 text-7xl twitter"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
.twitter {
  color: #1d9bf0;
}

.facebook {
  color: #087aea;
}
</style>
