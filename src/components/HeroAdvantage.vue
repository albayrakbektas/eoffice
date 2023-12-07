<script>
import emailjs from "emailjs-com";

export default {
  name: "HeroAdvantage",
  data() {
    return {
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
    heroAdvantage() {
      return this.$t("sections.heroAdvantage");
    },
    form() {
      return this.$t("form");
    },
    isMobile() {
      return this.$store.getters.isMobile;
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
  <section class="py-3 py-lg-5 mb-3 mb-lg-5" style="visibility: visible">
    <div class="container">
      <div class="row">
        <div
          class="row col-12 col-sm-6 col-lg-8 pt-sm-5 pt-lg-0 flex-center align-items-center"
        >
          <!--          <img-->
          <!--            src="//www.eofis.com.tr/ass/img/ozellikler2.webp"-->
          <!--            alt="eOfis"-->
          <!--            class="z-depth-0 img-fluid"-->
          <!--            width="730"-->
          <!--            height="427"-->
          <!--          />-->
          <div class="col-4 col-md-3 text-center">
            <img
              class="w-50"
              src="/icons/icons8-worldwide-location.gif"
              alt="worldwide location"
            />
            <div class="mt-2 mb-4">icon aciklama</div>
          </div>
          <div class="col-4 col-md-3 text-center">
            <img
              class="w-50"
              src="/icons/icons8-online-support.gif"
              alt="worldwide location"
            />
            <div class="mt-2 mb-4">icon aciklama</div>
          </div>
          <div class="col-4 col-md-3 text-center">
            <img
              class="w-50"
              src="/icons/icons8-phone.gif"
              alt="worldwide location"
            />
            <div class="mt-2 mb-4">icon aciklama</div>
          </div>
          <div class="col-6 col-md-3 text-center">
            <img
              class="w-50"
              :style="isMobile ? 'width: 33.3% !important' : ''"
              src="/icons/icons8-mailbox.gif"
              alt="worldwide location"
            />
            <div class="mt-2 mb-4">icon aciklama</div>
          </div>
          <div class="col-6 col-md-3 text-center">
            <img
              class="w-50"
              :style="isMobile ? 'width: 33.3% !important' : ''"
              src="/icons/icons8-community.gif"
              alt="worldwide location"
            />
            <div class="mt-2 mb-4">icon aciklama</div>
          </div>
          <div class="col-4 col-md-3 text-center">
            <img
              class="w-50"
              src="/icons/icons8-wifi.gif"
              alt="worldwide location"
            />
            <div class="mt-2 mb-4">icon aciklama</div>
          </div>
          <div class="col-4 col-md-3 text-center">
            <img
              class="w-50"
              src="/icons/icons8-cup.gif"
              alt="worldwide location"
            />
            <div class="mt-2 mb-4">icon aciklama</div>
          </div>
          <div class="col-4 col-md-3 text-center">
            <img
              class="w-50"
              src="/icons/icons8-floor-scrubber.gif"
              alt="worldwide location"
            />
            <div class="mt-2 mb-4">icon aciklama</div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 d-lg-none mobile_ozellikler2">
          <h2 class="my-3 mb-lg-5 h3-responsive text-sm-left text-center">
            {{ heroAdvantage.title }}
          </h2>
          <div class="row mx-2">
            <div
              v-for="(item, index) in heroAdvantage.list"
              :key="index"
              class="card p-2 mb-1"
            >
              <a href="#" class="main_black-text smooth">
                <div class="row">
                  <div class="col-1">
                    <i class="bi bi-check-circle-fill fs-3 text-primary"></i>
                  </div>
                  <div class="col-11 d-flex align-items-center">
                    <span class="feature-title my-0 font-weight-light">{{
                      item
                    }}</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-4 d-none d-lg-block">
          <h2 class="mb-2 mb-lg-5 h3-responsive text-sm-left text-center">
            {{ heroAdvantage.title }}
          </h2>
          <div
            v-for="(item, index) in heroAdvantage.list"
            :key="index"
            class="row my-2 ml-4 ml-sm-0"
          >
            <div class="col-1 d-flex justify-content-center align-items-center">
              <i class="bi bi-check-circle-fill fs-3 text-primary"></i>
            </div>
            <div class="col-11 d-flex align-items-center">
              <p class="feature-title my-0">{{ item }}</p>
            </div>
          </div>
          <a
            data-toggle="modal"
            data-target="#teklifform_popup"
            href="#"
            class="btn btn-danger mt-3 mt-lg-5 d-none d-sm-block"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style="color: #fff !important"
            >{{ $t("keywords.getAnOfferNow")
            }}<i class="bi bi-file-text-o ml-2"></i
          ></a>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <img
              src="/img/siteLogo.jpeg"
              style="height: 15vh; border-radius: 50%"
              alt=""
            />
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card-modal-title">Akdeniz Business Center</div>
            <div class="card-modal-description mb-3">
              {{ heroAdvantage.modal.subtitle }}
            </div>
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
                v-model="sendForm.service"
                class="form-select mb-3"
                aria-label="Default select example"
              >
                <option disabled value="">
                  {{ $t("form.selectAService") }}
                </option>
                <option value="1">{{ $t("keywords.flexibleOffice") }}</option>
                <option value="2">{{ $t("keywords.virtualOffice") }}</option>
                <option value="3">{{ $t("keywords.coworkingOffice") }}</option>
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
.modal-header {
  background-image: url("/public/img/mersin_sahil.jpeg");
  height: 20vh;
  align-items: start !important;
}
.card-modal-title {
  text-align: center;
  font-weight: bolder;
  color: #000;
  font-size: 22px;
}
.card-modal-description {
  text-align: center;
  font-size: 14px;
}
</style>
