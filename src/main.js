import Vue from 'vue'
import bootstrapVue from 'bootstrap-vue'
import App from './App.vue'

Vue.use(bootstrapVue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
