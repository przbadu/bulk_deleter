<template>
  <div class="wrapper">
    <!-- sidebar -->
    <side-nav />

    <div class="content">
      <!-- top navigation -->
      <top-nav />

      <div class="content-wrapper">
        <!-- render component from routes -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import SideNav from "./components/shared/_side_nav";
import TopNav from "./components/shared/_top_nav";

export default {
  components: {
    "top-nav": TopNav,
    "side-nav": SideNav
  },
  created() {
    let data = document
      .querySelector('meta[name="initial-data"]')
      .getAttribute("content");
    data = JSON.parse(data);
    this.$store.commit("UserStore/setUser", data);
  }
};
</script>

<style>
/* Busy table styling */
table.b-table[aria-busy="true"] {
  opacity: 0.6;
}
</style>
