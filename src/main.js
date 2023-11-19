import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap-icons/font/bootstrap-icons";

import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/vue-flicking/dist/flicking-inline.css";
import VueI18n from "vue-i18n";

Vue.use(Flicking);
Vue.use(VueI18n);

Vue.config.productionTip = false;

const messages = {
  en: require("./locales/en.json"),
  tr: require("./locales/tr.json"),
};

const i18n = new VueI18n({
  locale: "en", // Varsayılan dil
  fallbackLocale: "en",
  messages,
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
