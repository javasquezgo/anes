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
    <router-link to="/votacion"
      ><span class="px-10 py-3 rounded-lg bg-blue-text text-white-bone">
        Votación</span
      ></router-link
    >
    <img
      data-aos="zoom-out-down"
      data-aos-duration="700"
      class="mt-8 text-center xl:w-8/12"
      width="auto"
      height="auto"
      src="@/assets/image/elecciones.webp"
      alt="Dibujo de votacion"
    />
  </div>
</template>
