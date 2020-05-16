import Vue from 'vue/dist/vue.esm';
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user_id: null,
    active_account_id: null,
    qbo_accounts: [],
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setUser(state, data) {
      state.user_id = data.user_id;
      state.active_account_id = data.active_account_id;
    },
    setQboAccounts(state, data) {
      // state.qbo_accounts = data;
      Vue.set(state, 'qbo_accounts', [...data]);
    },
  },
  actions: {
    async fetchConnectedAccounts(state) {
      const result = await axios.get('/api/admins/qbo_accounts');
      state.commit('setQboAccounts', result.data);
    },
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    userId(state) {
      return state.user_id;
    },
    activeQboAccount(state) {
      return state.qbo_accounts.find(
        (account) => account.id === state.active_account_id,
      );
    },
    otherQboAccounts(state) {
      return state.qbo_accounts.filter(
        (account) => account.id !== state.active_account_id,
      );
    },
  },
};
