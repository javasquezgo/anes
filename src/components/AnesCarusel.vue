<template>
  <section class="font-slab">
    <VueSlickCarousel v-bind="setting">
      <div class="bg-center bg-cover h-back bg-nurses">
        <div class="flex flex-col items-center justify-center">
          <h3
            class="
              mb-10
              text-3xl
              font-bold
              text-center
              md:text-5xl
              text-white-bone
              mt-60
            "
          >
            DIOS-UNION-HUMANIDAD
          </h3>
          <router-link
            class="
              px-10
              py-3
              text-xl
              rounded-lg
              md:text-3xl
              text-white-bone
              bg-blue-sky
            "
            to="/"
            >Contactanos
          </router-link>
        </div>
      </div>
      <div class="bg-right bg-cover h-back bg-hands">
        <div class="flex flex-col items-center justify-center">
          <h3
            class="
              mb-10
              text-3xl
              font-bold
              text-center text-gray-title
              md:text-5xl
              mt-60
            "
          >
            Profesionales de Enfermería
          </h3>
          <router-link
            class="
              px-10
              py-3
              text-xl
              rounded-lg
              md:text-3xl
              text-white-bone
              bg-blue-sky
            "
            to="/historia"
            >Nuestra Historia</router-link
          >
        </div>
      </div>
    </VueSlickCarousel>
  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "AnesCarusel",
  components: { VueSlickCarousel },
  data() {
    return {
      setting: {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 7000,
        cssEase: "linear",
      },
    };
  },
};
</script>
