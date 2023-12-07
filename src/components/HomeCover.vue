<script>
export default {
  name: "HomeCover",
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
    homeCover() {
      return this.$t("homeCoverCards");
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
      <div :class="isMobile ? 'main-top-mobile' : ''" class="main-top">
        <h1>{{ homeCover.cover.title }}</h1>
        <p class="lead fw-bold fs-6">
          {{ homeCover.cover.content }}
        </p>
      </div>
      <div class="row" v-if="!isMobile" style="translate: 0 50vh; height: 45vh">
        <div class="col-4 my-auto bg-black bg-opacity-25">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <h1 class="text-white mb-0 fw-bolder">
                  {{ homeCover.textCarousel[0].title }}
                </h1>
                <hr class="text-white fw-bolder border-3 p-0 mt-0" />
                <p class="lead text-white fw-bold fs-6">
                  {{ homeCover.textCarousel[0].description }}
                </p>
              </div>
              <div class="carousel-item">
                <h1 class="text-white mb-0 fw-bolder">
                  {{ homeCover.textCarousel[1].title }}
                </h1>
                <hr class="text-white fw-bolder border-3 p-0 mt-0" />
                <p class="lead text-white fw-bolder fs-6">
                  {{ homeCover.textCarousel[1].description }}
                </p>
              </div>
              <div class="carousel-item">
                <h1 class="text-white mb-0 fw-bolder">
                  {{ homeCover.textCarousel[2].title }}
                </h1>
                <hr class="text-white fw-bolder border-3 p-0 mt-0" />
                <p class="lead text-white fw-bolder fs-6">
                  {{ homeCover.textCarousel[2].description }}
                </p>
              </div>
            </div>
          </div>
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
                <h5
                  class="card-title fw-bolder"
                  style="color: rgba(13, 60, 85, 1)"
                >
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
                <h5
                  class="card-title fw-bolder"
                  style="color: rgba(13, 60, 85, 1)"
                >
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
                <h5
                  class="card-title fw-bolder"
                  style="color: rgba(13, 60, 85, 1)"
                >
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
  top: 15%;
  translate: -50% 15%;
  text-align: center;
}
.main-top-mobile {
  top: 27.5%;
  left: 50%;
  translate: -50% 12.5%;
  width: 90%;
  padding: 1% 4%;
  background-color: rgb(240, 240, 240, 0.5) !important;
  h1 {
    font-size: 135%;
    font-weight: bolder;
    margin-top: 0.5rem;
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
