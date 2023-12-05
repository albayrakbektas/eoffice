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

      <div
        class="row col-11 col-md-4 flex-center justify-content-center align-items-center d-none d-md-flex"
      >
        <img
          src="/img/avatar_call_center.jpeg"
          alt="avatar_call_center"
          class="img-fluid col-6 object-fit-cover"
          style="border-radius: 50%; height: 10rem; width: 10rem"
        />
        <img
          src="/img/avatar_meeting.jpeg"
          alt="avatar_meeting"
          class="img-fluid col-6 object-fit-cover"
          style="height: 10rem; width: 10rem"
        />
        <img
          src="/img/avatar_office_room.jpeg"
          alt="avatar_office_room"
          class="img-fluid col-6 object-fit-cover"
          style="height: 10rem; width: 10rem"
        />
        <img
          src="/img/avatar_office_network.jpeg"
          alt="avatar_office_network"
          class="img-fluid col-6 object-fit-cover"
          style="border-radius: 50%; height: 10rem; width: 10rem"
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
