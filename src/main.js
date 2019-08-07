import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import api from "./api"; // 导入api接口
import "./api/mock"; // 导入api mock

import bootstrap from "./utils/bootstrap";

import "./assets/css/normalize.css";
import "./assets/css/utilities.css";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/scss/app.scss";

Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.config.productionTip = false;
Vue.use(ElementUI);
new Vue({
  router,
  store,
  created() {
    bootstrap();
  },
  render: h => h(App)
}).$mount("#app");
