import { initializeApp } from "firebase/app";

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
export const firebaseApp = initializeApp(firebaseConfig);
