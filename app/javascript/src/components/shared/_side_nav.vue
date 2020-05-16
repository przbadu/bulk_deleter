<template>
  <div class="sidebar" :class="{ active: sidebarActive }" id="sidebar">
    <div class="sidebar-header pl-2 pt-3 pb-3">
      <h5>Bulk Deleter</h5>
    </div>
    <ul class="list-unstyled components">
      <li v-for="item in menuItems" :key="item.name">
        <router-link exact-active-class="active" :to="item.path">
          {{ item.label }}
        </router-link>
      </li>
      <!-- <li>
        <router-link to="/requests" exact-active-class="active">
          <font-awesome-icon icon="plus" class="mr-2" />Requests
          <div class="badge badge-light align-middle float-right mt-1">
            10 New
          </div>
        </router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    menuItems() {
      return this.$store.getters['NavigationStore/items'];
    },
    sidebarActive() {
      return !this.$store.getters['NavigationStore/visibleSidebar'];
    },
  },
};
</script>

<style scoped>
a {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s;
}
a:hover,
a:focus {
  color: #fff;
  text-decoration: none;
  transition: all 0.3s;
}
.sidebar {
  min-width: 200px;
  max-width: 200px;
  background: linear-gradient(-138deg, #3d8ec4, #276aab);
  color: #fff;
  transition: all 0.3s;
}
.sidebar.active {
  margin-left: -200px;
}
.sidebar .sidebar-header {
  background: linear-gradient(-138deg, #3d8ec4, #276aab);
}
.sidebar ul.components {
  border-bottom: 1px solid #47748b;
}
.sidebar ul p {
  color: #fff;
  padding: 10px;
}
.sidebar ul li a {
  padding: 10px;
  font-size: 1em;
  display: block;
}
.sidebar ul li a:hover {
  color: #fff;
  background-color: #276aabcf;
}
.sidebar ul li a.active {
  color: #fff;
  background-color: #276aabcf;
}
@media (max-width: 768px) {
  .sidebar {
    margin-left: -200px;
  }
  .sidebar.active {
    margin-left: 0 !important;
  }
}
</style>
