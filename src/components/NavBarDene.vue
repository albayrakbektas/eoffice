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
  methods: {
    toggleNavbar() {
      this.isNavbarExpanded = !this.isNavbarExpanded;
    },
    toggleDropdown(dropdownName) {
      this.dropdownStates[dropdownName] = !this.dropdownStates[dropdownName];
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
    },
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
    currentLanguage() {
      return this.$i18n.locale === "en" ? "English" : "Türkçe";
    },
    availableLanguages() {
      const languages = {
        en: "English",
        tr: "Türkçe",
      };
      let available = { ...languages };
      delete available[this.$i18n.locale];
      return available;
    },
  },
};
</script>

<template>
  <nav class="navbar fixed-top navbar-expand-lg scrolling-navbar">
    <a
      class="navbar-brand position-absolute sitelogo"
      href="/"
      style="left: 4%"
    >
      <div class="dc_img">
        <img
          src="/img/siteLogo.jpeg"
          style="height: 70px; width: 70px"
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
      <a
        class="navbar-brand mobile_call mx-auto d-lg-none callusbuton"
        href="tel:0537 600 1153"
      >
        <div class="dc_oth" style="margin-left: 40px">
          <div class="dc_img d-flex align-items-center justify-content-center">
            <i class="bi bi-telephone fs-6 text-danger"></i>
            <div class="dc_txt fs-6 mx-auto">HEMEN ARA</div>
          </div>
          <div class="dc_nmr text-danger fw-bold">05376001153</div>
        </div>
      </a>
      <!-- Navbar Toggler -->
      <!--      <button class="navbar-toggler" type="button" @click="toggleNavbar">-->
      <!--        <span class="navbar-toggler-line" v-for="i in 3" :key="i"></span>-->
      <!--      </button>-->
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
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- Navbar Collapse -->
      <div
        :class="['navbar-collapse', 'collapse', { show: isNavbarExpanded }]"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav me-auto" style="margin-left: 40px">
          <!-- Language Dropdown for Desktop -->
          <li class="nav-item d-none d-lg-block">
            <div class="dropdown">
              <a
                class="btn btn-secondary text-danger bg-transparent dropdown-toggle"
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
                <li v-for="(language, code) in availableLanguages" :key="code">
                  <a
                    class="dropdown-item item-lang"
                    @click.prevent="changeLanguage(code)"
                    href="#"
                    >{{ language }}</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
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
                Hizmetler
              </a>

              <ul
                class="dropdown-menu"
                aria-labelledby="dropdownMenuLink"
                style="
                  background-color: transparent;
                  border: none;
                  margin: 0;
                  padding: 0;
                "
              >
                <li class="nav-item">
                  <router-link to="/hazir-ofis" class="dropdown-item"
                    >Hazır Ofis</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/hazir-ofis" class="dropdown-item"
                    >Sanal Ofis</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/hazir-ofis" class="dropdown-item"
                    >Toplanti Salonu</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
          <!-- Other Links -->
          <li class="nav-item hideforsmallpc">
            <a class="nav-link waves-effect waves-light" href="/hakkimizda"
              >Hakkımızda</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link waves-effect waves-light" href="/fiyatlar"
              >Fiyatlar</a
            >
          </li>
          <li class="nav-item d-none d-lg-block desktop_call">
            <a
              class="nav-link callusbuton waves-effect waves-light"
              href="tel:0537 600 1153"
            >
              <div class="dc_oth">
                <div class="dc_txt mx-auto">HEMEN ARA</div>
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
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
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
</style>
