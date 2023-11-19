import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/hakkimizda",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/sss",
    name: "sss",
    // route level code-splitting
    // this generates a separate chunk (sss.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "sss" */ "../views/SssView.vue"),
  },
  {
    path: "/hazir-ofis",
    name: "hazir-ofis",
    // route level code-splitting
    // this generates a separate chunk (hazir-ofis.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "hazir-ofis" */ "../views/ReadOfficeView.vue"
      ),
  },
  {
    path: "/sanal-ofis",
    name: "sanal-ofis",
    // route level code-splitting
    // this generates a separate chunk (sanal-ofis.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "sanal-ofis" */ "../views/VirtualOfficeView.vue"
      ),
  },
  {
    path: "/co-working",
    name: "co-working",
    // route level code-splitting
    // this generates a separate chunk (co-working.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "co-working" */ "../views/CoWorkingView.vue"),
  },
  {
    path: "/fiyatlar",
    name: "fiyatlar",
    // route level code-splitting
    // this generates a separate chunk (fiyatlar.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "fiyatlar" */ "../views/PricesView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
