<template>
  <div
    ref="hero"
    class="hero d-flex align-items-center justify-content-center"
    style="height: 50vh; background: #263238 !important"
  >
    <div :class="textClass" class="w-50 px-5 ms-5">
      <h1 class="text-light">58 A+ Plazada Prestijli Ofisler</h1>
      <p class="text-light">
        Esnek Kiralama Modeli ile, saatlik, günlük, haftalık ya da aylık
        kiralamalar yapabilir, Türkiyen'nin en prestijli lokasyonlarında,
        işinize uygun toplantı odası, seminer salonu, hazır ofis ya da ortak
        ofiste çalışma masası imkanlarından faydalanabilirsiniz.
      </p>
    </div>
    <div :class="imageClass" class="w-50">
      <img
        src="https://picsum.photos/400"
        alt=""
        class="img-fluid w-100"
        style="object-fit: cover; height: 50vh"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimateExamp",
  data() {
    return {
      textClass: "",
      imageClass: "",
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.textClass = "animate__animated animate__fadeInLeft";
        this.imageClass = "animate__animated animate__fadeInRight";
        observer.disconnect();
      }
    });
    observer.observe(this.$refs.hero);
  },
};
</script>

<style>
.hero {
  display: flex;
  height: 100vh;
  /* Add your styles */
}
</style>
