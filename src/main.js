import Vue from "vue";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/display.css'
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/common.scss";

import App from "./App";
import router from "./router";

Vue.use(ElementUI,{size:'small'});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
