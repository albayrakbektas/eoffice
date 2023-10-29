<script>
export default {
  name: "TeklfAlButonu",
};
</script>

<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-danger mb-2 mx-2 fixed-bottom"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Teklif Al
      <i class="bi bi-file-earmark-text"></i>
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-block text-center">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <div class="card-modal-description">
              eOfis'in <strong>prestijli ve rakipsiz</strong> lokasyonlarına 1
              adım uzaktasınız!
            </div>
          </div>
          <div class="modal-body">
            <form class="row g-3">
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
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mobile_teklif_al {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.25rem;
  margin: 0;
  z-index: 998;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  -ms-transition: all 0.5s;
  transform: translateY(0);
  -webkit-transform: translateY(0);
  -moz-transform: translateY(0);
  -o-transform: translateY(0);
  -ms-transform: translateY(0);
  visibility: visible;
}
.card-modal-title {
  text-align: center;
  font-weight: bolder;
  color: #000;
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.card-modal-description {
  text-align: center;
  font-size: 14px;
}
</style>
