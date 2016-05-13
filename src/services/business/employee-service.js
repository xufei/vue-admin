import Vue from 'vue'
import HttpService from '../http-service'

const resource = Vue.resource('employee{/id}')

class EmployeeList extends HttpService {
  getEmployeeList () {

  }
  getEmployee (id) {
    return resource.get({id})
  }
}

export default new EmployeeList()
