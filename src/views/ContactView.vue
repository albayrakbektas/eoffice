<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactView",
  metaInfo() {
    return {
      title: this.$t("seo.contactView.title"),
      meta: [
        {
          vmid: "description",
          name: "description",
          content: this.$t("seo.contactView.description"),
        },
      ],
    };
  },
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
    form() {
      return this.$t("form");
    },
    keywords() {
      return this.$t("keywords");
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
  <div class="mt-0 mt-lg-5 mb-5 pt-0 pt-lg-5">
    <section class="mt-4 pt-5 pt-md-0 text-center">
      <h1 class="h1-responsive mt-3 mb-2 mb-md-4">{{ keywords.contactUs }}</h1>
      <div class="row rounded">
        <div class="ps-4 ps-md-5 col-12 p-4 col-md-6 mb-md-0 mb-5">
          <!--          <div class="text-start">-->
          <!--            <p><b>Ünvan: </b>Akdeniz Business Center Ltd. Şti.</p>-->
          <!--            <p>-->
          <!--              <b>Adres: </b>Camişerif mahalle 5212 sokak uysal apt zemin kat no-->
          <!--              1 Akdeniz Mersin-->
          <!--            </p>-->
          <!--          </div>-->
          <form ref="form" @submit.prevent="sendEmail">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1"
                ><i class="bi bi-person-fill"></i
              ></span>
              <input
                type="text"
                v-model="sendForm.name"
                class="form-control"
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
                v-model="sendForm.phone"
                class="form-control"
                name="user_phone"
                :placeholder="form.phone"
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
              v-model="sendForm.service"
              name="service"
              aria-label="Default select example"
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
              <span class="input-group-text">
                <i class="bi bi-chat-left-text-fill"></i>
              </span>
              <textarea
                class="form-control"
                aria-label="Mesajınız..."
                name="message"
                :placeholder="form.message + '...'"
                v-model="sendForm.message"
              ></textarea>
            </div>
            <div class="form-check text-start form-switch mb-4">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                v-model="sendForm.companyCheck"
                name="company_check"
                id="flexSwitchCheckDefault"
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

        <div class="col-bg-image col-12 col-md-6 text-center">
          <div class="h-100 w-100 d-flex align-items-center">
            <ul class="list-unstyled mb-0">
              <li class="d-flex mb-4 text-start">
                <i class="bi bi-geo-alt text-white fw-bold me-4"></i>
                <div class="fs-5">
                  <p class="text-white fw-bolder mb-0">
                    {{ keywords.address }}
                  </p>
                  <p class="" style="line-height: 1rem">
                    <a
                      class="text-decoration-none text-white"
                      style="font-size: 0.8rem"
                      href="https://maps.app.goo.gl/6DAkbSfP64Sj4drW9"
                      target="_blank"
                      >Camişerif Mah, 5212 Sk, Uysal Apt. No:1 <br />
                      Akdeniz/Mersin
                    </a>
                  </p>
                </div>
              </li>
              <li class="d-flex mb-4 text-start">
                <i class="bi bi-phone text-white fw-bold me-4"></i>
                <div class="fs-5">
                  <p class="text-white fw-bolder mb-0">{{ keywords.phone }}</p>
                  <p class="" style="line-height: 1rem">
                    <a
                      class="text-decoration-none text-white"
                      style="font-size: 0.8rem"
                      href="tel:0537 600 1153"
                      >0537 600 1153
                    </a>
                  </p>
                </div>
              </li>
              <li class="d-flex text-start">
                <i class="bi bi-instagram text-white fw-bold me-4"></i>
                <div class="fs-5">
                  <p class="text-white fw-bolder mb-0">Instagram</p>
                  <p class="" style="line-height: 1rem">
                    <a
                      class="text-decoration-none text-white"
                      style="font-size: 0.8rem"
                      href="https://instagram.com/akdeniz.business.center?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"
                      target="_blank"
                      >@akdeniz.business.center
                    </a>
                  </p>
                </div>
              </li>
              <!--            <li>-->
              <!--              <i class="bi bi-envelope mt-5 display-1"></i>-->
              <!--              <p><a href="mailto:eofis@eofis.com.tr">eofis@eofis.com.tr</a></p>-->
              <!--            </li>-->
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.col-bg-image {
  background-image: url("/public/img/mersin_sahil.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
