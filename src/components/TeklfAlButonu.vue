<script>
import emailjs from "emailjs-com";

export default {
  name: "TeklfAlButonu",
  data() {
    return {
      initialTop: 0,
      sendForm: {
        name: "",
        phone: "",
        email: "",
        service: "",
        companyCheck: "",
        message: "",
      },
      formStatus: null,
      formMessage: "",
    };
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
    form() {
      return this.$t("form");
    },
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_rynuoez",
          "template_nqsxfcd",
          this.$refs.form,
          "oUm2aFG6SvqAvlfhB"
        )
        .then(
          (result) => {
            console.log("Email successfully sent!", result.status, result.text);
            this.formStatus = "success";
            this.formMessage = "Mesaj başarıyla gönderildi!";
          },
          (error) => {
            console.log("Failed to send email:", error);
            this.formStatus = "error";
            this.formMessage = "Mesaj gönderilemedi, lütfen tekrar deneyin.";
          }
        );
    },
  },
};
</script>

<template>
  <div v-if="isMobile">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-danger mb-2 mx-2 fixed-bottom"
      style="z-index: 999"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      {{ $t("keywords.getAnOffer") }}
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
            <img
              src="/img/siteLogo.jpeg"
              style="height: 65px; width: 65px; border-radius: 50%"
              alt="Site Logo"
            />
            <button
              style="float: right"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div class="card-modal-title">Akdeniz Business Center</div>
            <div class="card-modal-description mb-3">
              Akdeniz'in <strong>prestijli ve rakipsiz</strong> lokasyonlarına 1
              adım uzaktasınız!
            </div>
          </div>
          <div class="modal-body">
            <form @submit.prevent="sendEmail" ref="form">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="bi bi-person-fill"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  v-model="sendForm.name"
                  :placeholder="form.name"
                  name="user_name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-phone-fill"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  v-model="sendForm.phone"
                  :placeholder="form.phone"
                  name="user_phone"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-envelope-fill"></i>
                </span>
                <input
                  type="text"
                  class="form-control"
                  v-model="sendForm.email"
                  :placeholder="form.email"
                  name="user_email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
              <select
                class="form-select mb-3"
                aria-label="Default select example"
                v-model="sendForm.service"
                name="service"
              >
                <option selected value="">
                  {{ $t("form.selectAService") }}
                </option>
                <option value="Flexible Office">
                  {{ $t("keywords.flexibleOffice") }}
                </option>
                <option value="Virtual Office">
                  {{ $t("keywords.virtualOffice") }}
                </option>
                <option value="Coworking Office">
                  {{ $t("keywords.coworkingOffice") }}
                </option>
              </select>
              <div class="input-group mb-3">
                <span class="input-group-text">
                  <i class="bi bi-chat-left-text-fill"></i>
                </span>
                <textarea
                  class="form-control"
                  aria-label="Mesajınız..."
                  v-model="sendForm.message"
                  :placeholder="form.message + '...'"
                  name="message"
                ></textarea>
              </div>
              <div class="form-check form-switch mb-4">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  v-model="sendForm.companyCheck"
                  name="company_check"
                />
                <label class="form-check-label" for="flexSwitchCheckDefault">{{
                  $t("form.company")
                }}</label>
              </div>
              <div
                v-if="formStatus === 'success'"
                class="alert alert-success"
                role="alert"
              >
                {{ formMessage }}
              </div>

              <!-- Hata Mesajı -->
              <div
                v-if="formStatus === 'error'"
                class="alert alert-danger"
                role="alert"
              >
                {{ formMessage }}
              </div>
              <div class="col-12 text-center">
                <button type="submit" class="btn btn-danger">
                  {{ $t("keywords.getAnOffer")
                  }}<i class="bi bi-file-text-o ml-2"></i>
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
