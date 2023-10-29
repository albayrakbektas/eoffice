<template>
  <div
    ref="hero"
    class="hero d-flex align-items-center justify-content-center"
    style="height: 50vh; background: #263238 !important"
  >
    <div :class="textClass" class="w-50 px-5 ms-5">
      <h1 class="text-light">
        Her Türlü Etkinlikleriniz İçin Mekanları Hazırladık
      </h1>
      <p class="text-light">
        Her Türlü Etkinlikleriniz İçin Mekanları Hazırladık Eğitim, Lansman,
        Kokteyl organizasyonları, sosyal buluşma ve kutlamalarınız için eOfis’in
        etkinlik alanlarını, eOfis üyesi olmanın ayrıcalığı ile
        kullanabilirsiniz. 120'den fazla toplantı ve seminer salonu, her türlü
        etkinliğiniz için emrinizde.
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
  name: "HeroActivityPlace",
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
