import Vue from 'vue/dist/vue.esm';
import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user_id: null,
    active_account_id: null,
    qbo_accounts: [],
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
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setUser(state, data) {
      const { id, active_account_id } = data;
      state.user_id = id;
      state.active_account_id = active_account_id;
    },
    setQboAccounts(state, data) {
      Vue.set(state, 'qbo_accounts', [...data]);
    },
  },
  actions: {
    async fetchConnectedAccounts(context) {
      const result = await axios.get('/qbo_accounts');
      context.commit('setQboAccounts', result.data);
    },
    async switchAccount(context, id) {
      const result = await axios.put(`/switch_account/${id}`);
      context.commit('setUser', result.data);
    },
  },
};
