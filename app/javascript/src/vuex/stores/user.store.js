import axios from 'axios';

export default {
  namespaced: true,
  state: {
    user_id: null,
    active_account_id: null,
    qbo_accounts: [],
  },
  mutations: {
    setUser(state, data) {
      state.user_id = data.user_id;
      state.active_account_id = data.active_account_id;
    },
  },
  actions: {
    async getConnectedAccounts(state) {
      const result = axios.get('/admin/api/qbo_accounts');
    },
  },
  getter: {
    userId(state) {
      return state.user_id;
    },
    activeAccountId(state) {
      return state.active_account_id;
    },
  },
};
