import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import VueCropper from 'vue-cropper'
import axios from 'axios'

axios.defaults.baseURL = 'http://39.108.181.54:8080'

Vue.use(VueCropper)
Vue.use(ElementUI)

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
