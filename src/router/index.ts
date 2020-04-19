import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/devs",
    name: "Developers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Developers.vue")
  },
  {
    path: "/charts",
    name: "Charts",
    // lazy loading
    component: () =>
      import(/* webpackChunkName: "charts" */ "../views/Charts.vue")
  },
  {
    path: "/map",
    name: "Map",
    // lazy loading
    component: () => import(/* webpackChunkName: "maps" */ "../views/Map.vue")
  },
  {
    path: "/info",
    name: "Info",
    // lazy loading
    component: () => import(/* webpackChunkName: "info" */ "../views/Info.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
