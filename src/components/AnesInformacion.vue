<template>
  <section
    class="
      bg-center bg-no-repeat bg-cover
      font-slab
      md:bg-filial2
      bg-enfermeraMovil
    "
  >
    <div class="relative flex justify-center height-section">
      <div
        data-aos="zoom-out-down"
        data-aos-duration="1500"
        data-aos-delay="750"
        class="
          absolute
          flex flex-col
          items-center
          px-5
          mx-auto
          bg-white
          bottom-20
          rounded-3xl
          information-card
          bg-white-bone
        "
      >
        <h3 class="mt-12 mb-4 text-xl font-bold text-gray-500">
          Información de contacto
        </h3>
        <div class="flex flex-col">
          <div class="flex items-center mb-3">
            <phone-check class="text-gray-500 md:mr-6" />
            <p>2248-2430, 2248-2431</p>
          </div>
          <div class="flex items-center mb-3">
            <email class="text-gray-500 md:mr-6" />
            <p>aneselsalvador@anes.org.sv</p>
          </div>
          <div class="flex items-center">
            <map-marker class="text-gray-500 md:mr-6" />
            <p>Calle antigua a Huizucar No. 157, Reparto Los Héroes</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import PhoneCheck from "vue-material-design-icons/PhoneCheck.vue";
import Email from "vue-material-design-icons/Email.vue";
import MapMarker from "vue-material-design-icons/MapMarker.vue";

export default {
  name: "AnesInformacion",
  components: { PhoneCheck, Email, MapMarker },
};
</script>
