<script>
import OfficeTypeCardMobile from "@/components/OfficeTypeCardMobile.vue";

export default {
  name: "OfficeTypeCardMobileList",
  components: { OfficeTypeCardMobile },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>

<template>
  <div class="my-3" v-if="isMobile">
    <OfficeTypeCardMobile />
    <OfficeTypeCardMobile />
    <OfficeTypeCardMobile />
    <OfficeTypeCardMobile />
  </div>
</template>

<style scoped lang="scss"></style>
