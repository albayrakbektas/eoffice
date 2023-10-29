<template>
  <div class="home">
    <HomeCover />
    <HeroAdvantage />
    <SSS />
    <HeroPlazaCount />
    <HeroShareNetwork />
    <HeroActivity />
    <HeroCall />
    <HeroActivityPlace />
    <WhyEOffice />
    <HeroDene />
    <HomeFooter />
  </div>
</template>

<script>
// import HomeCover from "@/components/HomeCover.vue";
import SSS from "@/views/SssView.vue";
import HeroPlazaCount from "@/components/HeroPlazaCount.vue";
import HeroShareNetwork from "@/components/HeroShareNetwork.vue";
import HeroActivity from "@/components/HeroActivity.vue";
import HeroCall from "@/components/HeroCall.vue";
import HeroActivityPlace from "@/components/HeroActivityPlace.vue";
import WhyEOffice from "@/components/WhyEOffice.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import HeroDene from "@/components/HeroDene.vue";
import HeroAdvantage from "@/components/HeroAdvantage.vue";
import HomeCover from "@/components/HomeCover.vue";

export default {
  name: "HomeView",
  components: {
    HomeCover,
    HeroAdvantage,
    HeroDene,
    HomeFooter,
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
