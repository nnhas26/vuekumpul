import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");

createApp(App).use(store).use(router).mount("#app");

// import Vue from "vue";
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);
