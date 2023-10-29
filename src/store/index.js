import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMobile: null, // Ekran boyutuna göre belirleyeceğimiz durum
  },
  mutations: {
    setMobile(state, isMobile) {
      state.isMobile = isMobile;
    },
  },
  actions: {
    checkScreenSize({ commit }) {
      const isMobile = window.innerWidth <= 768; // Örnek bir boyut sınırı
      commit("setMobile", isMobile);
    },
  },
  getters: {
    isMobile: (state) => state.isMobile,
  },
  modules: {},
});
