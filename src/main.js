import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "lib-flexible";
import Vant from "vant";
import "vant/lib/index.css";

Vue.use(Vant);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  to.meta.title ? (document.title = to.meta.title) : "乐学东方";
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
