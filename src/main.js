import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./stores";
import api from './api';

import '../public/css/animate.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(ElementUI);
Vue.prototype.$api = api; 
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
