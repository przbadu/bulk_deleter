<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>
          <input type="checkbox" v-model="selectAll" />
        </th>
        <th
          scope="col"
          class="text-nowrap"
          v-for="field in fields"
          :key="field"
          @click="sort(field)"
        >
          {{ field }}
          <font-awesome-icon v-if="field != sortBy" icon="sort" />
          <font-awesome-icon
            v-else-if="sortDirection == 'ASC'"
            icon="sort-up"
          />
          <font-awesome-icon v-else icon="sort-down" />
        </th>
      </tr>
    </thead>

    <tbody>
      <tr v-if="loading">
        <td :colspan="fields.length + 1" class="text-center p-4">
          <beat-loader :loading="loading" :color="color"></beat-loader>
        </td>
      </tr>
      <tr
        scope="row"
        v-for="row in items"
        :key="row.Id"
        @click="toggleSelect(row.Id)"
      >
        <td>
          <input
            type="checkbox"
            :id="row.Id + '- item'"
            :value="row.Id"
            v-model="checkbox_ids"
          />
        </td>
        <td v-for="field in fields" :key="field + row.Id">
          {{ row[field] }}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td :colspan="fields.length" class="text-right p-4">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
          />
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
import BeatLoader from 'vue-spinner/src/BeatLoader';

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    fields: Array,
    loading: Boolean,
  },
  components: {
    'beat-loader': BeatLoader,
  },
  data() {
    return {
      filteredItems: [],
      checkbox_ids: [],
      color: 'red',
      currentPage: 1,
      perPage: 10,
      selectAll: false,
      search: null,
      sortColumn: '',
      sortDirection: 'ASC',
    };
  },
  computed: {
    sortBy() {
      if (this.sortColumn === '') this.sortColumn = this.fields[0];
      return this.sortColumn;
    },
    rows() {
      if (typeof this.items === 'undefined') return 0;
      return this.items.length;
    },
  },
  watch: {
    selectAll(val) {
      if (!val) return (this.checkbox_ids = []);

      this.checkbox_ids = this.items.map((item) => item['Id']);
    },
    sortColumn(val) {},
    sortDirection(val) {},
  },
  methods: {
    toggleSelect(id) {
      const index = this.checkbox_ids.indexOf(id);
      if (index === -1) this.checkbox_ids.push(id);
      else this.checkbox_ids.splice(index, 1);
    },
    sort(column) {
      let direction = 'ASC';
      if (this.sortBy === column)
        direction = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
      this.sortColumn = column;
      this.sortDirection = direction;
    },
  },
};
</script>

<style></style>
