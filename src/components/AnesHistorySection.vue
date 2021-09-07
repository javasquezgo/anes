<template>
  <section
    class="
      text-white
      flex
      h-auto
      bg-blue-anes
      font-poppins
      py-20
      overflow-hidden
    "
  >
    <div class="contain-dom md:flex mx-auto">
      <div
        class="
          flex flex-col
          items-center
          relative
          mx-auto
          md:items-start md:w-1/2
        "
      >
        <img
          class="left-40 bottom-14 absolute z-0 md:hidden"
          src="@/assets/image/bubble.svg"
          alt="Decoracion"
        />
        <h2 class="font-bold text-2xl z-10 mb-7">Nuestra Historia</h2>
        <p
          class="
            font-medium
            px-6
            text-center
            z-10
            mb-10
            md:px-0 md:text-left md:w-80
            leading-8
          "
        >
          El cuidado de Enfermería nace como una práctica social, en el cuidado
          de los enfermos e inicia su institucionalización por los años de 1841
          en el Hospital San Patricio con las hermanas de la Caridad con un
          modelo de caridad cristiana.
        </p>
        <a href="#"
          ><span class="py-2 px-12 rounded-md bg-blue-sky">Leer más</span></a
        >
      </div>
      <figure class="hidden md:relative md:flex md:w-1/2">
        <img
          class="
            h-80
            w-80
            md:h-52 md:w-52
            lg:h-72 lg:w-72
            md:absolute
            left-9
            lg:left-0
          "
          src="@/assets/image/bubble.svg"
          alt=""
        />
        <img
          class="
            h-40
            w-40
            md:h-40 md:w-40
            lg:h-48 lg:w-48
            md:absolute
            right-5
            bottom-2
            lg:right-0
          "
          src="@/assets/image/bubble.svg"
          alt=""
        />
        <img
          class="
            h-20
            w-20
            md:h-28 md:w-28
            lg:h-32 lg:w-32
            md:absolute md:left-64
            lg:left-96
            right-5
          "
          src="@/assets/image/bubble.svg"
          alt=""
        />
      </figure>
    </div>
  </section>
</template>
<script>
export default {};
</script>
