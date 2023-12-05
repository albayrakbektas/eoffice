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
  <div v-if="isMobile" class="hizmetler_mobile my-3 px-2">
    <div class="mb-1">
      <router-link to="/co-working" class="mb-1 text-decoration-none">
        <div class="card p-2" data-modal="hizmetler_0">
          <div class="m_hizmetler_card d-flex">
            <div class="mh_img">
              <img
                class="centerize"
                src="/img/flexible_office.jpeg"
                alt="Hazır Ofis"
              />
            </div>
            <div class="mh_cnt ms-3">
              <div class="title my-1">
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
        <div class="card p-2" data-modal="hizmetler_2">
          <div class="m_hizmetler_card d-flex">
            <div class="mh_img">
              <img
                class="centerize"
                src="/img/virtual_office.jpeg"
                alt="Sanal Ofis"
              />
            </div>
            <div class="mh_cnt ms-3">
              <div class="title my-1">
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
        <div class="card p-2" data-modal="hizmetler_3">
          <div class="m_hizmetler_card d-flex">
            <div class="mh_img">
              <img
                class="centerize"
                src="/img/coworking.jpeg"
                alt="Paylaşımlı Ofis (Ortak Ofis)"
              />
            </div>
            <div class="mh_cnt ms-3">
              <div class="title my-1">
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
.mh_img {
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
.centerize {
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
}
.modallize {
  opacity: 0;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 60px auto 50px;
  border-radius: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 3;
  width: 0;
  max-width: 600px;
  height: 0;
  -webkit-max-logical-height: calc(100% - 113px);
  -webkit-max-height: calc(100% - 113px);
  max-height: calc(100% - 113px);
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
  transition: border-radius 0.15s, width 0.15s, height 0.25s;
  .content {
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s 0.4s;
    .modal_card {
      height: 100%;
    }
  }
}
.closs_modal_material {
  background: white;
  text-align: center;
  position: absolute;
  width: 48px;
  height: 40px;
  right: 0;
  top: 0;
  font-size: 26px;
  border-radius: 0 0.25rem 0 0.25rem;
  z-index: 100;
}
i {
  color: #c62828;
}
</style>
