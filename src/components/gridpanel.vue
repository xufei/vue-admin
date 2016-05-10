<template>
  <div>
    <h2>Table Header</h2>
    <data-table :columns="gridColumns" :data="gridData"></data-table>
  </div>
</template>

<script>
import DataTable from './common/datatable'

export default {
  data () {
    return {
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]
    }
  },
  components: {
    DataTable
  }
}
</script>
