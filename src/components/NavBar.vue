<script>
export default {
  name: "NavBar",
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>

<template>
  <div class="container fixed-top">
    <header
      class="d-flex flex-wrap align-items-center justify-content-center justify-content-between py-3 mb-4"
    >
      <div class="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          class="d-inline-flex link-body-emphasis text-decoration-none"
        >
          <svg
            class="bi"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          >
            <use xlink:href="#bootstrap"></use>
          </svg>
        </a>
      </div>

      <ul
        v-if="!isMobile"
        class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"
      >
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2">Features</a></li>
        <li><a href="#" class="nav-link px-2">Pricing</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
        <!--        <button-->
        <!--          v-if="isMobile"-->
        <!--          class="btn btn-primary"-->
        <!--          type="button"-->
        <!--          data-bs-toggle="offcanvas"-->
        <!--          data-bs-target="#offcanvasExample"-->
        <!--          aria-controls="offcanvasExample"-->
        <!--        >-->
        <!--          menu-->
        <!--        </button>-->
        <i
          class="bi bi-list"
          v-if="isMobile"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        ></i>
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div class="d-flex h-100 flex-column flex-shrink-0 p-3 text-bg-dark">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                Akdeniz EOfis
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
              <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlink:href="#home"></use>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlink:href="#speedometer2"></use>
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlink:href="#table"></use>
                  </svg>
                  Orders
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlink:href="#grid"></use>
                  </svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#" class="nav-link text-white">
                  <svg class="bi pe-none me-2" width="16" height="16">
                    <use xlink:href="#people-circle"></use>
                  </svg>
                  Customers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped lang="scss">
i {
  font-size: 2rem;
  color: #ffffff;
}
</style>
