import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import "firebase/performance";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const perf = firebase.performance();
var db = firebase.firestore();

window.db = db
window.perf = perf
window.firebase = firebase

Vue.config.productionTip = false

window.Vue = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
  } else {
    location.hash = "/login";
  }
});