import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

// 注册全局组件
// import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
// import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
// Vue.component('mescroll-body', MescrollBody)
// Vue.component('mescroll-uni', MescrollUni)

const app = new Vue({
    ...App
})
app.$mount()
// #endif






// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif