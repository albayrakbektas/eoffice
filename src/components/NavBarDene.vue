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
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>

<template>
  <!--  <nav class="navbar">-->
  <!--    <div class="container-fluid">-->
  <!--      <div class="collapse navbar-collapse d-flex">-->
  <!--        <a class="navbar-brand col-3 col-lg-3 me-auto" href="/">{{-->
  <!--          $t("hello")-->
  <!--        }}</a>-->
  <!--        <ul-->
  <!--          v-if="!isMobile"-->
  <!--          class="navbar-nav col-9 col-lg-9 justify-content-lg-center"-->
  <!--          style="flex-direction: row"-->
  <!--        >-->
  <!--          <li class="nav-item ms-auto dropdown">-->
  <!--            <button-->
  <!--              class="btn dropdown-toggle"-->
  <!--              data-bs-toggle="dropdown"-->
  <!--              aria-expanded="false"-->
  <!--            >-->
  <!--              Hizmetler-->
  <!--            </button>-->
  <!--            <ul class="dropdown-menu position-absolute">-->
  <!--              <li><a class="dropdown-item" href="#">Action</a></li>-->
  <!--              <li><a class="dropdown-item" href="#">Another action</a></li>-->
  <!--              <li><a class="dropdown-item" href="#">Something else here</a></li>-->
  <!--            </ul>-->
  <!--          </li>-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link" href="#">Hakkimizda</a>-->
  <!--          </li>-->
  <!--          <li class="nav-item">-->
  <!--            <a class="nav-link" href="#">Fiyatlar</a>-->
  <!--          </li>-->
  <!--          <li class="nav-item ms-auto d-none d-lg-block desktop_call">-->
  <!--            <a-->
  <!--              class="nav-link callusbuton waves-effect waves-light"-->
  <!--              href="tel:444-34-80"-->
  <!--            >-->
  <!--              <div class="dc_img">-->
  <!--                <img-->
  <!--                  src="/ass/img/svg/phone.svg"-->
  <!--                  alt="Hemen Ara"-->
  <!--                />-->
  <!--              </div>-->
  <!--              <div class="dc_oth">-->
  <!--                <div class="dc_txt">HEMEN ARA</div>-->
  <!--                <div class="dc_nmr">444 <span>34 80</span></div>-->
  <!--              </div>-->
  <!--            </a>-->
  <!--          </li>-->
  <!--        </ul>-->
  <!--        <button-->
  <!--          v-else-->
  <!--          class="navbar-toggler d-lg-flex col-lg-3 ms-auto justify-content-end"-->
  <!--          type="button"-->
  <!--          data-bs-toggle="offcanvas"-->
  <!--          data-bs-target="#offcanvasNavbar"-->
  <!--          aria-controls="offcanvasNavbar"-->
  <!--          aria-label="Toggle navigation"-->
  <!--        >-->
  <!--          <span class="navbar-toggler-icon"></span>-->
  <!--        </button>-->
  <!--      </div>-->
  <!--      <div-->
  <!--        class="offcanvas offcanvas-end"-->
  <!--        tabindex="-1"-->
  <!--        id="offcanvasNavbar"-->
  <!--        aria-labelledby="offcanvasNavbarLabel"-->
  <!--      >-->
  <!--        <div class="offcanvas-header">-->
  <!--          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>-->
  <!--          <button-->
  <!--            type="button"-->
  <!--            class="btn-close"-->
  <!--            data-bs-dismiss="offcanvas"-->
  <!--            aria-label="Close"-->
  <!--          ></button>-->
  <!--        </div>-->
  <!--        <div class="offcanvas-body">-->
  <!--          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">-->
  <!--            <li class="nav-item">-->
  <!--              <a class="nav-link active" aria-current="page" href="#">Home</a>-->
  <!--            </li>-->
  <!--            <li class="nav-item">-->
  <!--              <a class="nav-link" href="#">Link</a>-->
  <!--            </li>-->
  <!--            <li class="nav-item dropdown">-->
  <!--              <a-->
  <!--                class="nav-link dropdown-toggle"-->
  <!--                href="#"-->
  <!--                role="button"-->
  <!--                data-bs-toggle="dropdown"-->
  <!--                aria-expanded="false"-->
  <!--              >-->
  <!--                Dropdown-->
  <!--              </a>-->
  <!--              <ul class="dropdown-menu">-->
  <!--                <li><a class="dropdown-item" href="#">Action</a></li>-->
  <!--                <li><a class="dropdown-item" href="#">Another action</a></li>-->
  <!--                <li>-->
  <!--                  <hr class="dropdown-divider" />-->
  <!--                </li>-->
  <!--                <li>-->
  <!--                  <a class="dropdown-item" href="#">Something else here</a>-->
  <!--                </li>-->
  <!--              </ul>-->
  <!--            </li>-->
  <!--          </ul>-->
  <!--          <form class="d-flex mt-3" role="search">-->
  <!--            <input-->
  <!--              class="form-control me-2"-->
  <!--              type="search"-->
  <!--              placeholder="Search"-->
  <!--              aria-label="Search"-->
  <!--            />-->
  <!--            <button class="btn btn-outline-success" type="submit">-->
  <!--              Search-->
  <!--            </button>-->
  <!--          </form>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </nav>-->
  <nav class="navbar fixed-top navbar-expand-lg scrolling-navbar">
    <div class="container navbar-container">
      <!-- Logo -->
      <a class="navbar-brand sitelogo" href="/">
        <div class="dc_img">
          <img
            src="https://picsum.photos/200"
            style="height: 40px; width: 40px"
            alt="Site Logo"
          />
        </div>
      </a>
      <!-- Mobile Call Button -->
      <a
        class="navbar-brand mobile_call mx-auto d-lg-none callusbuton"
        href="tel:444-34-80"
      >
        <!--        <div class="dc_img">-->
        <!--          <img src="https://picsum.photos/200" alt="Hemen Ara" />-->
        <!--        </div>-->
        <div class="dc_oth">
          <div class="dc_txt">HEMEN ARA</div>
          <div class="dc_nmr">444 <span>34 80</span></div>
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
        <ul class="navbar-nav me-auto">
          <!-- Language Dropdown for Desktop -->
          <li class="nav-item d-none d-lg-block">
            <div class="dropdown">
              <a
                class="btn btn-secondary bg-transparent dropdown-toggle"
                style="outline: none; border: none"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Turkce
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
                <li><a class="dropdown-item item-lang" href="#">English</a></li>
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
              href="tel:444-34-80"
            >
              <div class="dc_img">
                <img
                  src="//www.eofis.com.tr/ass/img/svg/phone.svg"
                  alt="Hemen Ara"
                />
              </div>
              <div class="dc_oth">
                <div class="dc_txt">HEMEN ARA</div>
                <div class="dc_nmr">444 <span>34 80</span></div>
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
