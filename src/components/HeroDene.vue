<script>
export default {
  name: "HeroDene",
  data() {
    return {
      textContentAnimation: "",
      imageContentAnimation: "",
    };
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
  <section
    class="py-3 py-lg-5 mb-3 mb-lg-5 wow fadeIn cagri_karsilama_section"
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
          class="col-12 col-sm-6 col-lg-4 mt-3 mt-lg-5 pt-0 pt-lg-5 text-lg-left text-center"
        >
          <h2 class="mt-0 mt-lg-4 mb-3 mb-lg-5 h3-responsive">
            Çağrı Karşılama ve Aktarma Hizmetinden Faydalanın
          </h2>
          <p>
            Size özel telefon ve hat tahsisi yaptırarak, sekretarya hizmetinden
            faydalanabilir, gelen aramaları aktarılmasını sağlayabilir,
            ofisinize gelen posta ve kargolarınızın takibini yapabilirsiniz.
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
