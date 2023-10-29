<template>
  <div class="home">
    <HomeCover />
    <OfficeTypeCardMobileList />
    <FeaturesSection />
    <SSS />
    <HeroPlazaCount />
    <HeroShareNetwork />
    <HeroActivity />
    <HeroCall />
    <HeroActivityPlace />
    <WhyEOffice />
    <HomeFooter />
  </div>
</template>

<script>
import HomeCover from "@/components/HomeCover.vue";
import SSS from "@/components/SSS.vue";
import OfficeTypeCardMobileList from "@/components/OfficeTypeCardMobileList.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import HeroPlazaCount from "@/components/HeroPlazaCount.vue";
import HeroShareNetwork from "@/components/HeroShareNetwork.vue";
import HeroActivity from "@/components/HeroActivity.vue";
import HeroCall from "@/components/HeroCall.vue";
import HeroActivityPlace from "@/components/HeroActivityPlace.vue";
import WhyEOffice from "@/components/WhyEOffice.vue";
import HomeFooter from "@/components/HomeFooter.vue";

export default {
  name: "HomeView",
  components: {
    HomeFooter,
    WhyEOffice,
    HeroActivityPlace,
    HeroCall,
    HeroActivity,
    HeroShareNetwork,
    HeroPlazaCount,
    FeaturesSection,
    OfficeTypeCardMobileList,
    SSS,
    HomeCover,
  },
};
</script>
