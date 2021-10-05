<template>
  <section class="py-10 pt-32 font-slab bg-white-dirty">
    <div
      class="
        flex
        bg-fixed bg-right-bottom bg-no-repeat bg-cover
        h-back
        bg-filial2
        md:bg-center-bottom
      "
    >
      <p
        class="
          self-center
          px-10
          py-3
          mx-auto
          text-6xl text-center
          rounded-lg
          bg-blue-soft
          text-white-bone
        "
      >
        Comités de Apoyo y Filiales
      </p>
    </div>

    <div class="mx-auto mt-24 md:flex md:justify-between contain-dom">
      <router-link to="/comite#electoral">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="vote-yea"
              class="mx-4 text-5xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">Comite Electoral</h4>
          </div>
        </div>
      </router-link>

      <router-link to="/comite#cientifico">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="atom"
              class="mx-5 text-6xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">Comite Científico</h4>
          </div>
        </div></router-link
      >

      <router-link to="/comite#etica">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="balance-scale"
              class="mx-3 text-6xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">
              Comite de Ética Profesional
            </h4>
          </div>
        </div>
      </router-link>
    </div>

    <div class="mx-auto mt-12 md:flex contain-dom md:justify-between">
      <router-link to="/comite#relaciones">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="heart"
              class="mx-5 text-6xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">
              Comite de Relaciones Públicas
            </h4>
          </div>
        </div>
      </router-link>

      <router-link to="/comite#dia">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="cubes"
              class="mx-5 text-6xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">
              Comite Pro-Mejoramiento
            </h4>
          </div>
        </div>
      </router-link>

      <router-link to="/comite#diseño">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="paint-brush"
              class="mx-5 text-6xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">
              Comité Diseño y Edición de Revista
            </h4>
          </div>
        </div>
      </router-link>
    </div>

    <div class="mx-auto mt-12 md:flex contain-dom md:justify-between">
      <router-link to="/comite#higiene">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="hand-sparkles"
              class="mx-5 text-6xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">
              Comité Higiene y seguridad Laboral
            </h4>
          </div>
        </div>
      </router-link>

      <router-link to="/comite#dia">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="house-user"
              class="mx-5 text-6xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">
              Comité Pro-casa de la Enfermera
            </h4>
          </div>
        </div>
      </router-link>

      <router-link to="/comite#estimulos">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="hands"
              class="mx-4 text-5xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">Comité Estímulos</h4>
          </div>
        </div>
      </router-link>
    </div>

    <div class="mx-auto mt-12 md:flex contain-dom md:justify-between">
      <router-link to="/comite#higiene">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="sun"
              class="mx-5 text-6xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">Comité Pro-Día</h4>
          </div>
        </div>
      </router-link>

      <router-link to="/comite#investigar">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="search-location"
              class="mx-5 text-6xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">Comité Investigación</h4>
          </div>
        </div>
      </router-link>

      <router-link to="/comite#lider">
        <div class="card-comite">
          <div
            class="
              flex
              items-center
              justify-center
              w-24
              h-24
              mx-auto
              rounded-full
              bg-blue-sky
            "
          >
            <font-awesome-icon
              icon="book-reader"
              class="mx-4 text-5xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">Comité Liderazgo</h4>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  name: "AnesComites",
  components: {},
};
</script>
