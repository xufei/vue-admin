<template>
  <main>
    <h1>Employee List</h1>

    <div>
      <button>New</button>
      <button>Edit</button>
      <button>Delete</button>
    </div>

    <!--data-table :columns="gridColumns" :data="gridData"></data-table-->
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees">
          <td>
            <a v-link="{name:'employee-detail', params:employee}">{{employee.name}}</a>
          </td>
          <td>{{employee.gender}}</td>
          <td>{{employee.age}}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import DataTable from '../../components/common/datatable'
import EmployeeService from '../../services/business/employee-service'

export default {
  data () {
    return {
      employees: []
    }
  },
  components: {
    DataTable
  },
  ready () {
    EmployeeService.getEmployeeList().then(result => {
      this.employees = result
    })
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
