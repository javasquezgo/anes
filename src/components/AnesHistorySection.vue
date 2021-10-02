<template>
  <section
    class="flex h-auto py-16 pb-0 overflow-hidden  xl:pb-0 font-slab lg:py-20 bg-white-dirty"
  >
    <div class="mx-auto contain-dom md:flex md:justify-between">
      <div
        class="flex flex-col items-center mx-auto  md:items-start md:w-1/2 lg:m-0 lg:my-auto"
      >
        <h2 class="z-10 text-2xl font-bold text-gray-title md:text-6xl mb-7">
          Nuestra Historia
        </h2>
        <p
          class="px-6 mb-10 font-medium leading-8 text-center text-justify  text-gray-text md:text-2xl md:px-0 md:w-80 lg:w-9/12"
        >
          El cuidado de Enfermería nace como una práctica social, en el cuidado
          de los enfermos e inicia su institucionalización por los años de 1841
          en el Hospital San Patricio con las hermanas de la Caridad con un
          modelo de caridad cristiana.
        </p>
        <router-link to="/historia">
          <span
            class="px-12 py-4 text-lg rounded-full  font-slab bg-blue-sky text-white-bone"
            >Leer más</span
          >
        </router-link>
      </div>

      <figure class="mt-10">
        <img
          class="w-11/12 mx-auto rounded xl:w-medium"
          width="auto"
          height="auto"
          src="@/assets/image-webp/Historia-SorMariaTeresaLang.webp"
          alt="Historia de Anes"
        />
      </figure>

      <!-- <figure class="hidden md:relative md:flex md:w-1/2">
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="500"
          class=" h-80 w-80 md:h-52 md:w-52 lg:h-72 lg:w-72 md:absolute left-9 lg:left-0"
          src="@/assets/image/bubble.svg"
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="750"
          class="w-40 h-40 md:h-40 md:w-40 lg:h-48 lg:w-48 md:absolute right-5 bottom-2 lg:right-0"
          src="@/assets/image/bubble.svg"
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="1000"
          class="w-20 h-20 md:h-28 md:w-28 lg:h-32 lg:w-32 md:absolute md:left-64 lg:left-96 right-5"
          src="@/assets/image/bubble.svg"
          alt=""
        />
      </figure> -->
    </div>
  </section>
</template>
<script>
export default {};
</script>
