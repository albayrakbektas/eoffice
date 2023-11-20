<script>
export default {
  name: "HomeFooter",
  computed: {},
  methods: {
    footerOffset() {
      let footer = this.$refs.footer;
      console.log(footer.getBoundingClientRect().bottom);
      return footer.getBoundingClientRect().top;
    },
  },
};
</script>

<template>
  <footer class="page-footer font-small" ref="footer">
    <hr class="mt-0" />
    <div class="container text-start text-md-left mt-5">
      <div class="row mt-3">
        <div class="col-12 col-md-4 col-lg-4 mx-auto mb-4">
          <div class="text-uppercase font-weight-bold">
            Akdeniz Business Center
          </div>
          <hr
            class="red darken-3 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 15rem"
          />
          <p>
            Akdeniz Business Center, girişimcilere, serbest meslek
            çalışanlarına, kobilere ve kurumsal firmalara, 2020'den bu yana
            çalışma alanları çözümleri sunuyor
          </p>
          <p>
            <a href="/ozel-ofisler"
              ><i class="fa fa-hand-o-right" aria-hidden="true"></i> Size Özel
              Ofisler</a
            >
          </p>
          <!--          <p>-->
          <!--            <a href="/bloglar"-->
          <!--              ><i class="fa fa-hand-o-right" aria-hidden="true"></i> Blog-->
          <!--              Yazıları</a-->
          <!--            >-->
          <!--          </p>-->
        </div>

        <div class="col-6 col-md-2 col-lg-2 offset-lg-2 mb-4">
          <div class="text-uppercase font-weight-bold">Kurumsal</div>
          <hr
            class="red darken-3 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p><a href="/hakkimizda">Hakkımızda</a></p>
        </div>

        <div class="col-6 col-md-2 col-lg-2 mb-4">
          <div class="text-uppercase font-weight-bold">Erişim</div>
          <hr
            class="red darken-3 mb-4 mt-0 d-inline-block mx-auto"
            style="width: 60px"
          />
          <p><a href="/iletisim">İletişim</a></p>
          <p><a href="/sss">SSS</a></p>
        </div>
      </div>
    </div>

    <div class="footer-copyright text-center py-3">
      <div class="container">
        <div class="row pb-5 pb-lg-0 d-flex align-items-center">
          <div
            class="col-12 col-md-12 col-lg-12 text-center text-md-left mb-4 mb-md-0"
          >
            <div class="mb-0">
              © 2023 Copyright
              <a href="/">Akdeniz Business Center</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.page-footer {
  background-color: #263238;
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
