<script>
export default {
  name: "NavBarDene",
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>

<template>
  <nav class="navbar">
    <div class="container-fluid">
      <div class="collapse navbar-collapse d-flex">
        <a class="navbar-brand col-3 col-lg-3 me-0" href="/">Centered nav</a>
        <ul
          v-if="!isMobile"
          class="navbar-nav col-9 col-lg-9 justify-content-lg-center"
          style="flex-direction: row"
        >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
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
        <button
          v-else
          class="navbar-toggler d-lg-flex col-lg-3 ms-auto justify-content-end"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
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
          <form class="d-flex mt-3" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
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
</style>
