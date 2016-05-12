<template>
  <main>
    <h1>Employee List</h1>

    <div>
      <button>New</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>
    
    <data-table :columns="gridColumns" :data="gridData"></data-table>
  </main>
</template>

<script>
import DataTable from '../../components/common/datatable'

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
