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
    <SSS />
  </div>
</template>

<script>
import SSS from "@/views/SssView.vue";
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
    SSS,
  },
};
</script>
