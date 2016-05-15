import Vue from 'vue'
import HttpService from '../http-service'

class EmployeeList extends HttpService {
  constructor () {
    super()
    this.resource = Vue.resource('employee{/id}')
  }
  getEmployeeList () {
    // this.get('employee-list.json', {}).then(data => console.log(data))
    var list = [
      { id: '001', name: 'Tom', gender: 1, age: 5 },
      { id: '002', name: 'Jerry', gender: 0, age: 2 },
      { id: '003', name: 'Sun Wukong', gender: 1, age: 534 }
    ]

    const promise = new Promise((resolve, reject) => {
      resolve(list)
    })
    return promise
  }
  getEmployee (id) {
    return this.resource.get({id})
  }
}

export default new EmployeeList()
