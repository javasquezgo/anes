<template>
  <section>
    <anes-history-section />
    <anes-asociate />
    <!-- <anes-comites /> -->
    <anes-informacion />
  </section>
</template>
<script>
import AnesHistorySection from "@/components/AnesHistorySection.vue";
import AnesAsociate from "@/components/AnesAsociate.vue"; /* 
import AnesComites from "@/components/AnesComites.vue"; */
import AnesInformacion from "@/components/AnesInformacion.vue";

export default {
  name: "Home",
  components: {
    AnesHistorySection,
    AnesAsociate,
    AnesInformacion,
  },
};
</script>
