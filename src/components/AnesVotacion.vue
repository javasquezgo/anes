<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      py-12
      mx-auto
      contain-dom
      font-slab
    "
  >
    <h3
      class="
        px-10
        my-10
        mt-24
        text-5xl
        font-bold
        text-center
        uppercase
        md:px-40
        xl:px-80
        text-gray-title
      "
    >
      Elecciones Junta Directiva 2021-2024
    </h3>

    <img
      class="w-11/12 mb-10 md:w-7/12 md:mb-20"
      width="auto"
      height="auto"
      src="@/assets/image-webp/Postulacion1.webp"
      alt="Informacion de votacion"
    />

    <router-link to="/votacion#votar"
      ><span
        class="
          px-10
          py-3
          rounded-2xl
          md:text-5xl
          bg-blue-text
          hover:shadow-2xl
          text-white-clear
          md:px-20 md:py-10 md:my-10
        "
      >
        Planillas</span
      ></router-link
    >
    <img
      class="mt-8 text-center xl:w-8/12 md:mt-32"
      width="auto"
      height="auto"
      src="@/assets/image/elecciones.webp"
      alt="Dibujo de votacion"
    />
  </div>
</template>
