import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './assets/js/rem.js'
import './assets/css/border.css'
import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/api'

// axios接口拦截
axios.interceptors.response.use(response => {
  // console.log(response)
  const res = response.data
  if (res.status === 1) { // 请求成功，data过滤掉
    return res.data
  } else if (res.status === 0) { // 请求失败
    console.error(res)
    return Promise.reject(res)
  }
}, error => {
  console.error(error)
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
