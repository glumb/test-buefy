import Vue from "vue";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import App from "./App.vue";

import testPlugin from "./testPlugin";

Vue.config.productionTip = false;

Vue.use(Buefy);

Vue.use(testPlugin);

new Vue({
  render: h => h(App)
}).$mount("#app");
