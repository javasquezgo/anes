<template>
  <section class="py-10 pt-32 font-slab bg-white-dirty">
    <div
      class="
        flex
        bg-right-bottom bg-no-repeat bg-cover
        h-back
        bg-filial2
        md:bg-center-bottom
      "
    >
      <p class="self-center px-10 mx-auto text-6xl text-center text-white-bone">
        Comités de Apoyo y Filiales
      </p>
    </div>

    <div class="mx-auto mt-24 md:flex md:justify-between contain-dom">
      <div class="card-comite">
        <router-link to="/comite">
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
        </router-link>
      </div>

      <div class="card-comite">
        <router-link to="/comite">
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
          </div></router-link
        >
      </div>

      <div class="card-comite">
        <router-link to="/comite">
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
              Comite de ética profesional
            </h4>
          </div>
        </router-link>
      </div>
    </div>

    <div class="mx-auto mt-12 md:flex contain-dom">
      <div class="card-comite">
        <router-link to="/comite">
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
              Comite de relaciones públicas
            </h4>
          </div>
        </router-link>
      </div>

      <div class="card-comite">
        <router-link to="/comite">
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
        </router-link>
      </div>

      <div class="card-comite">
        <router-link to="/comite">
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
              icon="place-of-worship"
              class="mx-4 text-5xl text-white-bone"
            />
          </div>
          <div class="mt-10 text-center">
            <h4 class="mb-5 font-bold text-gray-title">
              Comite de ética profesional
            </h4>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "AnesComites",
  components: {},
};
</script>
