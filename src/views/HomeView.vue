<template>
  <div class="home">
    <HomeCover />
    <OfficeTypeCardMobileList />
    <HeroAdvantage />
    <HeroPlazaCount />
    <HeroShareNetwork />
    <HeroActivity />
    <HeroCall />
    <HeroActivityPlace />
    <WhyEOffice />
  </div>
</template>

<script>
import HeroPlazaCount from "@/components/HeroPlazaCount.vue";
import HeroShareNetwork from "@/components/HeroShareNetwork.vue";
import HeroActivity from "@/components/HeroActivity.vue";
import HeroCall from "@/components/HeroCall.vue";
import HeroActivityPlace from "@/components/HeroActivityPlace.vue";
import WhyEOffice from "@/components/WhyEOffice.vue";
import HeroAdvantage from "@/components/HeroAdvantage.vue";
import HomeCover from "@/components/HomeCover.vue";
import OfficeTypeCardMobileList from "@/components/OfficeTypeCardMobileList.vue";

export default {
  name: "HomeView",
  metaInfo() {
    return {
      title: this.$t("seo.homeView.title"),
      meta: [
        {
          vmid: "description",
          name: "description",
          content: this.$t("seo.homeView.description"),
        },
      ],
    };
  },
  components: {
    OfficeTypeCardMobileList,
    HomeCover,
    HeroAdvantage,
    WhyEOffice,
    HeroActivityPlace,
    HeroCall,
    HeroActivity,
    HeroShareNetwork,
    HeroPlazaCount,
  },
};
</script>
