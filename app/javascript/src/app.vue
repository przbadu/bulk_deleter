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
import SideNav from './components/shared/_side_nav';
import TopNav from './components/shared/_top_nav';

export default {
  components: {
    'top-nav': TopNav,
    'side-nav': SideNav,
  },
};
</script>
