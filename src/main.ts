import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueRouter from "vue-router";
import "vue-navigation-bar/dist/vue-navigation-bar.css";
import VueNavigationBar from "vue-navigation-bar";
import vuescroll from "vuescroll";

Vue.config.productionTip = false;

Vue.component("vue-navigation-bar", VueNavigationBar);
Vue.use(VueRouter);
Vue.use(vuescroll);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
