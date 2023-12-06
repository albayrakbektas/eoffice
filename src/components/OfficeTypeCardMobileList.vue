<script>
// import OfficeTypeCardMobile from "@/components/OfficeTypeCardMobile.vue";

export default {
  name: "OfficeTypeCardMobileList",
  components: {},
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
};
</script>

<template>
  <div v-if="isMobile" class="my-3 px-2">
    <div class="mb-1">
      <router-link to="/co-working" class="mb-1 text-decoration-none">
        <div class="card p-2">
          <div class="d-flex">
            <div class="card-img">
              <img
                class="center-img"
                src="/img/flexible_office.jpeg"
                alt="Hazır Ofis"
              />
            </div>
            <div class="ms-3">
              <div class="title mt-1 mb-0">
                {{ $t("homeCoverCards.flexibleOffice.title") }}
              </div>
              <div class="sub_title">
                {{ $t("homeCoverCards.flexibleOffice.subtitle") }}
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="mb-1">
      <router-link to="/co-working" class="mb-1 text-decoration-none">
        <div class="card p-2">
          <div class="d-flex">
            <div class="card-img">
              <img
                class="center-img"
                src="/img/virtual_office.jpeg"
                alt="Sanal Ofis"
              />
            </div>
            <div class="ms-3">
              <div class="title mt-1 mb-0">
                {{ $t("homeCoverCards.virtualOffice.title") }}
              </div>
              <div class="sub_title">
                {{ $t("homeCoverCards.virtualOffice.subtitle") }}
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="mb-1">
      <router-link to="/co-working" class="mb-1 text-decoration-none">
        <div class="card p-2">
          <div class="d-flex">
            <div class="card-img">
              <img
                class="center-img"
                src="/img/coworking.jpeg"
                alt="Paylaşımlı Ofis (Ortak Ofis)"
              />
            </div>
            <div class="ms-3">
              <div class="title mt-1 mb-0">
                {{ $t("homeCoverCards.coworkingOffice.title") }}
              </div>
              <div class="sub_title">
                {{ $t("homeCoverCards.coworkingOffice.subtitle") }}
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  position: relative;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border: 0;
}
.card-img {
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 0.25rem;
}
img {
  width: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
}
.center-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.title {
  color: #263238;
  font-weight: 600;
  opacity: 0.8;
}
.sub_title {
  font-style: italic;
  font-weight: 400;
  font-size: 0.75rem;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
i {
  color: #c62828;
}
</style>
