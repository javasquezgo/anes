<template>
  <div>
    <anes-section />
    <anes-history-section />
    <anes-asociate />
  </div>
</template>
<script>
import AnesSection from "@/components/AnesSection.vue";
import AnesHistorySection from "@/components/AnesHistorySection.vue";
import AnesAsociate from "@/components/AnesAsociate.vue";

export default {
  name: "Home",
  components: { AnesSection, AnesHistorySection, AnesAsociate },
};
</script>
