import Vue from 'vue/dist/vue.esm';
import store from '../src/vuex';
import router from '../src/routes.js';

// import all filters
import '../src/filters/strings.js';

const app = new Vue({
  router,
  store,
}).$mount('#app');
