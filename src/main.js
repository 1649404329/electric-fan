import Vue from 'vue'
import App from './App.vue'
//引入element-ui
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"

Vue.config.productionTip = false

//添加使用element-ui
Vue.use(Element)

new Vue({
  render: h => h(App),
}).$mount('#app')
