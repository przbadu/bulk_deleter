import entities from '../../constants/entities.data';

export default {
  namespaced: true,
  state: {
    sidebarVisible: true,
    items: entities,
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible;
    },
  },
  actions: {
    toggleSidebar(state) {
      state.commit('toggleSidebar');
    },
  },
  getters: {
    items(state) {
      return state.items;
    },
    visibleSidebar(state) {
      return state.sidebarVisible;
    },
  },
};