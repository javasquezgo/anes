<template>
  <section class="py-12 bg-white-dirty font-slab">
    <div class="flex flex-col mx-auto contain-dom lg:flex-row">
      <div class="hidden lg:flex">
        <div>
          <div
            class="
              pt-20
              mb-8
              text-center
              rounded-lg
              bg-white-clear
              h-72
              w-72
              font-slab
            "
          >
            <p class="text-6xl text-blue-text">15+</p>
            <p class="px-20 text-xl text-gray-title">Años de Experiencia</p>
          </div>
          <img
            class="rounded-lg w-72 h-72"
            width="auto"
            height="auto"
            src="@/assets/image/comite-apoyo.webp"
            alt="Comite de Apoyo"
          />
        </div>
        <div class="flex flex-col pt-8 ml-8">
          <img
            class="mb-8 rounded-lg w-72 h-72"
            width="auto"
            height="auto"
            src="@/assets/image/comite-ssames.webp"
            alt="Comite de Apoyo"
          />
          <div
            class="
              pt-20
              text-center
              rounded-lg
              bg-white-clear
              h-72
              w-72
              font-slab
            "
          >
            <p class="text-6xl text-blue-text">783</p>
            <p class="px-20 text-xl text-gray-title">Asociados</p>
          </div>
        </div>
      </div>

      <div>
        <h2
          class="
            mb-10
            text-5xl text-center
            lg:text-left lg:pl-8
            text-gray-title
          "
        >
          Asóciate
        </h2>

        <img
          class="mx-auto mb-10 rounded w-72 md:w-medium lg:hidden"
          width="auto"
          height="auto"
          src="@/assets/image/comite-apoyo.webp"
          alt="Comite de Apoyo"
        />

        <p class="px-8 text-lg text-justify font-roboto text-gray-text">
          Para ser miembro de la asociación es necesario presentar la siguiente
          información: solicitud de inscripción y de descuento de pagaduría en
          las instalaciones de la casa de la enfermera. Además número de carnet
          de la Junta de Vigilancia de la Profesión de Enfermería, fotocopia de
          título de enfermera, licenciada o tecnóloga, carta de egreso y
          fotocopia DUI y NIT.
        </p>

        <img
          class="mx-auto my-10 rounded w-72 md:w-medium lg:hidden"
          width="auto"
          height="auto"
          src="@/assets/image/comite-ssames.webp"
          alt="Comite de Apoyo"
        />

        <ul class="px-8 mt-10 list-disc list-inside text-gray-text">
          <li class="mb-5">
            <span class="mb-5"
              >Ayuda Mutua de $114.28 por fallecimiento de padres, hijos y
              esposo.</span
            >
          </li>
          <li class="mb-5"><span class="mb-5">Asesoría jurídica.</span></li>
          <li class="mb-5">
            <span
              >Participar en el galardón anual enfermería medalla Sor María
              Teresa Lang y Medalla ANES.</span
            >
          </li>
          <li class="mb-5">
            <span class="mb-5"
              >Desarrollo profesional a través de seminarios, talleres, jornadas
              científicas y congresos nacionales e internacionales.</span
            >
          </li>
          <li class="mb-5">
            <span class="mb-5"
              >Uso de auditorium de la asociación para actividades sociales y
              culturales.</span
            >
          </li>
          <li class="mb-5">
            <span class="mb-5"
              >Tener representación de organismos de enfermería: FEPPEN,
              CIE.</span
            >
          </li>
          <li class="mb-5">
            <span class="mb-5"
              >Apoyo a la solución de conflictos laborales.</span
            >
          </li>
          <li class="mb-5">
            <span class="mb-5"
              >Hacer uso del centro de cómputo en la casa de la enfermera.</span
            >
          </li>
          <li class="mb-5">
            <span class="mb-5"
              >Inscribirse en cursos de inglés y de computación.</span
            >
          </li>
        </ul>

        <router-link to="/asociate"
          ><span
            class="px-10 py-2 rounded-full lg:ml-8 bg-blue-text text-white-bone"
            >Asóciate</span
          ></router-link
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
