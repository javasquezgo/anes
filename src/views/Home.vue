<template>
  <div>
    <anes-section />
    <anes-history-section />
  </div>
</template>
<script>
import AnesSection from "@/components/AnesSection.vue";
import AnesHistorySection from "@/components/AnesHistorySection.vue";

export default {
  name: "Home",
  components: { AnesSection, AnesHistorySection },
};
</script>
