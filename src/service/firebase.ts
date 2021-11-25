// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsNJFP3lqEvf9yjkq9tnUCPZyYi1mURjw",
  authDomain: "vaithuhay-showcase.firebaseapp.com",
  projectId: "vaithuhay-showcase",
  storageBucket: "vaithuhay-showcase.appspot.com",
  messagingSenderId: "52917475782",
  appId: "1:52917475782:web:2ca9c4d5035d36648bbac7",
  measurementId: "G-37F3R8T60Y",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);

export { analytics, auth };
