<script>
export default {
  name: "NavBarDene",
  data() {
    return {
      isNavbarExpanded: false,
      dropdownStates: {
        languageDropdown: false,
        servicesDropdown: false,
      },
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const navbar = this.$refs.navbar;
      if (window.scrollY > 0) {
        navbar.classList.add("navbar-bg-light");
      } else {
        navbar.classList.remove("navbar-bg-light");
      }
    },
    toggleNavbar() {
      this.isNavbarExpanded = !this.isNavbarExpanded;
    },
    toggleDropdown(dropdownName) {
      this.dropdownStates[dropdownName] = !this.dropdownStates[dropdownName];
    },
    changeLanguage(lang) {
      localStorage.setItem("userLanguage", lang);
      this.$i18n.locale = lang;
    },
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
    currentLanguage() {
      return this.$i18n.locale === "en" ? "En" : "Tr";
    },
    availableLanguages() {
      const languages = {
        en: "En",
        tr: "Tr",
      };
      let available = { ...languages };
      delete available[this.$i18n.locale];
      return available;
    },
    keywords() {
      return this.$t("keywords");
    },
  },
};
</script>

<template>
  <nav
    ref="navbar"
    class="navbar fixed-top navbar-expand-lg scrolling-navbar"
    style="height: 70px"
  >
    <a
      class="navbar-brand position-absolute sitelogo"
      href="/"
      style="left: 4%"
    >
      <div class="dc_img">
        <img
          src="/img/siteLogo.jpeg"
          style="height: 65px; width: 65px; border-radius: 50%"
          alt="Site Logo"
        />
      </div>
    </a>
    <div class="container navbar-container">
      <!-- Logo -->
      <a class="navbar-brand sitelogo" href="/">
        <div class="dc_img">
          <img
            src="/img/siteLogo.jpeg"
            alt="Site Logo"
            style="width: 0; height: 0"
          />
        </div>
      </a>
      <!-- Mobile Call Button -->
      <!--      <a-->
      <!--        class="navbar-brand mobile_call mx-auto d-lg-none callusbuton"-->
      <!--        href="tel:0537 600 1153"-->
      <!--      >-->
      <!--        <div class="dc_oth" style="margin-left: 40px">-->
      <!--          <div class="dc_img d-flex align-items-center justify-content-center">-->
      <!--            <i class="bi bi-telephone fs-6 text-danger"></i>-->
      <!--            <div class="dc_txt fs-6 mx-auto">{{ $t("keywords.callNow") }}</div>-->
      <!--          </div>-->
      <!--          <div class="dc_nmr text-danger fs-6 text-center fw-bold">-->
      <!--            05376001153-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </a>-->
      <div class="nav-item btn btn-danger d-md-none" style="margin-left: 10%">
        <a class="nav-link p-0" href="tel:0537 600 1153">
          <div class="">
            <div class="mx-auto text-white fw-bold">
              {{ keywords.callNow }}
            </div>
          </div>
        </a>
      </div>
      <button
        v-if="isMobile"
        class="navbar-toggler d-lg-flex col-lg-3 justify-content-end"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        v-if="isMobile"
        class="offcanvas offcanvas-end"
        style="background-color: #f0f8ff"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div
          class="offcanvas-header h-25 align-items-start"
          style="background-image: url('/img/mersin_sahil.jpeg')"
        >
          <!--          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>-->
          <img
            src="/img/siteLogo.jpeg"
            style="height: 120px; width: 120px; align-self: center"
            alt="Site Logo"
          />
          <button
            type="button"
            class="btn-close fw-bolder fs-4"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav ms-auto text-start align-items-start">
            <li
              class="nav-item d-flex justify-content-between align-items-center w-100"
              style="border-bottom: 1px solid #00008b"
            >
              <a class="nav-link waves-effect waves-light" href="/">{{
                keywords.home
              }}</a
              ><i class="bi bi-chevron-right"></i>
            </li>
            <!-- Other Links -->
            <li
              class="nav-item d-flex justify-content-between align-items-center w-100"
              style="border-bottom: 1px solid #00008b"
            >
              <a class="nav-link waves-effect waves-light" href="/hazir-ofis">{{
                keywords.flexibleOffice
              }}</a
              ><i class="bi bi-chevron-right"></i>
            </li>
            <li
              class="nav-item d-flex justify-content-between align-items-center w-100"
              style="border-bottom: 1px solid #00008b"
            >
              <a class="nav-link waves-effect waves-light" href="/sanal-ofis">{{
                keywords.virtualOffice
              }}</a
              ><i class="bi bi-chevron-right"></i>
            </li>
            <li
              class="nav-item d-flex justify-content-between align-items-center w-100"
              style="border-bottom: 1px solid #00008b"
            >
              <a class="nav-link waves-effect waves-light" href="/co-working">{{
                keywords.coworkingOffice
              }}</a
              ><i class="bi bi-chevron-right"></i>
            </li>
            <li
              class="nav-item d-flex justify-content-between align-items-center w-100"
              style="border-bottom: 1px solid #00008b"
            >
              <a class="nav-link waves-effect waves-light" href="/hakkimizda">{{
                keywords.aboutUs
              }}</a
              ><i class="bi bi-chevron-right"></i>
            </li>
            <li
              class="nav-item d-flex justify-content-between align-items-center w-100"
              style="border-bottom: 1px solid #00008b"
            >
              <a class="nav-link waves-effect waves-light" href="/fiyatlar">{{
                keywords.prices
              }}</a
              ><i class="bi bi-chevron-right"></i>
            </li>
            <li
              class="nav-item d-flex justify-content-between align-items-center w-100"
              style="border-bottom: 1px solid #00008b"
            >
              <a class="nav-link waves-effect waves-light" href="/iletisim">{{
                keywords.contact
              }}</a
              ><i class="bi bi-chevron-right"></i>
            </li>
            <li class="nav-item d-none d-lg-block">
              <a
                class="nav-link callusbuton waves-effect waves-light"
                href="tel:0537 600 1153"
              >
                <div class="dc_oth">
                  <div class="dc_txt mx-auto">{{ keywords.callNow }}</div>
                  <div class="dc_nmr text-primary fw-bold">05376001153</div>
                </div>
                <div
                  class="dc_img d-flex align-items-center justify-content-center"
                >
                  <i class="bi bi-telephone fs-3 text-danger"></i>
                </div>
              </a>
            </li>
          </ul>
          <div class="row my-4">
            <div class="col-6">
              <button
                class="btn btn-danger w-100"
                @click="changeLanguage('tr')"
              >
                Türkçe
              </button>
            </div>
            <div class="col-6">
              <button
                class="btn btn-danger w-100"
                @click="changeLanguage('en')"
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Navbar Collapse -->
      <div
        :class="['navbar-collapse', 'collapse', { show: isNavbarExpanded }]"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ms-auto">
          <!-- Services Dropdown -->
          <li class="nav-item d-none d-lg-block">
            <div class="dropdown">
              <a
                class="btn btn-secondary bg-transparent dropdown-toggle"
                style="outline: none; border: none; color: #000000"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ keywords.services }}
              </a>

              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
                style="
                  background-color: rgba(245, 245, 245, 1);
                  border: none;
                  margin: 0;
                  padding: 0;
                "
              >
                <li class="nav-item">
                  <router-link to="/hazir-ofis" class="dropdown-item">{{
                    keywords.flexibleOffice
                  }}</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/sanal-ofis" class="dropdown-item">{{
                    keywords.virtualOffice
                  }}</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/co-working" class="dropdown-item">{{
                    keywords.coworkingOffice
                  }}</router-link>
                </li>
              </ul>
            </div>
          </li>
          <!-- Other Links -->
          <li class="nav-item hideforsmallpc">
            <a class="nav-link waves-effect waves-light" href="/iletisim">{{
              keywords.contact
            }}</a>
          </li>
          <li class="nav-item hideforsmallpc">
            <a class="nav-link waves-effect waves-light" href="/hakkimizda">{{
              keywords.aboutUs
            }}</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link waves-effect waves-light" href="/fiyatlar">{{
              keywords.prices
            }}</a>
          </li>
          <li class="nav-item btn btn-danger d-none d-lg-block">
            <a class="nav-link p-0" href="tel:0537 600 1153">
              <div class="">
                <div class="mx-auto text-white fw-bold">
                  {{ keywords.callNow }}
                </div>
              </div>
            </a>
          </li>
          <!-- lang for desktop -->
          <li class="nav-item ms-2 btn btn-danger d-none d-lg-block">
            <div class="dropdown">
              <a
                class="btn p-0 btn-secondary text-white fw-bold bg-transparent dropdown-toggle dropdown-toggle-non"
                style="outline: none; border: none"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{ currentLanguage }}
              </a>

              <ul
                class="dropdown-menu dd-lang"
                aria-labelledby="dropdownMenuLink"
                style="
                  background-color: transparent;
                  border: none;
                  margin: 0;
                  padding: 0;
                "
              >
                <li
                  class=""
                  v-for="(language, code) in availableLanguages"
                  :key="code"
                >
                  <a
                    class="dropdown-item item-lang px-0 pt-2 fw-bold"
                    @click.prevent="changeLanguage(code)"
                    href="#"
                    >{{ language }}</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  background: transparent;
  transition: all 0.5s;
}
.navbar-bg-light {
  background: rgba(245, 245, 245, 1);
}
.nav-link {
  padding-right: var(--bs-navbar-nav-link-padding-x);
  padding-left: var(--bs-navbar-nav-link-padding-x);
}
.dc_img {
  img {
    height: 40px;
    transition: all 0.5s;
  }
}
.callusbuton {
  display: flex;
}
ul {
  align-items: center;
}
.item-lang:hover {
  background-color: transparent;
  color: #fff;
}
.dropdown-toggle-non::after {
  display: none;
}
</style>
