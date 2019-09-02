// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/index.css'
/*bootstrap*/
import $ from 'jquery'
/*import 'bootstrap/css/bootstrap.css'*/
/*import 'bootstrap3/dist/js/bootstrap.js'*/
/*import '../static/lib/jquery/jquery.js'*/
/*import '../static/lib/bootstrap/css/bootstrap.css'*/
/*import '../static/css/index.css'
import '../static/js/index.js'*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
