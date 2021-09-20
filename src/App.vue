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
  data() {
    return {
      list: [],
      sliderValue: 2,
    };
  },
  methods: {
    changeIndex(index) {
      this.sliderValue = index;
    },
  },
  mounted() {
    setTimeout(
      () =>
        (this.list = [
          {
            background:
              "url('https://scontent.fsal5-1.fna.fbcdn.net/v/t39.30808-6/185246004_6090166331000816_970635483258011755_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_aid=0&_nc_ohc=lKI75dDJKB8AX8Kf9ZQ&_nc_ht=scontent.fsal5-1.fna&oh=5c565854229f2ea66c779e764213b7ee&oe=61406D95')",
            width: "100%",
            height: "100%",
            texto: "Hola",
          } /* 
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%",
            texto: "Dios-Libertad-Humanidad",
          },
          {
            backgroundColor: "#f44336",
            width: "100%",
            height: "100%",
            texto: "Dios-Libertad-Humanidad",
          },
          {
            backgroundColor: "#eee",
            width: "100%",
            height: "100%",
            texto: "Dios-Libertad-Humanidad",
          }, */,
        ]),
      1000
    );
  },
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
