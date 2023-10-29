<script>
export default {
  name: "HeroAdvantage",
  data() {
    return {};
  },
};
</script>

<template>
  <section class="py-3 py-lg-5 mb-3 mb-lg-5" style="visibility: visible">
    <div class="container">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-8 pt-sm-5 pt-lg-0 flex-center">
          <img
            src="//www.eofis.com.tr/ass/img/ozellikler2.webp"
            alt="eOfis"
            class="z-depth-0 img-fluid"
            width="730"
            height="427"
          />
        </div>

        <div class="col-12 col-sm-6 col-lg-4 d-lg-none mobile_ozellikler2">
          <h2 class="mb-2 mb-lg-5 h3-responsive text-sm-left text-center">
            İşinize Güç Katan Ayrıcalıklar ve Avantajlar
          </h2>
          <div class="row">
            <div class="card mx-2 p-2 mb-1">
              <a href="#ofisler" class="main_black-text smooth">
                <div class="row">
                  <div class="col-2">
                    <i class="bi bi-check-circle-fill fs-3 text-success"></i>
                  </div>
                  <div class="col-9 d-flex align-items-center">
                    <span class="feature-title my-0 font-weight-light"
                      >Esnek Kiralama Avantajı</span
                    >
                  </div>
                  <div
                    class="col-1 d-flex align-items-center justify-content-center"
                  >
                    <i class="bi bi-chevron-right"></i>
                  </div>
                </div>
              </a>
            </div>
            <div class="card mx-2 p-2 mb-1">
              <a href="#networking" class="main_black-text smooth">
                <div class="row">
                  <div class="col-2">
                    <i class="bi bi-check-circle-fill fs-3 text-success"></i>
                  </div>
                  <div class="col-10 d-flex align-items-center">
                    <span class="feature-title my-0 font-weight-light"
                      >Networking İmkanları</span
                    >
                  </div>
                </div>
              </a>
            </div>
            <div class="card mx-2 p-2 mb-1">
              <a href="#eventler" class="main_black-text smooth">
                <div class="row">
                  <div class="col-2">
                    <i class="bi bi-check-circle-fill fs-3 text-success"></i>
                  </div>
                  <div class="col-10 d-flex align-items-center">
                    <span class="feature-title my-0 font-weight-light"
                      >Ayrıcalıklı Etkinlikler</span
                    >
                  </div>
                </div>
              </a>
            </div>
            <div class="card mx-2 p-2 mb-1">
              <a href="#toplanti" class="main_black-text smooth">
                <div class="row">
                  <div class="col-2">
                    <i class="bi bi-check-circle-fill fs-3 text-success"></i>
                  </div>
                  <div class="col-10 d-flex align-items-center">
                    <span class="feature-title my-0 font-weight-light"
                      >Toplantı ve Konferans Salonları</span
                    >
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 d-none d-lg-block">
          <h2 class="mb-2 mb-lg-5 h3-responsive text-sm-left text-center">
            İşinize Güç Katan Ayrıcalıklar ve Avantajlar
          </h2>
          <div class="row my-2 ml-4 ml-sm-0">
            <div class="col-2">
              <i class="bi bi-check-circle-fill fs-3 text-success"></i>
            </div>
            <div class="col-10 d-flex align-items-center">
              <p class="feature-title my-0">Esnek Kiralama Avantajı</p>
            </div>
          </div>
          <div class="row my-2 ml-4 ml-sm-0">
            <div class="col-2">
              <i class="bi bi-check-circle-fill fs-3 text-success"></i>
            </div>
            <div class="col-10 d-flex align-items-center">
              <p class="feature-title my-0">Networking İmkanları</p>
            </div>
          </div>
          <div class="row my-2 ml-4 ml-sm-0">
            <div class="col-2">
              <i class="bi bi-check-circle-fill fs-3 text-success"></i>
            </div>
            <div class="col-10 d-flex align-items-center">
              <p class="feature-title my-0">Eventler ve Etkinlikler</p>
            </div>
          </div>
          <div class="row my-2 ml-4 ml-sm-0">
            <div class="col-2">
              <i class="bi bi-check-circle-fill fs-3 text-success"></i>
            </div>
            <div class="col-10 d-flex align-items-center">
              <p class="feature-title my-0">Toplantı ve Konferans Salonları</p>
            </div>
          </div>
          <a
            data-toggle="modal"
            data-target="#teklifform_popup"
            href="#"
            class="btn btn-danger mt-3 mt-lg-5 d-none d-sm-block waves-effect waves-light"
            >Hemen Teklif Al<i class="fa fa-file-text-o ml-2"></i
          ></a>
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

.h3-responsive {
  font-size: 135%;
}
@media (min-width: 576px) {
  .h3-responsive,
  .h4-responsive,
  .h5-responsive {
    font-size: 125%;
  }
}
@media (min-width: 768px) {
  .h3-responsive {
    font-size: 140%;
  }
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
