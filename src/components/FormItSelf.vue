<script>
export default {
  name: "FormItSelf",
};
</script>

<template>
  <section id="form_itself" class="hizmet_lg_form sabit">
    <div class="container lok_hizm_mob_form_container">
      <div class="row">
        <div class="col-12 col-lg-7"></div>

        <div class="col-12 col-lg-5 py-5 px-2 py-lg-0 px-lg-4 col-form">
          <div class="card" id="formcard_card">
            <div class="mobile_form_title main_red-text text-center pt-3">
              Teklif Formu
            </div>

            <div class="card-body pt-0" id="formcard_body">
              <form
                class="form"
                id="contact_form"
                name="contact_form"
                method="post"
                action="javascript:void(0);"
              >
                <div class="row">
                  <div class="col-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="isim"
                        name="isim"
                        class="form-control"
                        required=""
                      />
                      <label for="isim"
                        ><i class="fa fa-user grey-text mr-2"></i> Ad</label
                      >
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="soyisim"
                        name="soyisim"
                        class="form-control"
                        required=""
                      />
                      <label for="soyisim">Soyad</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <div class="md-form mb-0">
                      <input
                        type="number"
                        id="telefon"
                        name="telefon"
                        class="form-control"
                        required=""
                      />
                      <label for="telefon"
                        ><i class="fa fa-phone grey-text mr-2"></i>
                        Telefon</label
                      >
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control"
                        required=""
                      />
                      <label for="email"
                        ><i class="fa fa-envelope grey-text mr-2"></i>
                        E-Posta</label
                      >
                    </div>
                  </div>
                </div>
                <div class="md-form">
                  <input
                    type="text"
                    id="form_mesaj"
                    name="form_mesaj"
                    class="form-control"
                    required=""
                  />
                  <label for="form_mesaj"
                    ><i class="fa fa-pencil grey-text mr-2"></i>
                    Mesajınız</label
                  >
                </div>
                <div class="md-form_select">
                  <div class="select-wrapper mdb-select formobileselect">
                    <span class="caret">▼</span
                    ><input
                      type="text"
                      class="select-dropdown"
                      readonly="true"
                      data-activates="select-options-8522a93a-140d-48e0-b675-a17401206f71"
                      value=""
                    />
                    <ul
                      id="select-options-8522a93a-140d-48e0-b675-a17401206f71"
                      class="dropdown-content select-dropdown w-100"
                    >
                      <li class="active">
                        <span class="filtrable"> Şehir Seçin</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Adana (1 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Ankara (4 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Antalya (1 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Bursa (1 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Diyarbakır (1 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Gaziantep (1 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> İstanbul (44 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> İzmir (1 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Kayseri (1 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Kocaeli (1 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Konya (1 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Mersin (1 Lokasyon)</span>
                      </li>
                      <li class=" ">
                        <span class="filtrable"> Muğla (1 Lokasyon)</span>
                      </li>
                    </ul>
                    <select
                      class="mdb-select formobileselect initialized"
                      id="form_sehir_sec"
                      name="form_sehir_sec"
                    >
                      <option value="" selected="">Şehir Seçin</option>
                      <option value="Adana">Adana (1 Lokasyon)</option>
                      <option value="Ankara">Ankara (4 Lokasyon)</option>
                      <option value="Antalya">Antalya (1 Lokasyon)</option>
                      <option value="Bursa">Bursa (1 Lokasyon)</option>
                      <option value="Diyarbakır">
                        Diyarbakır (1 Lokasyon)
                      </option>
                      <option value="Gaziantep">Gaziantep (1 Lokasyon)</option>
                      <option value="İstanbul">İstanbul (44 Lokasyon)</option>
                      <option value="İzmir">İzmir (1 Lokasyon)</option>
                      <option value="Kayseri">Kayseri (1 Lokasyon)</option>
                      <option value="Kocaeli">Kocaeli (1 Lokasyon)</option>
                      <option value="Konya">Konya (1 Lokasyon)</option>
                      <option value="Mersin">Mersin (1 Lokasyon)</option>
                      <option value="Muğla">Muğla (1 Lokasyon)</option>
                    </select>
                  </div>
                  <label></label>
                </div>
                <div
                  class="md-form_select selectlokasyondiv"
                  style="display: none"
                >
                  <select
                    class="mdb-select formobileselect select_lok"
                    id="form_lokasyon_sec"
                    name="form_lokasyon_sec"
                  >
                    <option value="" selected="">Lokasyon/Ofis Seçin</option>
                  </select>
                  <label></label>
                </div>
                <div class="md-form_select">
                  <div class="select-wrapper mdb-select formobileselect">
                    <span class="caret">▼</span
                    ><input
                      type="text"
                      class="select-dropdown"
                      readonly="true"
                      data-activates="select-options-99ce4193-e476-4a20-ab68-349edbdf2203"
                      value=""
                    />
                    <ul
                      id="select-options-99ce4193-e476-4a20-ab68-349edbdf2203"
                      class="dropdown-content select-dropdown w-100"
                    >
                      <li class="">
                        <span class="filtrable">
                          {{ $t("form.selectAService") }}</span
                        >
                      </li>
                      <li class="active selected">
                        <span class="filtrable"> Hazır Ofis</span>
                      </li>
                      <li class="">
                        <span class="filtrable"> Toplantı Odası</span>
                      </li>
                      <li class="">
                        <span class="filtrable"> Sanal Ofis</span>
                      </li>
                      <li class="">
                        <span class="filtrable">
                          Paylaşımlı Ofis (Ortak Ofis)</span
                        >
                      </li>
                      <li class="">
                        <span class="filtrable"> eOfis BİZ Üyeliği</span>
                      </li>
                      <li class="">
                        <span class="filtrable"> Seans Odası</span>
                      </li>
                    </ul>
                    <select
                      class="mdb-select formobileselect initialized"
                      id="form_hizmet_sec"
                      name="form_hizmet_sec"
                    >
                      <option value="" selected="">
                        {{ $t("form.selectAService") }}
                      </option>
                      <option value="1">Hazır Ofis</option>
                      <option value="3">Toplantı Odası</option>
                      <option value="14">Sanal Ofis</option>
                      <option value="21">Paylaşımlı Ofis (Ortak Ofis)</option>
                      <option value="28">eOfis BİZ Üyeliği</option>
                      <option value="42">Seans Odası</option>
                    </select>
                  </div>
                  <label></label>
                </div>
                <div
                  class="form-check"
                  style="margin-top: 15px; margin-bottom: 15px; padding-left: 0"
                >
                  <div class="row">
                    <div class="col-12 text-center bg-row">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        name="form_sirket_bilgi"
                        value="defterdar"
                        id="form_sirket_bilgi"
                      />
                      <label
                        class="form-check-label font-weight-bold"
                        for="form_sirket_bilgi"
                        >{{ $t("form.company") }}</label
                      >
                      <span
                        style="
                          font-size: 12px;
                          margin-top: 5px;
                          display: block;
                          color: #919191;
                        "
                        >Powered by&nbsp;&nbsp;|<img
                          src="ass/img/defterdar-logo.svg"
                          style="
                            height: 20px;
                            padding-left: 10px;
                            margin-top: -3px;
                          "
                      /></span>
                    </div>
                  </div>
                </div>
                <div class="md-form d-none">
                  <input
                    type="text"
                    id="kaynak"
                    name="kaynak"
                    class="form-control"
                  />
                  <label for="kaynak">Kaynak</label>
                </div>
                <div class="md-form d-none">
                  <input
                    type="text"
                    id="kampanya"
                    name="kampanya"
                    class="form-control"
                  />
                  <label for="kampanya">Kampanya</label>
                </div>
                <div class="md-form d-none">
                  <input
                    type="text"
                    id="dil"
                    name="dil"
                    class="form-control"
                    value="1"
                  />
                  <label for="dil" value="1" class="active">dil</label>
                </div>
                <div id="postloading">
                  <div class="text-center">
                    <i
                      class="btn btn-red waves-input-wrapper waves-effect waves-light"
                      style="
                        color: rgb(0, 0, 0);
                        background: rgb(239, 239, 239);
                      "
                      ><input
                        type="submit"
                        name="submit"
                        onclick="kontrolet()"
                        value="Teklif Al"
                        class="waves-button-input"
                        style="background-color: rgba(0, 0, 0, 0)"
                    /></i>
                  </div>
                </div>
                <small class="text-center mt-2 d-block" style="font-size: 11px">
                  Formunu göndererek
                  <a
                    target="_blank"
                    href="aydinlatma-beyani"
                    title="KVKK Aydınlatma Beyanı"
                    >Aydınlatma Beyanı</a
                  >'nı ve
                  <a
                    target="_blank"
                    href="acik-riza-onayi"
                    title="KVKK Açık Rıza Onayı"
                    >Açık Rıza Onayı</a
                  >'nı kabul edersiniz.</small
                >
              </form>
              <div id="send"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
