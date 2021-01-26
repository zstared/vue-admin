import Vue from "vue";
import ElementUI from "element-ui";
// import 'element-ui/lib/theme-chalk/display.css'
// import "element-ui/lib/theme-chalk/index.css";
import 'remixicon/fonts/remixicon.css'
import "@/styles/common.scss";

Vue.use(ElementUI,{size:'small'});

import App from "./App";
import router from "./router";
import store from './store'
import Fragment from 'vue-fragment'

Vue.use(Fragment.Plugin)

Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
