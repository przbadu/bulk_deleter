import Vue from 'vue/dist/vue.esm';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { BootstrapVue } from 'bootstrap-vue';

import store from '../src/vuex';
import router from '../src/routes.js';
import App from '../src/app';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../src/lib/fontawesome';

// filters
import '../src/filters/strings.js';

Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
