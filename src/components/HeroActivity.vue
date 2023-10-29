<script>
export default {
  name: "HeroActivity",
  data() {
    return {
      textClass: "",
      imageClass: "",
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.imageClass = "animate__animated animate__fadeInLeft";
        this.textClass = "animate__animated animate__fadeInRight";
        observer.disconnect();
      }
    });
    observer.observe(this.$refs.hero);
  },
};
</script>

<template>
  <div
    ref="hero"
    class="hero d-flex align-items-center justify-content-center"
    style="height: 65vh; background: #c62828 !important"
  >
    <div :class="imageClass" class="w-50">
      <img
        src="https://picsum.photos/400"
        alt=""
        class="img-fluid w-100"
        style="object-fit: cover; height: 65vh"
      />
    </div>
    <div :class="textClass" class="w-50">
      <h1 class="text-light mx-5 mb-3">
        Etkinliklere Katılarak Hem İş Yapın, Hem de Eğlenerek Sosyalleşin
      </h1>
      <p class="text-light mx-5">
        Birçok sosyal buluşma, eğitimler ve çalışma atölyeleri düzenleyerek
        sosyalleşmeyi de unutmayın. Farklı firmalar tarafından düzenlenen
        etkinliklerden haberdar olarak, kendinizi geliştirebilir, ilgi
        alanlarınızın kesiştiği yeni insanlarla bir araya gelerek
        sosyalleşebilir, böylelikle çevrenizi genişletebilme ve işinizi büyütme
        fırsatlarından yararlanabilirsiniz. <br />
        Hem iş hem eğlence konseptli organizasyonlarla motivasyonumuz tam, işe
        devam.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
