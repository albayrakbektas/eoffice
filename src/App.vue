<template>
  <div id="app">
    <NavBar />
    <router-view />
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
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
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
