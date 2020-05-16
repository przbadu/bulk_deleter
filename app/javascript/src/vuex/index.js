import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

import UserStore from './stores/user.store';
import NavigationStore from './stores/navigation.store';
import CustomerStore from './stores/customer.store';

const store = new Vuex.Store({
  modules: {
    UserStore,
    NavigationStore,
    CustomerStore,
  },
});

export default store;
