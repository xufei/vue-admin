// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

import VueRx from 'vue-rx'

import './css/admin.css'

// tada!
Vue.use(VueRx, { Observable, Subscription })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
