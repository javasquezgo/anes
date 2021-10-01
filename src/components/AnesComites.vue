<template>
  <section class="py-10 pt-40 font-slab bg-white-dirty">
    <div class="mx-auto md:flex md:justify-between contain-dom">
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
