import firebase from "firebase/app";
import "firebase/auth";
import * as server from "./database"

export function getUser() {
  return new Promise((res, rej) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) res(user)
      else rej()
    });
  })
}

export function updateLoginTimestamp(user) {
  return new Promise((res, rej) => {
    server.getUserDoc(user).update({
      lastLogin: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => res(true)).catch((error) => rej(error));
  });
}

export function resetUserData(user) {
  user.set({
    isTripping: false,
    trips: [],
    preferences: {
      drugs: ["lsd"]
    },
    setupCompleted: true
  })
}