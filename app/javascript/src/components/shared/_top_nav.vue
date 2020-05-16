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
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleSidebar() {
      this.$store.dispatch('NavigationStore/toggleSidebar');
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
