<script>
export default {
  name: "HeroActivity",
  data() {
    return {
      textContentAnimation: "",
      imageContentAnimation: "",
    };
  },
  computed: {
    heroActivity() {
      return this.$t("sections.heroActivity");
    },
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.imageContentAnimation = "animate__animated animate__fadeInLeft";
        this.textContentAnimation = "animate__animated animate__fadeInRight";
        observer.disconnect();
      }
    });
    observer.observe(this.$refs.hero);
  },
};
</script>

<template>
  <section class="my-3 my-lg-5">
    <div ref="hero" class="row hero">
      <div
        class="col-12 col-sm-6 d-none d-sm-block px-0 wow"
        :class="imageContentAnimation"
        style="visibility: visible"
      >
        <div
          class="full_back_image"
          style="background-image: url('/img/toplanti_1.jpeg')"
        ></div>
      </div>
      <div
        class="col-12 col-sm-6 pl-0 pl-lg-5 pb-3 pb-lg-5 bg-danger text-white wow fadeInRight"
        style="visibility: visible"
        :class="textContentAnimation"
      >
        <div
          class="anasayfa_spec_right white-text py-3 py-lg-5 pl-3 pl-sm-5 mb-3-mb-lg-5 text-sm-left text-center"
        >
          <h2 class="mt-3 mt-lg-5 mb-4 h3-responsive">
            {{ heroActivity.title }}
          </h2>
          <p style="color: #fff !important">
            {{ heroActivity.content }}
          </p>
          <!--          <p style="color: #fff !important">-->
          <!--            Hem iş hem eğlence konseptli organizasyonlarla motivasyonumuz tam,-->
          <!--            işe devam.-->
          <!--          </p>-->
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
</style>
