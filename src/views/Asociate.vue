<template>
  <section class="pt-12">
    <div class="py-12 mx-auto contain-dom font-slab text-gray-text">
      <h2 class="mb-10 text-5xl font-bold text-center">¡Asóciate!</h2>
      <p class="text-3xl font-semibold text-center">
        ¿Deseas ser parte de nuestra asociación?
      </p>
      <p class="mt-10 text-5xl font-bold text-center">Requisitos</p>
      <p class="px-3 mt-10 text-lg md:px-10 md:text-justify">
        Para ser miembro de la asociación es necesario presentar la siguiente
        información: solicitud de inscripción y de descuento de pagaduría en las
        instalaciones de la casa de la enfermera. Además número de carnet de la
        Junta de Vigilancia de la Profesión de Enfermería, fotocopia de título
        de enfermera, licenciada o tecnóloga, carta de egreso y fotocopia DUI y
        NIT.
      </p>
    </div>

    <div class="py-12 bg-white-bone">
      <div
        class="
          mx-auto
          contain-dom
          font-slab
          text-gray-text
          lg:flex lg:justify-between
        "
      >
        <div class="px-6 mb-10 lg:w-1/3">
          <h3 class="mb-5 text-5xl font-bold text-center">Beneficios</h3>
          <ul class="leading-6 list-disc list-outside">
            <li>
              <span
                >Ayuda Mutua de $114.28 por fallecimiento de padres, hijos y
                esposo.</span
              >
            </li>
            <li><span>Asesoría jurídica.</span></li>
            <li>
              <span
                >Participar en el galardón anual enfermería medalla Sor María
                Teresa Lang y Medalla ANES.</span
              >
            </li>
            <li>
              <span
                >Desarrollo profesional a través de seminarios, talleres,
                jornadas científicas y congresos nacionales e
                internacionales.</span
              >
            </li>
            <li>
              <span
                >Uso de auditorium de la asociación para actividades sociales y
                culturales.</span
              >
            </li>
            <li>
              <span
                >Tener representación de organismos de enfermería: FEPPEN,
                CIE</span
              >
            </li>
            <li><span>Apoyo a la solución de conflictos laborales.</span></li>
            <li>
              <span
                >Hacer uso del centro de cómputo en la casa de la
                enfermera.</span
              >
            </li>
            <li>
              <span>Inscribirse en cursos de inglés y de computación.</span>
            </li>
          </ul>
        </div>

        <div class="px-6 mb-10 lg:w-1/3">
          <h3 class="mb-5 text-5xl font-bold text-center">Derechos</h3>
          <ul class="leading-6 list-disc list-outside">
            <li>
              <span
                >Tener voz y voto en las asambleas ordinarias y
                extraordinarias.</span
              >
            </li>
            <li>
              <span
                >Proponer y optar a cargos en Junta Directiva y filiales.</span
              >
            </li>
            <li>
              <span
                >Solicitar convocatorias para asambleas extraordinarias.</span
              >
            </li>
            <li>
              <span
                >Solicitar mediación de la Junta Directiva sobre cualquier
                problema que suscitara en la administración de la
                asociación.</span
              >
            </li>
            <li>
              <span
                >Reclamar sobre cualquier anomalía o irregularidad que fuera,
                advertida en el funcionamiento administrativo de la
                Asociación.</span
              >
            </li>
            <li>
              <span>Ser beneficiario de programas de formación</span>
            </li>
          </ul>
        </div>

        <div class="px-6 lg:w-1/3">
          <h3 class="mb-5 text-5xl font-bold text-center">Deberes</h3>
          <ul class="leading-6 list-disc list-outside">
            <li>
              <span
                >Asistir puntualmente a las sesiones ordinarias y
                extraordinarias.</span
              >
            </li>
            <li>
              <span>Cooperar en las actividades propias de la asociación.</span>
            </li>
            <li>
              <span
                >Acatar las decisiones emitidas por los órganos de la
                asociación.</span
              >
            </li>
            <li>
              <span
                >Cancelar las cuotas de ingreso, mensuales y extraordinarias que
                se acuerden en la asamblea.</span
              >
            </li>
            <li>
              <span
                >Colaborar en el desarrollo de actividades que contribuyan al
                logro de los objetivos de la asociación.</span
              >
            </li>
            <li>
              <span
                >Aceptar y cumplir con eficiencia cualquier cargo o comisión
                para lo que han sido electos o designados según estatutos,
                reglamentos internos o acuerdo, resoluciones de asamblea de
                socias y demás órganos.</span
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="
        py-12
        mx-auto
        contain-dom
        font-slab
        text-gray-text
        lg:flex lg:justify-between
      "
    >
      <div class="flex flex-col items-center mb-10 lg:w-1/3">
        <img
          class="h-72 md:h-80"
          width="auto"
          height="auto"
          src="@/assets/image/comite-apoyo.webp"
          alt="Comite de Apoyo"
        />
        <h3 class="mt-10 text-3xl font-bold text-center">Comités de Apoyo</h3>
        <p class="px-8 mb-5 text-justify lg:mb-28">
          La asociación se encuentra conformada por comités. Estos equipos de
          trabajo representan gran importancia como apoyo al logro de los
          objetivos de la asociación.
        </p>
        <router-link to="/comites">
          <span class="px-10 py-3 rounded-lg text-white-bone bg-blue-sky"
            >Ver Comités</span
          >
        </router-link>
      </div>

      <div class="flex flex-col items-center mb-10 lg:w-1/3">
        <img
          class="h-72 md:h-80"
          width="auto"
          height="auto"
          src="@/assets/image-webp/comite-ssamanes/Image02.webp"
          alt="Comite de Apoyo"
        />
        <h3 class="mt-10 text-3xl font-bold text-center">Comités SSAMANES</h3>
        <p class="px-8 mb-5 text-justify">
          Asamblea General de ANES del 23 de agosto de 1985, se estableció el
          Sistema de Servicios y Auxilios Mutuos de la Asociación Nacional de
          Enfermeras de El Salvador SSAMANES, el cual funciona con una cuota
          extraordinaria que sirve para conceder ayudas económicas por vejez,
          invalidez y deceso de sus usuarias(os), en los términos de su
          Reglamento.
        </p>
        <router-link to="/comites">
          <span class="px-10 py-3 rounded-lg text-white-bone bg-blue-sky"
            >Más información</span
          >
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Asociate",
};
</script>
