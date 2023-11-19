<script>
export default {
  name: "PricesView",
};
</script>

<template>
  <div class="container mt-0 mt-lg-5 mb-5 pt-0 pt-lg-5">
    <section class="mb-5 pt-0 pb-5">
      <h1 class="h1-responsive mt-3 mb-3 text-center">Fiyatlar</h1>
      <div class="table-responsive">
        <table class="table table-striped table-bordered text-center">
          <thead>
            <tr>
              <th class="first-title" scope="col">Hizmet</th>
              <th class="first-title" scope="col">eOFİS BİZ ÜYELİK</th>
              <th class="first-title" scope="col">HAZIR OFİS</th>
              <th class="first-title" scope="col">SANAL OFİS</th>
              <th class="first-title" scope="col">ORTAK OFİS (Co-Working)</th>
            </tr>
            <tr>
              <th scope="col">Fiyat</th>
              <th scope="col">Kullandığın kadar öde seçeneğiyle...</th>
              <th scope="col">6500TL +KDV’den başlayan fiyatlarla</th>
              <th scope="col">600TL +KDV’den başlayan fiyatlarla</th>
              <th scope="col">1450TL +KDV’den başlayan fiyatlarla</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Yasal adres</th>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">Posta-Kargo takibi</th>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">
                Telefon hattı tahsisi ve çağrı karşılama hizmeti
              </th>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">Tüm lokasyonları kullanma fırsatı</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">Toplantı odası ve seminer salonu kullanımı*</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td>Aylık Kirasının %25'si Kadar</td>
              <td>400 TL</td>
              <td>400 TL</td>
            </tr>
            <tr>
              <th scope="row">Saatlik, günlük, haftalık açık/kapalı ofis</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td>%50 İndirim</td>
              <td>%50 İndirim</td>
              <td>%50 İndirim</td>
            </tr>
            <tr>
              <th scope="row">Kendine özel ofis</th>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-x text-danger"></i></td>
            </tr>
            <tr>
              <th scope="row">Ortak ofis alanında müsait masa kullanımı</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">Ortak ofis alanında sabit masa kullanımı</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-x text-danger"></i></td>
              <td>400 TL/ay ekstra</td>
            </tr>
            <tr>
              <th scope="row">Üyelerin sunduğu İndirim ve avantajlar</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">4000 + Network Erişimi</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">Lobi kullanımı **</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">Yüksek hızda fiber İnternet</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">Ücretsiz sıcak içecekler, su</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">Mutfak kullanımı</th>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-x text-danger"></i></td>
            </tr>
            <tr>
              <th scope="row">Temizlik hizmeti</th>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr>
              <th scope="row">7/24 kullanım***</th>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-x text-danger"></i></td>
              <td><i class="bi bi-x text-danger"></i></td>
            </tr>
            <tr>
              <th scope="row">Etkinlikler ve indirimli eğitimler</th>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
              <td><i class="bi bi-check-lg text-success"></i></td>
            </tr>
            <tr class="links">
              <th scope="row"></th>
              <td>
                <a
                  class="btn btn-red px-2 waves-effect waves-light"
                  href="//https://akdenizbusinesscenter.com//eofis-biz-uyeligi"
                  >eOfis BİZ Fiyatları
                </a>
              </td>
              <td>
                <a
                  class="btn btn-red px-2 waves-effect waves-light"
                  href="//https://akdenizbusinesscenter.com//hazir-ofis"
                  >Hazır Ofis Fiyatları
                </a>
              </td>
              <td>
                <a
                  class="btn btn-red px-2 waves-effect waves-light"
                  href="//https://akdenizbusinesscenter.com//sanal-ofis"
                  >Sanal Ofis Fiyatları
                </a>
              </td>
              <td>
                <a
                  class="btn btn-red px-2 waves-effect waves-light"
                  href="//https://akdenizbusinesscenter.com//ortak-ofis"
                  >Ortak Ofis Fiyatları
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
      <div class="price_infos">
        <p>
          * Toplantı salonları fiyatları lokasyon, kapasite ve toplantı
          gün/saatine göre değişmektedir.
        </p>
        <p>
          ** Pol Center/ Levent, EGS Business Park/ Yeşilköy, Tepe Prıme/
          Ankara, Folkart Towers/ İzmir, Hukukçular Towers/ Kartal
        </p>
        <p>*** 7/24 açık olan merkezlerimiz hakkında bilgi alınız.</p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.first-title {
  background: #c62828;
  color: white;
}
</style>
