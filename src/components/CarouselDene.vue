<script>
export default {
  name: "CarouselDene",
};
</script>

<template>
  <div
    id="carousel-slider_1"
    class="carousel slide carousel-fade d-none d-lg-block"
    data-ride="carousel"
  >
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <div
          class="view"
          style="
            background-image: url('//www.eofis.com.tr/ass/img/anasayfa_1.webp');
          "
        ></div>
      </div>
    </div>

    <div class="carousel_over_text">
      <div
        class="mask rgba-black-light d-flex justify-content-center align-items-center"
      >
        <div class="anasayfa_giris">
          <div class="row anasayfa_slogan show">
            <div class="col-12 text-center">
              <h1 class="h1-responsive mb-0 white-text">
                Tek bir sözleşme ile 58 ofisiniz olsun!
                <div class="slogan_inner">
                  Büyük düşündük, sınırları kaldırdık. eOfis'linin çalışma
                  alanını Türkiye'nin 13 şehri yaptık. Gerisi sizin mesainiz.
                </div>
              </h1>
            </div>
          </div>

          <div class="row anasayfa_slider" style="margin-left: 32.5px">
            <div class="col col-4 text-left anasayfa_sol_slogan show">
              <div class="anasayfa_slogan_divider"></div>
              <h2 class="h4-responsive white-text p-2 masked_back">
                eOfis, girişimcilere, serbest meslek çalışanlarına, kobilere ve
                kurumsal firmalara, 2010'dan bu yana çalışma alanları çözümleri
                sunuyor
              </h2>
              <a
                data-toggle="modal"
                data-target="#teklifform_popup"
                href="#"
                class="btn btn-red waves-effect waves-light"
                >Hemen Teklif Al<i class="fa fa-file-text-o ml-2"></i
              ></a>
            </div>

            <div
              class="col col-8 anasayfa_sag_slider wow fadeInRightBig animated"
              style="visibility: visible; animation-name: fadeInRightBig"
            >
              <div
                class="mainswpier swiper-container swiper-container-horizontal"
                style="cursor: grab"
              >
                <div
                  class="swiper-wrapper"
                  style="
                    transform: translate3d(-520px, 0px, 0px);
                    transition-duration: 300ms;
                  "
                >
                  <div class="swiper-slide" style="margin-right: 10px">
                    <div class="card card-personal mb-4">
                      <div class="view cardimage">
                        <img
                          class="card-img-top"
                          src="//www.eofis.com.tr/ass/img/hizmet/1-hazir-ofis-min.webp"
                          alt="Hazır Ofis"
                        />
                        <a href="/hazir-ofis">
                          <div
                            class="mask rgba-black-slight waves-effect waves-light"
                          ></div>
                        </a>
                      </div>

                      <div class="card-body">
                        <a href="/hazir-ofis" class="main_red-text">
                          <h3 class="card-title">Hazır Ofis</h3>
                        </a>

                        <p class="card-meta font-weight-bold">
                          Aylık 6500TL’ den başlayan fiyatlarla...
                        </p>

                        <p class="card-text freeheight cardaciklama">
                          Modern ve fonksiyonel mobilyalarla dekore edilmiş,
                          farklı m2’lerde, size özel, kapalı ofis alanlarıdır.
                          Bu pak...
                        </p>
                        <hr />

                        <a
                          href="/hazir-ofis"
                          class="btn main_red-text d-flex justify-content-end z-depth-0 p-0 waves-effect waves-light"
                        >
                          <span>Detaylı İncele</span
                          ><span><i class="fa fa-chevron-right pl-2"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    class="swiper-slide swiper-slide-prev"
                    style="margin-right: 10px"
                  >
                    <div class="card card-personal mb-4">
                      <div class="view cardimage">
                        <img
                          class="card-img-top"
                          src="//www.eofis.com.tr/ass/img/hizmet/14-sanal-ofis-min.webp"
                          alt="Sanal Ofis"
                        />
                        <a href="/sanal-ofis">
                          <div
                            class="mask rgba-black-slight waves-effect waves-light"
                          ></div>
                        </a>
                      </div>

                      <div class="card-body">
                        <a href="/sanal-ofis" class="main_red-text">
                          <h3 class="card-title">Sanal Ofis</h3>
                        </a>

                        <p class="card-meta font-weight-bold">
                          Aylık 600TL’ den başlayan fiyatlarla...
                        </p>

                        <p class="card-text freeheight cardaciklama">
                          İş yapmak için asıl ihtiyacınız fiziki bir ofis
                          değilse, sanal ofistir. Çok hesaplı bir paket olan
                          Sanal Ofis paketi, size iş...
                        </p>
                        <hr />

                        <a
                          href="/sanal-ofis"
                          class="btn main_red-text d-flex justify-content-end z-depth-0 p-0 waves-effect waves-light"
                        >
                          <span>Detaylı İncele</span
                          ><span><i class="fa fa-chevron-right pl-2"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    class="swiper-slide swiper-slide-active"
                    style="margin-right: 10px"
                  >
                    <div class="card card-personal mb-4">
                      <div class="view cardimage">
                        <img
                          class="card-img-top"
                          src="//www.eofis.com.tr/ass/img/hizmet/21-ortak-ofis-min.webp"
                          alt="Paylaşımlı Ofis (Ortak Ofis)"
                        />
                        <a href="/ortak-ofis">
                          <div
                            class="mask rgba-black-slight waves-effect waves-light"
                          ></div>
                        </a>
                      </div>

                      <div class="card-body">
                        <a href="/ortak-ofis" class="main_red-text">
                          <h3 class="card-title">
                            Paylaşımlı Ofis (Ortak Ofis)
                          </h3>
                        </a>

                        <p class="card-meta font-weight-bold">
                          Aylık 1450TL’ den başlayan fiyatlarla...
                        </p>

                        <p class="card-text freeheight cardaciklama">
                          Farklı sektörlerden profesyonellerle çalışarak, ortak
                          ofis ortamında çalışma masası ve sekreterlik hizmeti
                          yeterlidir ...
                        </p>
                        <hr />

                        <a
                          href="/ortak-ofis"
                          class="btn main_red-text d-flex justify-content-end z-depth-0 p-0 waves-effect waves-light"
                        >
                          <span>Detaylı İncele</span
                          ><span><i class="fa fa-chevron-right pl-2"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    class="swiper-slide swiper-slide-next"
                    style="margin-right: 10px"
                  >
                    <div class="card card-personal mb-4">
                      <div class="view cardimage">
                        <img
                          class="card-img-top"
                          src="//www.eofis.com.tr/ass/img/hizmet/3-toplanti-odasi-min.webp"
                          alt="Toplantı Odası"
                        />
                        <a href="/toplanti-odasi">
                          <div
                            class="mask rgba-black-slight waves-effect waves-light"
                          ></div>
                        </a>
                      </div>

                      <div class="card-body">
                        <a href="/toplanti-odasi" class="main_red-text">
                          <h3 class="card-title">Toplantı Odası</h3>
                        </a>

                        <p class="card-meta font-weight-bold">
                          Saatlik, günlük, haftalık, aylık...
                        </p>

                        <p class="card-text freeheight cardaciklama">
                          eOfis Toplantı Salonlarımız, Türkiye’de 13 şehirde 55
                          lokasyonda kolaylıkla ulaşabileceğiniz, merkezi
                          bölgeler...
                        </p>
                        <hr />

                        <a
                          href="/toplanti-odasi"
                          class="btn main_red-text d-flex justify-content-end z-depth-0 p-0 waves-effect waves-light"
                        >
                          <span>Detaylı İncele</span
                          ><span><i class="fa fa-chevron-right pl-2"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide" style="margin-right: 10px">
                    <div class="card card-personal mb-4">
                      <div class="view cardimage">
                        <img
                          class="card-img-top"
                          src="//www.eofis.com.tr/ass/img/hizmet/28-eofis-biz-uyeligi-min.webp"
                          alt="eOfis BİZ Üyeliği"
                        />
                        <a href="/eofis-biz-uyeligi">
                          <div
                            class="mask rgba-black-slight waves-effect waves-light"
                          ></div>
                        </a>
                      </div>

                      <div class="card-body">
                        <a href="/eofis-biz-uyeligi" class="main_red-text">
                          <h3 class="card-title">eOfis BİZ Üyeliği</h3>
                        </a>

                        <p class="card-meta font-weight-bold">
                          Kullandığın kadar öde seçeneğiyle...
                        </p>

                        <p class="card-text freeheight cardaciklama">
                          Üyeler, eOfis’in tüm paylaşımlı ofisleri ile lounge ve
                          cafe alanlarını kişi bazında indirim uygulanmış ücret
                          olan 50 tl...
                        </p>
                        <hr />

                        <a
                          href="/eofis-biz-uyeligi"
                          class="btn main_red-text d-flex justify-content-end z-depth-0 p-0 waves-effect waves-light"
                        >
                          <span>Detaylı İncele</span
                          ><span><i class="fa fa-chevron-right pl-2"></i></span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide" style="margin-right: 10px">
                    <div class="card card-personal mb-4"></div>
                  </div>
                </div>

                <div
                  class="anasayfa_slider_ok swiper-button-next"
                  tabindex="0"
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="false"
                ></div>
                <div
                  class="anasayfa_slider_ok swiper-button-prev"
                  tabindex="0"
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled="false"
                ></div>
                <span
                  class="swiper-notification"
                  aria-live="assertive"
                  aria-atomic="true"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
