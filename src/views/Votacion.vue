<template>
  <section
    class="flex flex-col items-center justify-center pb-20 text-center"
    id="votar"
  >
    <h2 class="mt-16 mb-10 text-5xl text-gray-title">Planillas</h2>

    <img
      class="w-11/12 mb-10 md:w-7/12 lg:w-4/12 md:mb-20"
      width="auto"
      height="auto"
      src="@/assets/image-webp/Postulacion2.webp"
      alt="Informacion de votacion"
    />

    <a href="https://dev1.heavywebdesign.com/2pixanes/elecciones"
      ><span
        class="
          px-10
          py-3
          rounded-lg
          hover:shadow-xl
          bg-blue-soft
          text-white-bone
        "
        >Enlace de Votación</span
      ></a
    >

    <div class="py-10"></div>

    <router-link to="/planilla"
      ><span
        class="
          px-20
          py-3
          rounded-lg
          hover:shadow-xl
          bg-blue-soft
          text-white-bone
        "
      >
        Planillas</span
      ></router-link
    >

    <!-- <div class="py-10"></div>

    <router-link to="/"
      ><span
        class="px-10 py-3 rounded-lg hover:shadow-xl bg-blue-soft text-white-bone"
      >
        Volver a inicio</span
      ></router-link
    > -->
  </section>
</template>
