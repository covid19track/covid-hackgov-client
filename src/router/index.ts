import VueRouter from "vue-router";
import index from "./routes/index";
import Charts from "./routes/Charts";
import Maps from "./routes/Maps";
import Info from "./routes/Info";
import Developers from "./routes/Developers";

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [index, Charts, Maps, Info, Developers],
});
