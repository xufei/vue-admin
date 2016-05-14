import Vue from 'vue'
import HttpService from '../http-service'

class EmployeeList extends HttpService {
  constructor () {
    super()
    this.resource = Vue.resource('employee{/id}')
  }
  getEmployeeList () {
    this.get('employee-list.json', {}).then(data => console.log(data))
  }
  getEmployee (id) {
    return this.resource.get({id})
  }
}

export default new EmployeeList()
