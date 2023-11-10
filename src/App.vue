<template>
  <div id="app">
    <WelcomePage />
    <NavBarDene style="display: none" />
    <router-view style="display: none" />
    <TeklfAlButonu style="display: none" />
    <HomeFooter style="display: none" />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 400;
  color: #263238;
  font-size: 0.9rem;
}
#app {
  overflow-x: hidden;
  max-width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.h3-responsive {
  font-size: 135%;
}
@media (min-width: 576px) {
  .h3-responsive,
  .h4-responsive,
  .h5-responsive {
    font-size: 125%;
  }
}
@media (min-width: 768px) {
  .h3-responsive {
    font-size: 140%;
  }
}
</style>
<script>
import NavBarDene from "@/components/NavBarDene.vue";
import TeklfAlButonu from "@/components/TeklfAlButonu.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import WelcomePage from "@/components/WelcomePage.vue";
export default {
  name: "App",
  components: { WelcomePage, HomeFooter, TeklfAlButonu, NavBarDene },
  created() {
    this.$store.dispatch("checkScreenSize");
    window.addEventListener("resize", () => {
      this.$store.dispatch("checkScreenSize");
    });
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>
