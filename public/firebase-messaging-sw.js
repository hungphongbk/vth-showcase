/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.9.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.9.0/firebase-analytics.js");
importScripts("https://www.gstatic.com/firebasejs/8.9.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: "AIzaSyAsNJFP3lqEvf9yjkq9tnUCPZyYi1mURjw",
  authDomain: "vaithuhay-showcase.firebaseapp.com",
  projectId: "vaithuhay-showcase",
  storageBucket: "vaithuhay-showcase.appspot.com",
  messagingSenderId: "52917475782",
  appId: "1:52917475782:web:2ca9c4d5035d36648bbac7",
  measurementId: "G-37F3R8T60Y",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/android-chrome-192x192.png",
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
