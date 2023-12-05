<script>
export default {
  name: "HeroShareNetwork",
  computed: {
    heroShareNetwork() {
      return this.$t("sections.heroShareNetwork");
    },
  },
};
</script>

<template>
  <section
    class="py-4 py-lg-5 mb-3 mb-lg-5 wow fadeIn networking_section"
    style="visibility: visible"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-8 flex-center">
          <img
            src="//www.eofis.com.tr/ass/img/networking-business.webp"
            alt="eOfis"
            class="z-depth-0 img-fluid"
            width="730"
            height="470"
          />
        </div>

        <div
          class="col-12 col-sm-6 col-lg-4 mt-0 mt-lg-5 pt-3 pt-lg-5 text-lg-left text-center"
        >
          <h2 class="mt-0 mt-lg-5 mb-3 mb-lg-5 h3-responsive">
            {{ heroShareNetwork.title }}
          </h2>
          <p>
            {{ heroShareNetwork.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.full_back_image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.hero {
  height: auto !important;
}

.mobile_ozellikler2 {
  .card {
    width: 100%;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border: 0;
  }
}
.main_black-text {
  color: #263238 !important;
}
a {
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
</style>
