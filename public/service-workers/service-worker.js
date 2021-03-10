importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js')
importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.10/firebase-messaging.js');

const CACHE = "pwabuilder-page";

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "offline.html";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.add(offlineFallbackPage))
  );
});

if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        const preloadResp = await event.preloadResponse;

        if (preloadResp) {
          return preloadResp;
        }

        const networkResp = await fetch(event.request);
        return networkResp;
      } catch (error) {

        const cache = await caches.open(CACHE);
        const cachedResp = await cache.match(offlineFallbackPage);
        return cachedResp;
      }
    })());
  }
});


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyBBvBggzAO995iDFWkTdqF1woIENEnncl0",
  authDomain: "drugusetracker.firebaseapp.com",
  databaseURL: "https://drugusetracker-default-rtdb.firebaseio.com",
  projectId: "drugusetracker",
  storageBucket: "drugusetracker.appspot.com",
  messagingSenderId: "122433112652",
  appId: "1:122433112652:web:85b0a3fe73a91730e302e9",
  measurementId: "G-7KD3SSV962"
});

const messaging = firebase.messaging();

// [START messaging_on_background_message]
messaging.onBackgroundMessage((payload) => {
  console.log('[service-worker.js] Received background message ', payload);
});
// [END messaging_on_background_message]


console.log('Firebase Script Loaded')