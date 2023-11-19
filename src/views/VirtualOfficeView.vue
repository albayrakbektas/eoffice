<script>
export default {
  name: "VirtualOfficeView",
  components: {},
  data() {
    return {
      initialTop: 0,
    };
  },
  created() {
    if (!window.location.search.includes("reloaded")) {
      window.location.href = window.location.href + "?reloaded=true";
    }
  },
  mounted() {
    this.initialTop = this.$refs.form.getBoundingClientRect().top;
    window.addEventListener("scroll", this.isSticky);
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
    advantages() {
      return this.$t("virtualOffices.advantages");
    },
    services() {
      return this.$t("virtualOffices.services.list");
    },
    firstHalf() {
      const middle = Math.ceil(this.services.length / 2);
      return this.services.slice(0, middle);
    },
    secondHalf() {
      const middle = Math.ceil(this.services.length / 2);
      return this.services.slice(middle);
    },
  },
  methods: {
    isSticky() {
      let form = this.$refs.form;
      if (!form) return;
      if (window.pageYOffset > this.initialTop - 75) {
        form.classList.add("sticky");
      } else {
        form.classList.remove("sticky");
      }
    },
  },
};
</script>

<template>
  <div class="">
    <div
      class="position-relative"
      style="
        background-image: url('https://picsum.photos/1200');
        background-repeat: no-repeat;
        background-size: cover;
        height: 50vh;
        width: 100vw;
      "
    >
      <div
        class="container position-absolute bottom-0 start-0"
        style="
          --bs-gutter-x: 1.5rem;
          --bs-gutter-y: 0;
          width: 100%;
          right: calc(var(--bs-gutter-x) * 0.5);
          left: calc(var(--bs-gutter-x) * 0.5);
          margin-right: auto;
          margin-left: auto;
        "
      >
        <div class="row">
          <div class="col-12 col-lg-7 text-white text-left mb-2 mb-lg-3">
            <h1
              class="slogan_1 font-weight-bold mb-1 mb-lg-2 text-center text-md-start"
            >
              {{ $t("virtualOffices.title") }}
            </h1>
            <!--            <div class="slogan_2 mb-2 mb-lg-3">-->
            <!--              İhtiyacınıza Yönelik Esnek Ofis Çözümleri-->
            <!--            </div>-->
            <p class="slogan_3 mb-1 mb-lg-2 fw-bold text-center text-md-start">
              {{ $t("virtualOffices.subtitle") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <section class="pt-1 mb-3 pt-lg-5">
        <div class="row">
          <div class="col-12 col-lg-7 mt-3 mt-md-0">
            <div class="mb-0">
              <div class="row">
                <!-- advantages -->
                <div class="col-12 my-3">
                  <h2 class="text-center text-md-start">
                    {{ advantages.title }}
                  </h2>
                  <h5 class="text-center text-md-start">
                    {{ advantages.subtitle }}
                  </h5>
                  <div
                    class="col-12 mt-3"
                    v-for="(advantage, index) in advantages.list"
                    :key="index"
                  >
                    <i
                      class="bi bi-caret-right-fill me-2 text-primary fw-bold"
                    ></i
                    >{{ advantage }}
                  </div>
                </div>
                <!-- services -->
                <div class="col-12 my-3 mb-0">
                  <h2 class="mb-2 text-center text-md-start">
                    {{ $t("virtualOffices.services.name") }}
                  </h2>
                  <h5 class="text-center text-md-start">
                    {{ $t("virtualOffices.services.title") }}
                  </h5>
                </div>
                <div class="col-12 col-lg-6 mb-md-4">
                  <div
                    class="multi-collapse mb-0 mb-lg-5 pt-2 collapse show"
                    style=""
                  >
                    <div
                      class="row my-3 wow fadeIn"
                      v-for="(service, index) in firstHalf"
                      :key="index"
                      style="visibility: visible; animation-name: fadeIn"
                    >
                      <div
                        class="col-2 d-flex justify-content-center align-items-center"
                      >
                        <i
                          class="bi bi-check-circle-fill fs-3 text-success"
                        ></i>
                      </div>
                      <div
                        class="col-10 d-flex justify-content-left ps-0 align-items-center"
                      >
                        <div class="feature-title my-0">
                          {{ service }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-12 col-lg-6 mb-3 mb-md-4">
                  <div
                    class="multi-collapse mb-5 pt-0 pt-lg-2 collapse show"
                    id="hizmet_hizmetler2"
                    style=""
                  >
                    <div
                      v-for="(service, index) in secondHalf"
                      :key="index"
                      class="row my-3 wow fadeIn"
                      style="visibility: visible; animation-name: fadeIn"
                    >
                      <div
                        class="col-2 d-flex justify-content-center align-items-center"
                      >
                        <i
                          class="bi bi-check-circle-fill fs-3 text-success"
                        ></i>
                      </div>
                      <div
                        class="col-10 d-flex justify-content-left ps-0 align-items-center"
                      >
                        <div class="feature-title my-0">
                          {{ service }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- faq -->
                <div class="col-12 my-3 mb-md-4">
                  <h2>{{ $t("virtualOffices.faq.name") }}</h2>
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div
                      class="accordion-item"
                      v-for="(faq, index) in $t('virtualOffices.faq.list')"
                      :key="index"
                    >
                      <h2
                        class="accordion-header"
                        :id="'flush-heading' + index"
                      >
                        <button
                          class="accordion-button collapsed ps-0"
                          type="button"
                          data-bs-toggle="collapse"
                          :data-bs-target="'#flush-collapse' + index"
                          :aria-expanded="index === 0 ? 'true' : 'false'"
                          :aria-controls="'flush-collapse' + index"
                        >
                          <b>{{ faq.question }}</b>
                        </button>
                      </h2>
                      <div
                        :id="'flush-collapse' + index"
                        class="accordion-collapse collapse"
                        :class="{ show: index === 0 }"
                        :data-bs-parent="'#accordionFlushExample'"
                      >
                        <div class="accordion-body ps-0">
                          {{ faq.answer }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--                <div class="col-12">-->
                <!--                  <h2 class="services-title">Diğer Hizmetlerimiz</h2>-->
                <!--                  <div class="row">-->
                <!--                    <div class="col-lg-6 col-md-6 col-sm-12">-->
                <!--                      <div class="card card-personal mb-4 services-card">-->
                <!--                        <div class="view cardimage">-->
                <!--                          <img-->
                <!--                            class="card-img-top"-->
                <!--                            src="//www.eofis.com.tr/ass/img/hizmet/3-toplanti-odasi.jpg"-->
                <!--                            alt="Toplantı Odası"-->
                <!--                          />-->
                <!--                          <a href="/toplanti-odasi">-->
                <!--                            <div-->
                <!--                              class="mask rgba-black-slight waves-effect waves-light"-->
                <!--                            ></div>-->
                <!--                          </a>-->
                <!--                        </div>-->

                <!--                        <div class="card-body">-->
                <!--                          <a href="/toplanti-odasi" class="main_red-text">-->
                <!--                            <div class="card-title">Toplantı Odası</div>-->
                <!--                          </a>-->

                <!--                          <p class="card-meta font-weight-bold">-->
                <!--                            Saatlik, günlük, haftalık, aylık...-->
                <!--                          </p>-->

                <!--                          <p class="card-text freeheight cardaciklama">-->
                <!--                            eOfis Toplantı Salonlarımız, Türkiye’de 13 şehirde-->
                <!--                            55 lokasyonda kolaylıkla ulaşabileceğiniz, merkezi-->
                <!--                            bölgelerde...-->
                <!--                          </p>-->
                <!--                          <hr />-->

                <!--                          <a-->
                <!--                            href="/toplanti-odasi"-->
                <!--                            class="btn main_red-text d-flex justify-content-end z-depth-0 p-0 waves-effect waves-light"-->
                <!--                          >-->
                <!--                            <span>Detaylı İncele</span-->
                <!--                            ><span-->
                <!--                              ><i class="fa fa-chevron-right pl-2"></i-->
                <!--                            ></span>-->
                <!--                          </a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                    <div class="col-lg-6 col-md-6 col-sm-12">-->
                <!--                      <div class="card card-personal mb-4 services-card">-->
                <!--                        <div class="view cardimage">-->
                <!--                          <img-->
                <!--                            class="card-img-top"-->
                <!--                            src="//www.eofis.com.tr/ass/img/hizmet/14-sanal-ofis.jpg"-->
                <!--                            alt="Sanal Ofis"-->
                <!--                          />-->
                <!--                          <a href="/sanal-ofis">-->
                <!--                            <div-->
                <!--                              class="mask rgba-black-slight waves-effect waves-light"-->
                <!--                            ></div>-->
                <!--                          </a>-->
                <!--                        </div>-->

                <!--                        <div class="card-body">-->
                <!--                          <a href="/sanal-ofis" class="main_red-text">-->
                <!--                            <div class="card-title">Sanal Ofis</div>-->
                <!--                          </a>-->

                <!--                          <p class="card-meta font-weight-bold">-->
                <!--                            Aylık 600 TL' den başlayan fiyatlarla...-->
                <!--                          </p>-->

                <!--                          <p class="card-text freeheight cardaciklama">-->
                <!--                            İş yapmak için asıl ihtiyacınız fiziki bir ofis-->
                <!--                            değilse, sanal ofistir. Çok hesaplı bir paket olan-->
                <!--                            Sanal Ofis ...-->
                <!--                          </p>-->
                <!--                          <hr />-->

                <!--                          <a-->
                <!--                            href="/sanal-ofis"-->
                <!--                            class="btn main_red-text d-flex justify-content-end z-depth-0 p-0 waves-effect waves-light"-->
                <!--                          >-->
                <!--                            <span>Detaylı İncele</span-->
                <!--                            ><span-->
                <!--                              ><i class="fa fa-chevron-right pl-2"></i-->
                <!--                            ></span>-->
                <!--                          </a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                    <div class="col-lg-6 col-md-6 col-sm-12">-->
                <!--                      <div class="card card-personal mb-4 services-card">-->
                <!--                        <div class="view cardimage">-->
                <!--                          <img-->
                <!--                            class="card-img-top"-->
                <!--                            src="//www.eofis.com.tr/ass/img/hizmet/21-ortak-ofis.jpg"-->
                <!--                            alt="Paylaşımlı Ofis (Ortak Ofis)"-->
                <!--                          />-->
                <!--                          <a href="/ortak-ofis">-->
                <!--                            <div-->
                <!--                              class="mask rgba-black-slight waves-effect waves-light"-->
                <!--                            ></div>-->
                <!--                          </a>-->
                <!--                        </div>-->

                <!--                        <div class="card-body">-->
                <!--                          <a href="/ortak-ofis" class="main_red-text">-->
                <!--                            <div class="card-title">-->
                <!--                              Paylaşımlı Ofis (Ortak Ofis)-->
                <!--                            </div>-->
                <!--                          </a>-->

                <!--                          <p class="card-meta font-weight-bold">-->
                <!--                            Aylık 1450 TL' den başlayan fiyatlarla...-->
                <!--                          </p>-->

                <!--                          <p class="card-text freeheight cardaciklama">-->
                <!--                            Farklı sektörlerden profesyonellerle çalışarak,-->
                <!--                            ortak ofis ortamında çalışma masası ve sekreterlik-->
                <!--                            hizmeti yeter...-->
                <!--                          </p>-->
                <!--                          <hr />-->

                <!--                          <a-->
                <!--                            href="/ortak-ofis"-->
                <!--                            class="btn main_red-text d-flex justify-content-end z-depth-0 p-0 waves-effect waves-light"-->
                <!--                          >-->
                <!--                            <span>Detaylı İncele</span-->
                <!--                            ><span-->
                <!--                              ><i class="fa fa-chevron-right pl-2"></i-->
                <!--                            ></span>-->
                <!--                          </a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                    <div class="col-lg-6 col-md-6 col-sm-12">-->
                <!--                      <div class="card card-personal mb-4 services-card">-->
                <!--                        <div class="view cardimage">-->
                <!--                          <img-->
                <!--                            class="card-img-top"-->
                <!--                            src="//www.eofis.com.tr/ass/img/hizmet/28-eofis-biz-uyeligi.jpg"-->
                <!--                            alt="eOfis BİZ Üyeliği"-->
                <!--                          />-->
                <!--                          <a href="/eofis-biz-uyeligi">-->
                <!--                            <div-->
                <!--                              class="mask rgba-black-slight waves-effect waves-light"-->
                <!--                            ></div>-->
                <!--                          </a>-->
                <!--                        </div>-->

                <!--                        <div class="card-body">-->
                <!--                          <a href="/eofis-biz-uyeligi" class="main_red-text">-->
                <!--                            <div class="card-title">eOfis BİZ Üyeliği</div>-->
                <!--                          </a>-->

                <!--                          <p class="card-meta font-weight-bold">-->
                <!--                            Aylık 0 TL' den başlayan fiyatlarla...-->
                <!--                          </p>-->

                <!--                          <p class="card-text freeheight cardaciklama">-->
                <!--                            Üyeler, eOfis’in tüm paylaşımlı ofisleri ile lounge-->
                <!--                            ve cafe alanlarını kişi bazında indirim uygulanmış-->
                <!--                            ücret ola...-->
                <!--                          </p>-->
                <!--                          <hr />-->

                <!--                          <a-->
                <!--                            href="/eofis-biz-uyeligi"-->
                <!--                            class="btn main_red-text d-flex justify-content-end z-depth-0 p-0 waves-effect waves-light"-->
                <!--                          >-->
                <!--                            <span>Detaylı İncele</span-->
                <!--                            ><span-->
                <!--                              ><i class="fa fa-chevron-right pl-2"></i-->
                <!--                            ></span>-->
                <!--                          </a>-->
                <!--                        </div>-->
                <!--                      </div>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </div>-->
              </div>
            </div>
          </div>
          <div v-if="!isMobile" class="col-12 col-lg-5">
            <form
              ref="form"
              class="border position-absolute rounded-4 bg-light p-3"
              style="top: 30vh; width: 35%"
            >
              <h3 class="text-center text-danger">Teklif Formu</h3>
              <div class="col-6 col-md-6">
                <label for="inputEmail4" class="form-label">Ad</label>
                <input type="email" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-6 col-md-6">
                <label for="inputPassword4" class="form-label">Soyad</label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                />
              </div>
              <div class="col-6">
                <label for="inputAddress" class="form-label">Telefon</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder=""
                />
              </div>
              <div class="col-6">
                <label for="inputAddress2" class="form-label">Eposta</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  placeholder=""
                />
              </div>
              <div class="col-12">
                <label for="inputCity" class="form-label">Mesajiniz</label>
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="col-12">
                <label for="inputState" class="form-label">Hizmet Secin</label>
                <select id="inputState" class="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div
                class="col-12 d-flex align-items-center justify-content-center"
              >
                <button
                  type="submit"
                  class="btn btn-danger rounded-0 mx-auto"
                  data-bs-dismiss="modal"
                >
                  Teklif Al
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lok_hizm_mob_form_container {
  background: transparent;
}
.col-form {
  visibility: visible;
}
.hizmet_lg_form {
  .card {
    transition: all 0.5s;
  }
}
.mobile_form_title {
  font-size: 1.25rem;
  font-weight: 600;
}
.main_red-text {
  color: #c62828 !important;
}
.sticky {
  position: fixed !important;
  top: 75px !important;
}
</style>
