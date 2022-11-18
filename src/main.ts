import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
// import 'font-awesome/css/font-awesome.min.css'
// import axios from 'axios'
import service from './service.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

Vue.use(ElementUI)
Vue.prototype.service = service  // 挂载到原型可以在原型使用
Vue.prototype.$echarts = echarts  

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
