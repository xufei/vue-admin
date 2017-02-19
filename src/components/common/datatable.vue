<template>
  <table>
    <thead>
      <tr>
        <th v-for="key in columns"
          @click="sortBy(key)"
          :class="{active: sortKey == key}">
          {{key}}
          <span class="arrow"
            :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="
        entry in data
        | filterBy filterKey
        | orderBy sortKey sortOrders[sortKey]">
        <td v-for="key in columns">
          {{entry[key]}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    /*
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    */
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

table tr:nth-child(odd) {
  background: #f9f9f9;
}

table tr:nth-child(even) {
  background: #fff;
}

table tbody tr:hover {
  background: #c0c0c0;
}

table th {
  padding: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
}

table td {
  padding: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
}
</style>
