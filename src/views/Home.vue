<template>
  <div>
    <anes-section />
    <anes-history-section />
    <anes-asociate />
    <anes-comites />
    <anes-informacion />
  </div>
</template>
<script>
import AnesSection from "@/components/AnesSection.vue";
import AnesHistorySection from "@/components/AnesHistorySection.vue";
import AnesAsociate from "@/components/AnesAsociate.vue";
import AnesComites from "@/components/AnesComites.vue";
import AnesInformacion from "@/components/AnesInformacion.vue";

export default {
  name: "Home",
  components: {
    AnesSection,
    AnesHistorySection,
    AnesAsociate,
    AnesComites,
    AnesInformacion,
  },
};
</script>
