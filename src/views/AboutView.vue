<template>
  <div class="container mt-0 mt-lg-5 pt-0 pt-lg-5">
    <section class="mb-3 pt-0 text-center">
      <h1 class="h1-responsive my-3">Hakkımızda</h1>

      <p class="w-responsive mx-auto mb-3">
        2010 yılında Yeşilköy EGS Business Blokları’ nda kurulan eofis İstanbul,
        Ankara, İzmir, Gaziantep, Bursa, Konya ve Mersin şubelerinde Sanal ofis,
        Hazır ofis ve Toplantı odası kullanımı hizmetleri vermektedir.
      </p>
      <p class="w-responsive mx-auto mb-3">
        eOfis; A+ plaza ve lokasyonlardaki tüm ofislerindeki çalışma alanları
        ile müşterilerine hizmet vermektedir.
      </p>
      <p class="w-responsive mx-auto mb-3">
        Mobil çalışan, ofisinde sık bulunmayan ve bir ofisin genel maliyetleri
        ile uğraşmak istemeyen, girişimcilerden profesyonellere kadar çok farklı
        iş kollarında çalışan şirketlere %80 maliyet avantajıyla gerek
        teknolojik alt yapısıyla gerek modern ofis ve toplantı alanlarıyla
        kaliteli ofis çözümleri sağlar.
      </p>

      <div class="row">
        <div class="col-4">
          <i class="bi bi-map display-1 text-danger"></i>
          <h5 class="font-weight-bold mt-3 mb-0">30000+ m2</h5>
          <p class="grey-text my-0">Ofis Alanı</p>
        </div>

        <div class="col-4">
          <i class="bi bi-hand-thumbs-up display-1 text-success"></i>
          <h5 class="font-weight-bold mt-3 mb-0">800+</h5>
          <p class="grey-text my-0">Hazır Ofis</p>
          <p></p>
        </div>

        <div class="col-4">
          <i class="bi bi-cloud-fill display-1 text-primary"></i>
          <h5 class="font-weight-bold mt-3 mb-0">6000+</h5>
          <p class="grey-text my-0">Sanal Ofis</p>
          <p></p>
        </div>
      </div>
    </section>
    <hr />
    <section class="my-3 mb-5 pt-4 pb-2 text-center">
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <div class="card white text-center z-depth-2">
            <div class="card-body">
              <h5 class="text-uppercase mt-2 mb-3">
                {{ $t("aboutView.vision.title") }}
              </h5>
              <p class="mb-0 font-weight-light">
                {{ $t("aboutView.vision.subtitle") }}
              </p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-6 mb-3">
          <div class="card white text-center z-depth-2">
            <div class="card-body">
              <h5 class="text-uppercase mt-2 mb-3">
                {{ $t("aboutView.mission.title") }}
              </h5>
              <p class="mb-4 font-weight-light">
                {{ $t("aboutView.mission.subtitle") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0;
}
</style>
