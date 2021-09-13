<template>
  <section class="py-10 pt-40 border bg-blue-soft">
    <div class="mx-auto md:flex contain-dom">
      <div class="flex h-auto mx-auto mb-10 w-72">
        <div class="w-20 h-20 rounded-full bg-blue-sky">
          <account-tie class="font-bold text-white-bone" />
        </div>
        <div class="ml-3">
          <h4 class="font-bold font-poppins">Comite Electoral</h4>
          <p class="">
            Formado con cinco miembros cuya elección es en la Asamblea General
            Ordinaria del mes de marzo del año de elecciones.
          </p>
        </div>
      </div>
      <div class="flex h-auto mx-auto mb-10 w-72">
        <div class="w-20 h-20 rounded-full bg-blue-sky">
          <orbit :size="78" class="text-white" />
        </div>
        <div class="ml-3">
          <h4 class="font-bold font-poppins">Comite Científico</h4>
          <p class="">
            Su función es planificar, organizar desarrollar en coordinación con
            Junta Directiva eventos científicos, académicos actualizados de
            acuerdo a los avances tecnológicos y los desafíos en salud.
          </p>
        </div>
      </div>
      <div class="flex h-auto mx-auto w-72">
        <div class="w-20 h-20 rounded-full bg-blue-sky">
          <animation :size="78" class="text-white" />
        </div>
        <div class="ml-3">
          <h4 class="font-bold font-poppins">Comite de ética profesional</h4>
          <p class="">
            Fomenta el respecto entre el gremio de enfermería durante el
            cumplimiento de sus actividades profesionales.
          </p>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-16 md:flex contain-dom">
      <div class="flex h-auto mx-auto mb-10 w-72">
        <div class="w-20 h-20 rounded-full bg-blue-sky">
          <heart-outline :size="78" class="text-white" />
        </div>
        <div class="ml-3">
          <h4 class="font-bold font-poppins">Comite de relaciones públicas</h4>
          <p class="">
            Encargado de promocionar objetivos, misión y visión mediante
            publicaciones verbal, escrita y virtual.
          </p>
        </div>
      </div>

      <div class="flex h-auto mx-auto mb-10 w-72">
        <div class="w-20 h-20 rounded-full bg-blue-sky">
          <briefcase-outline :size="78" class="text-white" />
        </div>
        <div class="ml-3">
          <h4 class="font-bold font-poppins">Comite Pro-Mejoramiento</h4>
          <p class="">
            Equipo responsable de generar propuestas de mejoramiento en la
            seguridad laboral prestaciones y mejoras en las condiciones
            laborales de la profesión, en coordinación con junta directiva.
          </p>
        </div>
      </div>

      <div class="flex h-auto mx-auto w-72">
        <div class="w-20 h-20 rounded-full bg-blue-sky">
          <city :size="78" class="text-white" />
        </div>
        <div class="ml-3">
          <h4 class="font-bold font-poppins">Comite de ética profesional</h4>
          <p class="">
            Fomenta el respecto entre el gremio de enfermería durante el
            cumplimiento de sus actividades profesionales.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AccountTie from "vue-material-design-icons/AccountTie.vue";
import Orbit from "vue-material-design-icons/Orbit.vue";
import Animation from "vue-material-design-icons/Animation.vue";
import HeartOutline from "vue-material-design-icons/HeartOutline.vue";
import BriefcaseOutline from "vue-material-design-icons/BriefcaseOutline.vue";
import City from "vue-material-design-icons/City.vue";

export default {
  name: "AnesComites",
  components: {
    AccountTie,
    Orbit,
    Animation,
    HeartOutline,
    BriefcaseOutline,
    City,
  },
};
</script>
