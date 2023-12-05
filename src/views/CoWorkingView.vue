<script>
import emailjs from "emailjs-com";

export default {
  name: "CoWorkingView",
  components: {},
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
      return this.$t("coWorkingOffices.advantages");
    },
    services() {
      return this.$t("coWorkingOffices.services.list");
    },
    firstHalf() {
      const middle = Math.ceil(this.services.length / 2);
      return this.services.slice(0, middle);
    },
    secondHalf() {
      const middle = Math.ceil(this.services.length / 2);
      return this.services.slice(middle);
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
    isSticky() {
      let form = this.$refs.form;
      let cont = this.$refs.cont;
      let section = this.$refs.section;
      if (!form) return;
      if (window.pageYOffset > this.initialTop - 85) {
        form.classList.add("sticky");
      } else {
        form.classList.remove("sticky");
      }
      if (
        window.pageYOffset - form.getBoundingClientRect().bottom >=
        cont.getBoundingClientRect().bottom
      ) {
        form.classList.add("fixed-to-bottom");
        section.classList.add("position-relative");
      } else {
        form.classList.remove("fixed-to-bottom");
        section.classList.remove("position-relative");
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
        background-image: url('/img/coworking.jpeg');
        background-position: center;
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
          <div
            class="col-12 col-lg-7 py-2 bg-white bg-opacity-50 text-white text-left mb-2 mb-lg-3"
          >
            <h1
              class="slogan_1 fw-bolder mb-1 mb-lg-2 text-center text-md-start"
            >
              {{ $t("coWorkingOffices.title") }}
            </h1>
            <!--            <div class="slogan_2 mb-2 mb-lg-3">-->
            <!--              İhtiyacınıza Yönelik Esnek Ofis Çözümleri-->
            <!--            </div>-->
            <p
              class="slogan_3 mb-1 mb-lg-2 fw-bold text-center text-md-start text-black"
            >
              {{ $t("coWorkingOffices.subtitle") }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div ref="cont" class="container">
      <section ref="section" class="pt-1 mb-3 pt-lg-5">
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
                    {{ $t("coWorkingOffices.services.name") }}
                  </h2>
                  <h5 class="text-center text-md-start">
                    {{ $t("coWorkingOffices.services.title") }}
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
                          class="bi bi-check-circle-fill fs-3 text-primary"
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
                          class="bi bi-check-circle-fill fs-3 text-primary"
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
                  <h2>{{ $t("coWorkingOffices.faq.name") }}</h2>
                  <div
                    class="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div
                      class="accordion-item"
                      v-for="(faq, index) in $t('coWorkingOffices.faq.list')"
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
              </div>
            </div>
          </div>
          <div v-if="!isMobile" class="col-12 col-lg-5">
            <form
              @submit.prevent="sendEmail"
              ref="form"
              class="border position-absolute rounded-4 bg-light p-3"
              style="top: 30vh; width: 35vw; right: 5vw"
            >
              <h3 class="text-center text-danger mb-4">
                {{ sendForm.quotationForm }}
              </h3>

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
                  required
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="bi bi-phone-fill"></i
                ></span>
                <input
                  type="text"
                  class="form-control"
                  v-model="sendForm.phone"
                  :placeholder="form.phone"
                  name="user_phone"
                  aria-label="Phone"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>

              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"
                  ><i class="bi bi-envelope-fill"></i
                ></span>
                <input
                  type="email"
                  class="form-control"
                  v-model="sendForm.email"
                  :placeholder="form.email"
                  name="user_email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                  required
                />
              </div>

              <select
                class="form-select mb-3"
                v-model="sendForm.service"
                name="service"
                aria-label="Default select example"
                required
              >
                <option disabled value="">
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
                <span class="input-group-text"
                  ><i class="bi bi-chat-left-text-fill"></i
                ></span>
                <textarea
                  class="form-control"
                  v-model="sendForm.message"
                  :placeholder="form.message + '...'"
                  name="message"
                  aria-label="Message"
                  required
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
  top: 95px !important;
}
.fixed-to-bottom {
  position: absolute !important;
  top: auto !important;
  bottom: 0;
  right: 0 !important;
  width: -webkit-fill-available;
}
</style>
