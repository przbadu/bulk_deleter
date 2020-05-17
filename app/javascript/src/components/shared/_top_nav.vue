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

      <div class="collapse navbar-collapse">
        <div class="navbar-nav mr-auto ml-4">
          <div class="nav-item">
            <b-button
              variant="danger"
              v-if="activeQboAccount && !otherQboAccounts.length"
            >
              {{ activeQboAccount.company_name }}
            </b-button>
            <b-dropdown
              class="m-2"
              variant="danger"
              v-else-if="activeQboAccount"
              :text="activeQboAccount.company_name"
            >
              <b-dropdown-item
                v-for="account in otherQboAccounts"
                :key="account.id"
                :value="account.company_name"
                @click="switchAccount(account.id)"
              >
                {{ account.company_name }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>

        <b-navbar-nav class="ml-auto">
          <div class="nav-item">
            <b-nav-item href="/users/sign_out">
              <font-awesome-icon icon="sign-out-alt" />
              Logout
            </b-nav-item>
          </div>
        </b-navbar-nav>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    this.$store.dispatch('UserStore/fetchConnectedAccounts');
  },
  computed: {
    activeQboAccount() {
      return this.$store.getters['UserStore/activeQboAccount'];
    },
    otherQboAccounts() {
      return this.$store.getters['UserStore/otherQboAccounts'];
    },
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('NavigationStore/toggleSidebar');
    },
    switchAccount(id) {
      this.$store.dispatch('UserStore/switchAccount', id);
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
