import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element.js'
import './plugins/bootstrap-vue'
import './plugins/semantic-ui-vue'
import './plugins/moment'
import './plugins/vue-quill-editor'
import './plugins/image-hover'

import '@babel/polyfill'
import 'mutationobserver-shim'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
