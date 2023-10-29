<script>
import GreyInfoCard from "@/components/GreyInfoCard.vue";
import BCarousel from "@/components/BCarousel.vue";

export default {
  name: "HomeCover",
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
  components: { BCarousel, GreyInfoCard },
};
</script>

<template>
  <div
    :class="isMobile ? 'cover-container-mobile' : ''"
    class="cover-container d-flex p-3 mx-auto flex-column"
  >
    <main class="px-3">
      <div :class="isMobile ? 'main-top-mobile' : ''" class="main-top">
        <h1>Cover your page.</h1>
        <p class="lead">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
      </div>
      <div
        v-if="!isMobile"
        class="main-bot d-flex justify-content-between"
        style="max-height: 45vh; width: 65vw"
      >
        <BCarousel />
      </div>
      <div class="grey-card-container w-100 row mx-auto" v-if="isMobile">
        <div class="col-3">
          <GreyInfoCard />
        </div>
        <div class="col-3">
          <GreyInfoCard />
        </div>
        <div class="col-3">
          <GreyInfoCard />
        </div>
        <div class="col-3">
          <GreyInfoCard />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.cover-container {
  height: 100vh;
  background-image: url("https://picsum.photos/1200");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.cover-container-mobile {
  height: 50vh;
}
.main-top {
  position: absolute;
  left: 50%;
  top: 20%;
  translate: -50% 20%;
  text-align: center;
}
.main-top-mobile {
  top: 12.5%;
  left: 50%;
  translate: -50% 12.5%;
  width: 80%;
  h1 {
    font-size: 135%;
  }
  p {
    font-size: 85%;
  }
}
.main-bot {
  position: absolute;
  left: 25%;
  bottom: 0;
  margin: 0 auto;
  translate: -25% 0;
  overflow: hidden;
}
.grey-card-container {
  position: absolute;
  top: 37.5%;
  left: 0;
  z-index: 9;
  .col-3 {
    padding: 0 0.25rem !important;
  }
}
</style>
