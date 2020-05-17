import axios from 'axios';

export default {
  namespaced: true,
  state: {
    loading: false,
    accounts: [],
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    accounts(state) {
      return state.accounts;
    },
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setAccounts(state, accounts) {
      state.accounts = accounts;
    },
  },
  actions: {
    async fetchAllAccounts(context) {
      context.commit('setLoading', true);
      try {
        const result = await axios.get('/accounts');
        context.commit('setAccounts', result.data);
        context.commit('setLoading', false);
      } catch (e) {
        console.log(e);
        context.commit('setLoading', false);
      }
    },
  },
};
