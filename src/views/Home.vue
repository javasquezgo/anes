<template>
  <section class="overflow-x-hidden">
    <anes-carusel />
    <anes-votacion />
    <anes-history-section />
    <anes-comites />
  </section>
</template>
<script>
import AnesHistorySection from "@/components/AnesHistorySection.vue";
import AnesComites from "@/components/AnesComites.vue";

import AnesVotacion from "@/components/AnesVotacion.vue";
import AnesCarusel from "@/components/AnesCarusel.vue";

export default {
  name: "Home",
  components: {
    AnesHistorySection,
    AnesComites,
    AnesVotacion,
    AnesCarusel,
  },
};
</script>
