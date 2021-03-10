import 'firebase/firebase-messaging'

export async function getToken() {
  firebase.messaging().getToken({
    vapidKey: 'BKdMXTWVstv4aesmG6yKQckmop31YiVGLOBe3n-DAk8hp6J0rwNO60jWh3UXI9RFliqKfSpqEE6HiLdk5HJiSi0'
  }).then((currentToken) => {
    if (currentToken) return currentToken
  }).catch((err) => console.log('An error occurred while retrieving token. ', err));
}