<template>
  <main>
    <anes-header />
    <anes-carusel />
    <router-view />
    <anes-footer />
  </main>
</template>

<script>
import AnesHeader from "@/components/AnesHeader.vue";
import AnesFooter from "@/components/AnesFooter.vue";
import AnesCarusel from "@/components/AnesCarusel.vue";

export default {
  name: "App",
  components: { AnesHeader, AnesFooter, AnesCarusel },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
