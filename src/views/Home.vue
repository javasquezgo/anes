<template>
  <section class="overflow-x-hidden">
    <anes-carusel />
    <anes-votacion />
    <anes-history-section />
    <anes-comites />
    <anes-ssamanes />
    <anes-informacion />
  </section>
</template>
<script>
import AnesHistorySection from "@/components/AnesHistorySection.vue";
import AnesComites from "@/components/AnesComites.vue";
import AnesInformacion from "@/components/AnesInformacion.vue";
import AnesSsamanes from "@/components/AnesSsamanes.vue";
import AnesVotacion from "@/components/AnesVotacion.vue";
import AnesCarusel from "@/components/AnesCarusel.vue";

export default {
  name: "Home",
  components: {
    AnesHistorySection,
    AnesComites,
    AnesInformacion,
    AnesSsamanes,
    AnesVotacion,
    AnesCarusel,
  },
};
</script>
