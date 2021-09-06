import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import * as ModalDialogs from "vue-modal-dialogs"
import vClickOutside from "v-click-outside"
import Vuex from "vuex"
import store from "./store"

Vue.use(vClickOutside)
Vue.use(ModalDialogs)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  ModalDialogs,
  store,
  render: (h) => h(App)
}).$mount("#app")
