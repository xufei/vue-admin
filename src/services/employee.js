const list = [
  { id: '001', name: 'Tom', gender: 1, age: 5 },
  { id: '002', name: 'Jerry', gender: 0, age: 2 },
  { id: '003', name: 'Sun Wukong', gender: 1, age: 534 }
]

class EmployeeService {
  getEmployeeList () {
    return Promise.resolve(list)
  }
  getEmployee (id) {
    return Promise.resolve(list.find(item => item.id === id))
  }
}

export default new EmployeeService()
