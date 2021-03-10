import firebase from "firebase/app";
import "firebase/firestore";

export function db() {
  return firebase.firestore()
}

export function getUserDoc(user) {
  return db().collection("users").doc(user.uid);
}

export function getUserObject(user, callback) {
  let doc = getUserDoc(user)
  doc.onSnapshot((docSnap) => {
    callback(docSnap.data())
  });
}

export function watchTrips(user, callback) {
  console.log(user)
  var userField = getUserDoc(user).collection('trips')
  userField.get().then(x => callback(x))
  userField.onSnapshot((doc) => {
    callback(doc.docs)
  });
}
