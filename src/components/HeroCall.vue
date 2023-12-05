<script>
export default {
  name: "HeroCall",
  computed: {
    heroCall() {
      return this.$t("sections.heroCall");
    },
  },
};
</script>

<template>
  <section
    class="py-3 py-lg-5 mb-3 mb-lg-5"
    style="visibility: visible; animation-name: fadeIn"
  >
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-8 flex-center">
          <img
            src="//www.eofis.com.tr/ass/img/cagri-karsilama.webp"
            alt="eOfis"
            class="z-depth-0 img-fluid"
            width="730"
            height="391"
          />
        </div>

        <div
          class="col-12 col-sm-6 col-lg-4 mt-3 mt-lg-5 pt-0 pt-lg-5 text-md-start text-lg-start text-center"
        >
          <h2 class="mt-0 mt-lg-4 mb-3 mb-lg-5 h3-responsive">
            {{ heroCall.title }}
          </h2>
          <p>
            {{ heroCall.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
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
