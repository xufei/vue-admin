import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../business/dashboard/dashboard'
import Employee from '../business/employee/employee'
import EmployeeList from '../business/employee/employee-list'
import EmployeeDetail from '../business/employee/employee-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Dashboard
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee,
      children: [
        {
          path: '/',
          name: 'EmployeeList',
          component: EmployeeList
        },
        {
          path: '/detail/:id',
          name: 'EmployeeDetail',
          component: EmployeeDetail
        }
      ]
    }
  ]
})

/*
router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.afterEach(function (transition) {
  console.log(transition.to)
})

router.alias({
  '/': '/login'
})

router.start(App, '#app')
*/
