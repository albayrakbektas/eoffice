<script>
export default {
  name: "CarouselSlider1",
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>

<template>
  <div
    id="carousel-slider_1"
    class="carousel half_carousel slide carousel-fade"
    data-ride="carousel"
    style="height: 50vh; background-image: url(https://picsum.photos/1200)"
    :style="$route.path === '/' && !isMobile ? 'height: 100vh' : 'height: 0vh'"
  >
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <div
          class="view"
          style="background-image: url('https://picsum.photos/1200')"
        ></div>
      </div>
    </div>

    <div class="carousel_over_text">
      <div
        class="mask rgba-black-light rbl_reverse d-flex justify-content-end align-items-end"
        style="margin-top: 30vh"
      >
        <div class="container" id="detectheight">
          <div id="cr_main">
            <div
              class="row wow fadeIn"
              style="visibility: visible; animation-name: fadeIn"
            >
              <div
                class="col-12 col-lg-7 white-text text-left carousel_left_text mb-2 mb-lg-3"
              >
                <h1 class="slogan_1 font-weight-bold text-light mb-1 mb-lg-2">
                  Hazır Ofis
                </h1>
                <div class="slogan_2 mb-2 mb-lg-3 text-light">
                  Çalışma veriminizi ve iş prestijinizi arttırın!
                </div>
                <p class="slogan_3 mb-1 mb-lg-2 text-light">
                  <b>Aylık 6500 TL</b>'den başlayan fiyatlarla...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
