import Vue from 'vue'
import App from './app'
import Router from 'vue-router'
import './css/admin.css'

import Dashboard from './business/dashboard/dashboard'
import Employee from './business/employee/employee'
import EmployeeList from './business/employee/employee-list'
import EmployeeDetail from './business/employee/employee-detail'

Vue.use(Router)

var router = new Router()

router.map({
  '/login': {
    component: Dashboard
  },
  '/dashboard': {
    component: Dashboard
  },
  '/employee': {
    component: Employee,
    subRoutes: {
      '/': {
        component: EmployeeList
      },
      '/detail': {
        component: EmployeeDetail
      }
    }
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.alias({
  '/': '/login'
})

router.start(App, '#app')
