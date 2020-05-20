<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h1>Accounts</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <my-table
          :fields="fields"
          :items="loading ? [] : accounts.items"
          :loading="loading"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyTable from '../../components/table/my-table';

export default {
  data() {
    return {
      fields: [
        'FullyQualifiedName',
        'Classification',
        'AccountSubType',
        // 'CurrentBalanceWithSubAccounts',
        'AccountType',
        'CurrentBalance',
        'SubAccount',
      ],
    };
  },
  created() {
    this.$store.dispatch('AccountStore/fetchAllAccounts');
  },
  computed: {
    loading() {
      return this.$store.getters['AccountStore/loading'];
    },
    accounts() {
      return this.$store.getters['AccountStore/accounts'];
    },
    rows() {
      if (typeof this.accounts.items === 'undefined') return 0;
      return this.accounts.items.length;
    },
  },
};
</script>
