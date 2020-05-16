<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        type="button"
        id="sidebarCollapse"
        class="btn btn-info mt-1 mb-1"
        @click="toggleSidebar"
      >
        <font-awesome-icon icon="bars" />
      </button>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-4 mr-auto">
          <b-nav-item-dropdown text="Connected With: Company Name" right>
            <b-dropdown-item>Second company</b-dropdown-item>
            <b-dropdown-item>Third Company</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </nav>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('UserStore/fetchQboAccounts');
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('NavigationStore/toggleSidebar');
    },
  },
};
</script>

<style scoped>
.navbar {
  border: none;
  background: #fff !important;
  box-shadow: 0 2px 8px #d1ceda;
}

#sidebarCollapse {
  margin-left: -32px;
  background: transparent;
  color: #000;
  border: none;
}

@media (max-width: 768px) {
  #sidebarCollapse {
    margin-left: -20px;
  }
}
</style>
