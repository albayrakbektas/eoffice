<script>
export default {
  name: "HomeFooter",
  computed: {
    keywords() {
      return this.$t("keywords");
    },
  },
  methods: {},
};
</script>

<template>
  <footer class="page-footer font-small" ref="footer">
    <hr class="mt-0" />
    <div class="container text-start text-md-left mt-5">
      <div class="row mt-3">
        <div class="col-12 col-md-4 me-auto mb-4">
          <div
            class="text-uppercase font-weight-bold"
            style="color: rgba(13, 60, 85, 1)"
          >
            Akdeniz Business Center
          </div>
          <hr
            class="mb-3 mt-0 d-inline-block mx-auto"
            style="width: 15rem; color: rgba(0, 123, 255, 1)"
          />
          <p style="color: rgba(50, 50, 50, 1) !important">
            Akdeniz Business Center, girişimcilere, serbest meslek
            çalışanlarına, kobilere ve kurumsal firmalara, 2020'den bu yana
            çalışma alanları çözümleri sunuyor
          </p>
        </div>

        <div class="col-6 col-md-2 mb-4">
          <div
            class="text-uppercase font-weight-bold"
            style="color: rgba(13, 60, 85, 1)"
          >
            {{ $t("footer.corporate") }}
          </div>
          <hr
            class="mb-3 mt-0 d-inline-block mx-auto"
            style="width: 60px; color: rgba(0, 123, 255, 1)"
          />
          <p>
            <a href="/">{{ keywords.home }}</a>
          </p>
          <p>
            <a href="/hakkimizda">{{ keywords.aboutUs }}</a>
          </p>
          <p>
            <a href="/iletisim">{{ keywords.contact }}</a>
          </p>
        </div>
        <div class="col-6 col-md-2 mb-4">
          <div
            class="text-uppercase font-weight-bold"
            style="color: rgba(13, 60, 85, 1)"
          >
            {{ $t("footer.services") }}
          </div>
          <hr
            class="mb-3 mt-0 d-inline-block mx-auto"
            style="width: 60px; color: rgba(0, 123, 255, 1)"
          />

          <p>
            <a href="/hazir-ofis">{{ keywords.flexibleOffice }}</a>
          </p>
          <p>
            <a href="/sanal-ofis">{{ keywords.virtualOffice }}</a>
          </p>
          <p>
            <a href="/co-working">{{ keywords.coworkingOffice }}</a>
          </p>
        </div>
        <div class="col-6 col-md-2 mb-4">
          <div
            class="text-uppercase font-weight-bold"
            style="color: rgba(13, 60, 85, 1)"
          >
            {{ $t("footer.socialMedia") }}
          </div>
          <hr
            class="mb-3 mt-0 d-inline-block mx-auto"
            style="width: 60px; color: rgba(13, 60, 85, 1)"
          />

          <p>
            <a
              class=""
              href="https://instagram.com/akdeniz.business.center?igshid=NzZlODBkYWE4Ng%3D%3D&utm_source=qr"
              target="_blank"
              >Instagram
            </a>
          </p>
          <p>
            <a href="mailto:info@akdenizbusinesscenter.com">Email</a>
          </p>
        </div>
      </div>
    </div>

    <div class="footer-copyright text-center py-3">
      <div class="container">
        <div class="row pb-5 pb-lg-0 d-flex align-items-center">
          <div
            class="col-12 col-md-12 col-lg-12 text-center text-md-left mb-md-0"
          >
            <div class="mb-0">
              <span style="color: rgba(50, 50, 50, 1)">© 2023 Copyright</span>
              <a
                class="fw-bolder mx-2"
                style="color: rgba(13, 60, 85, 1)"
                href="/"
                >Akdeniz Business Center</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.page-footer {
  background-color: rgba(245, 245, 245, 1);
}
footer.page-footer {
  bottom: 0;
  color: #fff;
}
a {
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #c62828;
    z-index: 0;
  }
}
</style>
