<template>
  <section class="overflow-x-hidden">
    <anes-votacion />
    <anes-history-section />
    <anes-comites />
    <anes-asociate />
    <anes-ssamanes />
    <anes-informacion />
  </section>
</template>
<script>
import AnesHistorySection from "@/components/AnesHistorySection.vue";
import AnesAsociate from "@/components/AnesAsociate.vue";
import AnesComites from "@/components/AnesComites.vue";
import AnesInformacion from "@/components/AnesInformacion.vue";
import AnesSsamanes from "@/components/AnesSsamanes.vue";
import AnesVotacion from "@/components/AnesVotacion.vue";

export default {
  name: "Home",
  components: {
    AnesHistorySection,
    AnesComites,
    AnesAsociate,
    AnesInformacion,
    AnesSsamanes,
    AnesVotacion,
  },
};
</script>
