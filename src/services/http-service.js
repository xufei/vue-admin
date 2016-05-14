import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = ''
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

export default class HttpService {
  get (url, param) {
    // GET request
    return Vue.http.get(url, param).then(response => {
      // get status
      response.status
      // get all headers
      response.headers()
      // get 'expires' header
      response.headers('expires')
      // set data on vm
      this.$set('someData', response.data)
    }, response => {
      // error callback
    })
  }
}
