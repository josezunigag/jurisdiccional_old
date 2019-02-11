import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import $ from 'jquery'
import LoadScript from 'vue-plugin-load-script';
import 'animate/index.js'
import 'waves/dist/waves.js'
import 'bootstrap/dist/css/bootstrap.css'

window.$ = $
window.jQuery = $
Vue.use(LoadScript);
Vue.loadScript('/js/jquery.slimscroll.min.js')
Vue.loadScript("/js/custom.js")
Vue.loadScript("/js/sidebarmenu.js")



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
