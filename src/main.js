import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as firebase from './utilities/firebase'
window._firebase = firebase
Vue.config.productionTip = false

window.Vue = new Vue({
  router,
  render: h => h(App),
  data() {
    return {
      userObject: {
        isTripping: false,
        trips: []
      },
    };
  }
}).$mount('#app')

firebase.init()