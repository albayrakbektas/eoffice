<script>
export default {
  name: "HomeCover",
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>

<template>
  <div
    :class="isMobile ? 'cover-container-mobile' : ''"
    class="cover-container d-flex p-3 mx-auto flex-column"
  >
    <main class="px-3">
      <div
        :class="isMobile ? 'main-top-mobile' : ''"
        class="main-top bg-white bg-opacity-50"
      >
        <h1>Cover your page.</h1>
        <p class="lead fw-bold fs-6">
          Cover is a one-page template for building simple and beautiful home
          pages. Download, edit the text, and add your own fullscreen background
          photo to make it your own.
        </p>
      </div>
      <div class="row" v-if="!isMobile" style="translate: 0 50vh; height: 45vh">
        <div class="col-4 my-auto bg-white bg-opacity-50">
          <h1>Cover your page.</h1>
          <p class="lead fw-bolder fs-6">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
        </div>
        <div class="row col-8">
          <div class="col-4 p-3">
            <div class="card">
              <img
                src="/img/flexible_office.jpeg"
                class="card-img-top"
                alt="..."
                style="height: 20vh"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t("homeCoverCards.flexibleOffice.title") }}
                </h5>
                <p class="card-text">
                  {{ $t("homeCoverCards.flexibleOffice.subtitle") }}
                </p>
                <a href="#" class="btn float-end fw-bold"
                  >{{ $t("keywords.more")
                  }}<i class="bi bi-chevron-right fw-bold"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-4 p-3">
            <div class="card">
              <img
                src="/img/virtual_office.jpeg"
                class="card-img-top"
                alt="..."
                style="height: 20vh"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t("homeCoverCards.virtualOffice.title") }}
                </h5>
                <p class="card-text">
                  {{ $t("homeCoverCards.virtualOffice.subtitle") }}
                </p>
                <a href="#" class="btn float-end fw-bold"
                  >{{ $t("keywords.more")
                  }}<i class="bi bi-chevron-right fw-bold"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-4 p-3">
            <div class="card">
              <img
                src="/img/coworking.jpeg"
                class="card-img-top"
                alt="..."
                style="height: 20vh"
              />
              <div class="card-body">
                <h5 class="card-title">
                  {{ $t("homeCoverCards.coworkingOffice.title") }}
                </h5>
                <p class="card-text">
                  {{ $t("homeCoverCards.coworkingOffice.subtitle") }}
                </p>
                <a href="#" class="btn float-end fw-bold"
                  >{{ $t("keywords.more")
                  }}<i class="bi bi-chevron-right fw-bold"></i
                ></a>
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
      <!--      <div class="grey-card-container w-100 row mx-auto" v-if="isMobile">-->
      <!--        <div class="col-3">-->
      <!--          <GreyInfoCard />-->
      <!--        </div>-->
      <!--        <div class="col-3">-->
      <!--          <GreyInfoCard />-->
      <!--        </div>-->
      <!--        <div class="col-3">-->
      <!--          <GreyInfoCard />-->
      <!--        </div>-->
      <!--        <div class="col-3">-->
      <!--          <GreyInfoCard />-->
      <!--        </div>-->
      <!--      </div>-->
    </main>
  </div>
</template>

<style scoped lang="scss">
.cover-container {
  height: 100vh;
  background-image: url("/public/img/homecover.jpeg");
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
  top: 40%;
  left: 50%;
  translate: -50% 12.5%;
  width: 80%;
  padding: 1%;
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
.card-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
