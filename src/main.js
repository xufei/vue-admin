import Vue from 'vue'
import App from './app'
import Dashboard from './components/dashboard'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import './css/admin.css'

Vue.use(VueResource)
Vue.use(Router)

var router = new Router()

router.map({
  '/login': {
    component: Dashboard
  },
  '/dashboard': {
    component: Dashboard
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})

router.alias({
  '/': '/login'
})

router.start(App, '#app')
