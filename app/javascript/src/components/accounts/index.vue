<template>
  <div class="row">
    <div class="col-12">
      <h1>Accounts</h1>
    </div>
    <div class="col-12">
      <table class="table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" v-model="selectAll" />
            </th>
            <th scope="col" v-for="field in fields" :key="field">
              {{ field }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="loading">
            <td :colspan="fields.length" class="text-center p-4">
              <beat-loader :loading="loading" :color="color"></beat-loader>
            </td>
          </tr>
          <tr scope="row" v-for="row in accounts.items" :key="row.id">
            <td>
              <input
                type="checkbox"
                :id="row.Id + '-account'"
                :value="row.Id"
                v-model="account_ids"
              />
            </td>
            <td v-for="field in fields" :key="field + row.id">
              {{ row[field] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import BeatLoader from 'vue-spinner/src/BeatLoader.vue';

export default {
  components: {
    'beat-loader': BeatLoader,
  },
  data() {
    return {
      color: 'red',
      fields: [
        'Id',
        'FullyQualifiedName',
        'Classification',
        'AccountSubType',
        'CurrentBalanceWithSubAccounts',
        'AccountType',
        'CurrentBalance',
        'SubAccount',
      ],
      account_ids: [],
      selectAll: false,
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
  },
  watch: {
    selectAll(val) {
      if (!val) return (this.account_ids = []);

      this.account_ids = this.accounts.items.map((account) => account['Id']);
    },
  },
};
</script>
