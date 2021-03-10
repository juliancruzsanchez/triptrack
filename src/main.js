import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import server from './utilities/database'

Vue.config.productionTip = false

import firebase from "firebase/app";
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyBBvBggzAO995iDFWkTdqF1woIENEnncl0",
  authDomain: "drugusetracker.firebaseapp.com",
  databaseURL: "https://drugusetracker-default-rtdb.firebaseio.com",
  projectId: "drugusetracker",
  storageBucket: "drugusetracker.appspot.com",
  messagingSenderId: "122433112652",
  appId: "1:122433112652:web:85b0a3fe73a91730e302e9",
  measurementId: "G-7KD3SSV962"
};





window.Vue = new Vue({
  router,
  render: h => h(App),
  data() {
    return {
      user: null,
      userDoc: null,
      userObject: null
    };
  },
  async mounted() {
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    server.auth.getUser().then(user => {
      this.$data.user = user
      server.database.getUserObject(user, (u) => this.$data.userObject = u)
      this.$data.userDoc = server.database.getUserDoc(user)

      if (window.location.hash == "#/login") {
        window.location.hash = "#/"
      }
      server.auth.updateLoginTimestamp(user)
    }).catch(err => {
      window.location.href = '/#/login'
    })

  },
  methods: {
    startTrip() {
      this.$data.userDoc.update({
        isTripping: true
      });
      this.$data.userDoc.collection('trips').add({
        timestamp: Date.now(),
        ugPerTab: 100,
        tabsTaken: 4,
        tripActive: true,
      })
    },
    async endTrip() {
      this.$data.userDoc.update({
        isTripping: false
      });
      this.$data.userDoc.collection('trips').orderBy("timestamp", "desc").limit(1).get().then((query) => {
        let doc = query.docs[0].ref
        doc.update({
          endTimestamp: Date.now(),
          tripActive: false
        })
      })
    }
  }
}).$mount('#app')
