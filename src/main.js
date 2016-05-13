import Vue from 'vue'
import App from './app'
import Router from 'vue-router'
import './css/admin.css'

import Dashboard from './business/dashboard/dashboard'
import EmployeeList from './business/employee/employee-list'

Vue.use(Router)

var router = new Router()

router.map({
  '/login': {
    component: Dashboard
  },
  '/dashboard': {
    component: Dashboard
  },
  '/employee-list': {
    component: EmployeeList
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.alias({
  '/': '/login'
})

router.start(App, '#app')
