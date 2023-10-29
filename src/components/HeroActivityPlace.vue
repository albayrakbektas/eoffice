<script>
export default {
  name: "HeroPlazaCount",
  data() {
    return {
      textContentAnimation: "",
      imageContentAnimation: "",
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.textContentAnimation = "animate__animated animate__fadeInLeft";
        this.imageContentAnimation = "animate__animated animate__fadeInRight";
        observer.disconnect();
      }
    });
    observer.observe(this.$refs.hero);
  },
};
</script>

<template>
  <section class="my-3 my-lg-5" style="background: #263238 !important">
    <div class="row hero" ref="hero">
      <div
        :class="textContentAnimation"
        class="col-12 col-sm-6 text-white"
        style="visibility: visible"
      >
        <div
          class="text-white p-3 p-sm-5 mt-0 mb-0 mt-lg-3 mb-lg-5 text-center text-md-start"
        >
          <h2 class="mt-3 mt-lg-5 mb-3 mb-lg-4 h3-responsive">
            Her Türlü Etkinlikleriniz İçin Mekanları Hazırladık
          </h2>
          <p>
            Eğitim, Lansman, Kokteyl organizasyonları, sosyal buluşma ve
            kutlamalarınız için eOfis’in etkinlik alanlarını, eOfis üyesi
            olmanın ayrıcalığı ile kullanabilirsiniz. 120'den fazla toplantı ve
            seminer salonu, her türlü etkinliğiniz için emrinizde.
          </p>
        </div>
      </div>

      <div
        :class="imageContentAnimation"
        class="col-12 col-sm-6 d-none d-sm-block px-0"
        style="visibility: visible"
      >
        <div
          class="full_back_image"
          style="
            background-image: url('//www.eofis.com.tr/ass/img/kokteyl.webp');
          "
        ></div>
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
