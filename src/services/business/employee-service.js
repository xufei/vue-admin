import Vue from 'vue'
import HttpService from '../http-service'

class EmployeeList extends HttpService {
  constructor () {
    super()
    this.resource = Vue.resource('employee{/id}')
  }
  getEmployeeList () {

  }
  getEmployee (id) {
    return this.resource.get({id})
  }
}

export default new EmployeeList()
