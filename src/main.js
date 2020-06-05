import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as ModalDialogs from 'vue-modal-dialogs'
Vue.use(ModalDialogs)               // No options

Vue.config.productionTip = false

new Vue({
  router,
  ModalDialogs,
  render: h => h(App)
}).$mount('#app')
