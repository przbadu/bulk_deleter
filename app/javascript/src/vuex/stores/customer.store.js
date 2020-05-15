const CustomerStore = {
  namespaced: true,
  state: {
    customers: [],
    customer: {},
  },
  mutations: {},
  actions: {
    index(context, query) {
      $.ajax({
        url: `musicians`,
        type: 'get',
        data: query,
        success: function(data) {
          context.commit('many', data);
        },
      });
    },
    show(context, id) {
      $.ajax({
        url: `musicians/${id}`,
        type: 'get',
        success: function(data) {
          context.commit('one', data);
        },
      });
    },
  },
};

export default MusicianStore;
