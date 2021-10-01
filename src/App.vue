<template>
  <main>
    <anes-header />
    <router-view />
    <anes-footer />
  </main>
</template>

<script>
import AnesHeader from "@/components/AnesHeader.vue";
import AnesFooter from "@/components/AnesFooter.vue";

export default {
  name: "App",
  components: { AnesHeader, AnesFooter },
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
