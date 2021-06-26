import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'material-icons/iconfont/material-icons.css'
import 'boxicons/css/boxicons.min.css'
import 'vuetify/dist/vuetify.min.css'
import vuetify from '@/plugins/vuetify'
import axios from 'axios'
import 'boxicons'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import BootstrapJs from 'bootstrap/dist/js/bootstrap'
import theejs from 'three.js';
Vue.use(Bootstrap)
Vue.use(BootstrapJs)
Vue.use(axios)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
