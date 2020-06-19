import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as ModalDialogs from 'vue-modal-dialogs'
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)
Vue.use(ModalDialogs)              

Vue.config.productionTip = false

new Vue({
  router,
  ModalDialogs,
  render: h => h(App)
}).$mount('#app')
