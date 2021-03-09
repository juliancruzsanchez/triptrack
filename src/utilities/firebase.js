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
export function init() {
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const perf = firebase.performance();
  var db = firebase.firestore();

  window.db = db
  window.perf = perf
  window.firebase = firebase

  firebase.getCurrentUser = async function () {
    let u = null
    await firebase.auth().onAuthStateChanged((user) => {
      u = user
      if (user) {
        userInit()
      } else {
        location.hash = "/login";
      }
      window.currentUser = user
      window.currentUserDoc = db.collection("users").doc(user.uid);

      currentUserDoc.onSnapshot((doc) => {
        Vue.$root.$data.userObject = doc.data()
      });


    });
    return u
  }

}

function userInit() {
  return currentUserDoc.update({
    lastLogin: firebase.firestore.FieldValue.serverTimestamp()
  })
    .then(() => {
      console.log("Document successfully updated!");
    })
    .catch((error) => {
      alert('error')
      currentUserDoc.set({
        isTripping: false,
        trips: [],
        preferences: {
          drugs: ["lsd"]
        },
        setupCompleted: true
      })
    });

}

export function startTrip() {
  currentUserDoc.update({
    isTripping: true,
    trips: firebase.firestore.FieldValue.arrayUnion({
      tripStart: Date.now(),
      ugPerTab: 100,
      tabsTaken: 4,
      tripActive: true,
    }),
  });
}

export function endTrip() {
  let tripsSorted = Vue.$root.$data.userObject.trips.sort((a, b) => b.tripStart - a.tripStart);
  tripsSorted[0].tripActive = false
  tripsSorted[0].tripEnd = Date.now()
  currentUserDoc.update({
    isTripping: false,
    trips: tripsSorted
  })
}