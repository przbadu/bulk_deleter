import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

import CustomerStore from './stores/customer.store';

const store = new Vuex.Store({
  modules: {
    CustomerStore,
  },
});

export default store;
