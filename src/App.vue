<template>
  <div id="app">
    <header>
      <NavBarDene />
    </header>
    <router-view />
    <TeklfAlButonu />
    <HomeFooter ref="footer" />
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
// title -> 13, 60, 85, 1
// text -> 50, 50, 50, 1
// background -> 245, 245, 245, 1
// links -> 0, 123, 255, 1
// icons -> 30, 136, 229, 1
// bold -> 255, 167, 38, 1
.custom-text,
p {
  color: rgba(50, 50, 50, 1) !important;
}
.custom-bg {
  color: rgba(245, 245, 245, 1) !important;
}
.custom-link,
a {
  color: rgba(128, 0, 32, 1) !important;
  &:hover {
    color: rgba(153, 31, 47, 1) !important;
  }
}
.custom-icon {
  color: rgba(30, 136, 229, 1) !important;
}
.custom-bold {
  color: rgba(255, 167, 38, 1) !important;
}
h1,
.custom-title {
  color: rgba(13, 60, 85, 1) !important;
}
.h1-responsive {
  font-size: 200%;
}
@media (min-width: 576px) {
  .h1-responsive {
    font-size: 170%;
  }
}

@media (min-width: 768px) {
  .h1-responsive {
    font-size: 220%;
  }
}

@media (min-width: 992px) {
  .h1-responsive {
    font-size: 250%;
  }
}
@media (min-width: 1200px) {
  .h1-responsive {
    font-size: 300%;
  }
}

.hizmet_detay {
  .slogan_1 {
    font-size: 200%;
  }
}
@media (min-width: 760px) {
  .hizmet_detay .slogan_1 {
    font-size: 250%;
  }
}
@media (min-width: 992px) {
  .hizmet_detay .slogan_1 {
    font-size: 250%;
  }
}

.font-weight-bold {
  font-weight: 700 !important;
}
</style>
<script>
import NavBarDene from "@/components/NavBarDene.vue";
import TeklfAlButonu from "@/components/TeklfAlButonu.vue";
import HomeFooter from "@/components/HomeFooter.vue";
export default {
  name: "App",
  components: {
    HomeFooter,
    TeklfAlButonu,
    NavBarDene,
  },
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
