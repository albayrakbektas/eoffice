<script>
// import OfficeTypeCardMobile from "@/components/OfficeTypeCardMobile.vue";

export default {
  name: "OfficeTypeCardMobileList",
  components: {},
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>

<template>
  <div v-if="isMobile" class="hizmetler_mobile my-3 px-2">
    <div class="mb-1 hizmet_fade hizmet_fade_1">
      <div class="card p-2" data-modal="hizmetler_0">
        <div class="m_hizmetler_card d-flex">
          <div class="mh_img">
            <img
              class="centerize"
              src="//www.eofis.com.tr/ass/img/hizmet/1-hazir-ofis-min.webp"
              alt="Hazır Ofis"
            />
          </div>
          <div class="mh_cnt ms-3">
            <div class="title my-1">Hazır Ofis</div>
            <div class="sub_title">
              <b>Aylık 6500 TL</b>’ den başlayan fiyatlarla...
            </div>
          </div>
        </div>
      </div>

      <div id="hizmetler_0" class="modallize" data="closed-modal">
        <div class="content" data="closed-content">
          <div class="card modal_card">
            <div class="closs_modal_material" onclick="hide();">
              <i class="fa fa-close" aria-hidden="true"></i>
            </div>

            <div class="overlay">
              <img
                class="centerize"
                src="//www.eofis.com.tr/ass/img/hizmet/1-hazir-ofis-min.webp"
                alt="Hazır Ofis"
              />
            </div>

            <div class="card-body">
              <div class="card-title mb-1 white-text">Hazır Ofis</div>
              <div class="sub_title mb-3 white-text">
                Aylık 6500 TL’ den başlayan fiyatlarla...
              </div>
              <p class="card-text">
                Modern ve fonksiyonel mobilyalarla dekore edilmiş, farklı
                m2’lerde, size özel, kapalı ofis alanlarıdır. Bu paket üyeliği
                ile tek bir kira bedeli karşılığında; verimli çalışmak deyince
                aklınıza gelen tüm kurulum, donanıma ve hizmetlere sahip bir
                ofis ortamına, profesyonel bir operasyon ekibine ve prestijli
                bir iş adresine sahip olursunuz. 7/24 açık m...
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
      </div>
    </div>
    <div class="mb-1 hizmet_fade hizmet_fade_2">
      <div class="card p-2" data-modal="hizmetler_2">
        <div class="m_hizmetler_card d-flex">
          <div class="mh_img">
            <img
              class="centerize"
              src="//www.eofis.com.tr/ass/img/hizmet/14-sanal-ofis-min.webp"
              alt="Sanal Ofis"
            />
          </div>
          <div class="mh_cnt ms-3">
            <div class="title my-1">Sanal Ofis</div>
            <div class="sub_title">
              <b>Aylık 600 TL</b>’ den başlayan fiyatlarla...
            </div>
          </div>
        </div>
      </div>

      <div id="hizmetler_2" class="modallize" data="closed-modal">
        <div class="content" data="closed-content">
          <div class="card modal_card">
            <div class="closs_modal_material" onclick="hide();">
              <i class="fa fa-close" aria-hidden="true"></i>
            </div>

            <div class="overlay">
              <img
                class="centerize"
                src="//www.eofis.com.tr/ass/img/hizmet/14-sanal-ofis-min.webp"
                alt="Sanal Ofis"
              />
            </div>

            <div class="card-body">
              <div class="card-title mb-1 white-text">Sanal Ofis</div>
              <div class="sub_title mb-3 white-text">
                Aylık 600 TL’ den başlayan fiyatlarla...
              </div>
              <p class="card-text">
                İş yapmak için asıl ihtiyacınız fiziki bir ofis değilse, sanal
                ofistir. Çok hesaplı bir paket olan Sanal Ofis paketi, size
                işiniz için ihtiyacınız olan tüm prestij ve kolaylığı sağlar.
                Çağrılarınız, posta-kargolarınız ve misafirleriniz iş adresinizi
                gösterdiğiniz eOfis’te profesyonel bir ekip tarafından
                karşılanıp, size bildirilir.Tüm eOfis’lerde ön...
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
      </div>
    </div>
    <div class="mb-1 hizmet_fade hizmet_fade_3">
      <div class="card p-2" data-modal="hizmetler_3">
        <div class="m_hizmetler_card d-flex">
          <div class="mh_img">
            <img
              class="centerize"
              src="//www.eofis.com.tr/ass/img/hizmet/21-ortak-ofis-min.webp"
              alt="Paylaşımlı Ofis (Ortak Ofis)"
            />
          </div>
          <div class="mh_cnt ms-3">
            <div class="title my-1">Paylaşımlı Ofis (Ortak Ofis)</div>
            <div class="sub_title">
              <b>Aylık 1450 TL</b>’ den başlayan fiyatlarla...
            </div>
          </div>
        </div>
      </div>

      <div id="hizmetler_3" class="modallize" data="closed-modal">
        <div class="content" data="closed-content">
          <div class="card modal_card">
            <div class="closs_modal_material" onclick="hide();">
              <i class="fa fa-close" aria-hidden="true"></i>
            </div>

            <div class="overlay">
              <img
                class="centerize"
                src="//www.eofis.com.tr/ass/img/hizmet/21-ortak-ofis-min.webp"
                alt="Paylaşımlı Ofis (Ortak Ofis)"
              />
            </div>

            <div class="card-body">
              <div class="card-title mb-1 white-text">
                Paylaşımlı Ofis (Ortak Ofis)
              </div>
              <div class="sub_title mb-3 white-text">
                Aylık 1450 TL’ den başlayan fiyatlarla...
              </div>
              <p class="card-text">
                Farklı sektörlerden profesyonellerle çalışarak, ortak ofis
                ortamında çalışma masası ve sekreterlik hizmeti yeterlidir
                diyenler için en uygun çözüm Coworking. İş birliği ve network
                sağlayacağınız coworking hem verimli bir iş ortamı hem de
                ihtiyaç duyulan ofis çözümlerini karşılar. eOfis’ in prestijli
                55 lokasyonundan size en uygununu seçerek iş adresiniz...
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
      </div>
    </div>
    <div class="mb-1 hizmet_fade hizmet_fade_4">
      <div class="card p-2" data-modal="hizmetler_1">
        <div class="m_hizmetler_card d-flex">
          <div class="mh_img">
            <img
              class="centerize"
              src="//www.eofis.com.tr/ass/img/hizmet/3-toplanti-odasi-min.webp"
              alt="Toplantı Odası"
            />
          </div>
          <div class="mh_cnt ms-3">
            <div class="title my-1">Toplantı Odası</div>
            <div class="sub_title"><b>Saatlik, günlük, haftalık...</b></div>
          </div>
        </div>
      </div>

      <div id="hizmetler_1" class="modallize" data="closed-modal">
        <div class="content" data="closed-content">
          <div class="card modal_card">
            <div class="closs_modal_material" onclick="hide();">
              <i class="fa fa-close" aria-hidden="true"></i>
            </div>

            <div class="overlay">
              <img
                class="centerize"
                src="//www.eofis.com.tr/ass/img/hizmet/3-toplanti-odasi-min.webp"
                alt="Toplantı Odası"
              />
            </div>

            <div class="card-body">
              <div class="card-title mb-1 white-text">Toplantı Odası</div>
              <div class="sub_title mb-3 white-text">
                Saatlik, günlük, haftalık kiralama...
              </div>
              <p class="card-text">
                eOfis Toplantı Salonlarımız, Türkiye’de 13 şehirde 55 lokasyonda
                kolaylıkla ulaşabileceğiniz, merkezi bölgelerde yer almaktadır.
                Metroya, otobüs duraklarına yürüme mesafesinde olup, size en
                yakın yerde toplantılarınızı gerçekleştirebilirsiniz. 10-20
                kişilik toplantı salonu ve 50 kişilik eğitim-seminer
                salonlarımız modern ve ihtiyaca yönelik teknolojik g...
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
      </div>
    </div>
    <div class="mb-1 hizmet_fade hizmet_fade_5">
      <div class="card p-2" data-modal="hizmetler_4">
        <div class="m_hizmetler_card d-flex">
          <div class="mh_img">
            <img
              class="centerize"
              src="//www.eofis.com.tr/ass/img/hizmet/28-eofis-biz-uyeligi-min.webp"
              alt="eOfis BİZ Üyeliği"
            />
          </div>
          <div class="mh_cnt ms-3">
            <div class="title my-1">eOfis BİZ Üyeliği</div>
            <div class="sub_title">
              <b>Yıllık 0 TL</b>’ den başlayan fiyatlarla...
            </div>
          </div>
        </div>
      </div>

      <div id="hizmetler_4" class="modallize" data="closed-modal">
        <div class="content" data="closed-content">
          <div class="card modal_card">
            <div class="closs_modal_material" onclick="hide();">
              <i class="fa fa-close" aria-hidden="true"></i>
            </div>

            <div class="overlay">
              <img
                class="centerize"
                src="//www.eofis.com.tr/ass/img/hizmet/28-eofis-biz-uyeligi-min.webp"
                alt="eOfis BİZ Üyeliği"
              />
            </div>

            <div class="card-body">
              <div class="card-title mb-1 white-text">eOfis BİZ Üyeliği</div>
              <div class="sub_title mb-3 white-text">
                Yıllık 0 TL’ den başlayan fiyatlarla...
              </div>
              <p class="card-text">
                Üyeler, eOfis’in tüm paylaşımlı ofisleri ile lounge ve cafe
                alanlarını kişi bazında indirim uygulanmış ücret olan 50 tl/saat
                ile kullanır ve misafirleri için de kişi başı ücret öder.
                Kullanımla ilgili bilgiler üyelere mesaj olarak bildirilir.
                Ayrıca üye, kullanımını eOfisim mobil uygulamasından takip
                edebilir. Türkiye’nin 13 ilinde, 55 merkezi loka...
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
      </div>
    </div>
    <div id="shade" onclick="hide();"></div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0;
}
.mh_img {
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 0.25rem;
}
img {
  width: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
}
.centerize {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.title {
  color: #263238;
  font-weight: 600;
  opacity: 0.8;
}
.sub_title {
  font-style: italic;
  font-weight: 400;
  font-size: 0.75rem;
}
.modallize {
  opacity: 0;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 60px auto 50px;
  border-radius: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;
  width: 0;
  max-width: 600px;
  height: 0;
  -webkit-max-logical-height: calc(100% - 113px);
  -webkit-max-height: calc(100% - 113px);
  max-height: calc(100% - 113px);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  transition: border-radius 0.15s, width 0.15s, height 0.25s;
  .content {
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s 0.4s;
    .modal_card {
      height: 100%;
    }
  }
}
.closs_modal_material {
  background: white;
  text-align: center;
  position: absolute;
  width: 48px;
  height: 40px;
  right: 0;
  top: 0;
  font-size: 26px;
  border-radius: 0 0.25rem 0 0.25rem;
  z-index: 100;
}
i {
  color: #c62828;
}
</style>
