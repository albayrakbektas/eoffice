<script>
export default {
  name: "WhyEOffice",
  computed: {
    abc() {
      return this.$t("sections.whyAbc");
    },
  },
};
</script>

<template>
  <div class="container">
    <h2 class="mb-3 mb-lg-5 h3-responsive font-weight-normal text-center">
      {{ abc.title }}
    </h2>
    <div
      class="row text-start features-small mb-5 mt-3 wow fadeIn"
      style="visibility: visible; animation-name: fadeIn"
    >
      <div class="col-12 col-md-4">
        <div
          v-for="(item, index) in abc.listLeft"
          :key="index"
          class="row m-2 ml-2 ml-lg-0"
        >
          <div class="col-1 d-flex justify-content-center align-items-center">
            <i class="bi bi-check-circle-fill fs-3 text-primary"></i>
          </div>
          <div class="col-11 d-flex justify-content-left align-items-center">
            <div class="feature-title my-0">{{ item }}</div>
          </div>
        </div>
      </div>

      <div class="col-11 col-md-4 flex-center d-none d-md-flex">
        <img
          src="//www.eofis.com.tr/ass/img/office-x.webp"
          alt="eOfis"
          class="z-depth-0 img-fluid"
        />
      </div>

      <div class="col-12 col-md-4">
        <div
          v-for="(item, index) in abc.listRight"
          :key="index"
          class="row m-2 ml-2 ml-lg-0"
        >
          <div class="col-1 d-flex justify-content-center align-items-center">
            <i class="bi bi-check-circle-fill fs-3 text-primary"></i>
          </div>
          <div class="col-11 d-flex justify-content-left align-items-center">
            <div class="feature-title my-0">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
