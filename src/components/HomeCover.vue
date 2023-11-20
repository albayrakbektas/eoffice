<script>
import GreyInfoCard from "@/components/GreyInfoCard.vue";

export default {
  name: "HomeCover",
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
  components: { GreyInfoCard },
};
</script>

<template>
  <div
    :class="isMobile ? 'cover-container-mobile' : ''"
    class="cover-container d-flex p-3 mx-auto flex-column"
  >
    <main class="px-3">
      <div :class="isMobile ? 'main-top-mobile' : ''" class="main-top">
        <h1>Cover your page.</h1>
        <p class="lead">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
      </div>
      <div class="row" v-if="!isMobile" style="translate: 0 50vh; height: 45vh">
        <div class="col-12">
          <div class="d-flex flex-row justify-content-between">
            <div class="card" style="width: 24%">
              <img
                src="https://picsum.photos/200"
                class="card-img-top"
                style="height: 20vh"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn text-primary fw-bold">Go somewhere</a>
              </div>
            </div>
            <div class="card" style="width: 24%">
              <img
                src="https://picsum.photos/200"
                class="card-img-top"
                style="height: 20vh"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn text-primary fw-bold">Go somewhere</a>
              </div>
            </div>
            <div class="card" style="width: 24%">
              <img
                src="https://picsum.photos/200"
                class="card-img-top"
                style="height: 20vh"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn text-primary fw-bold">Go somewhere</a>
              </div>
            </div>
            <div class="card" style="width: 24%">
              <img
                src="https://picsum.photos/200"
                class="card-img-top"
                style="height: 20vh"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn text-primary fw-bold">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="!isMobile"
        class="main-bot d-flex justify-content-between"
        style="max-height: 45vh; width: 65vw"
      ></div>
      <div class="grey-card-container w-100 row mx-auto" v-if="isMobile">
        <div class="col-3">
          <GreyInfoCard />
        </div>
        <div class="col-3">
          <GreyInfoCard />
        </div>
        <div class="col-3">
          <GreyInfoCard />
        </div>
        <div class="col-3">
          <GreyInfoCard />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.cover-container {
  height: 100vh;
  background-image: url("/public/img/mersin_sahil.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.cover-container-mobile {
  height: 50vh;
}
.main-top {
  position: absolute;
  left: 50%;
  top: 20%;
  translate: -50% 20%;
  text-align: center;
}
.main-top-mobile {
  top: 30%;
  left: 50%;
  translate: -50% 12.5%;
  width: 80%;
  h1 {
    font-size: 135%;
  }
  p {
    font-size: 85%;
  }
}
.main-bot {
  position: absolute;
  left: 25%;
  top: 80%;
  margin: 0 auto;
  translate: -25% -80%;
  overflow: hidden;
}
.grey-card-container {
  position: absolute;
  top: 85%;
  left: 0;
  z-index: 9;
  .col-3 {
    padding: 0 0.25rem !important;
  }
}
</style>
