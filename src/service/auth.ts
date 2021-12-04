import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithPopup,
  signOut as _signOut,
  User,
} from "firebase/auth";
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
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    await signInWithPopup(auth, provider);
    return {
      user: auth.currentUser ?? undefined,
      token: auth.currentUser ? await auth.currentUser.getIdToken() : undefined,
    };
  } catch (e) {
    console.error(e);
  }
};

export const getPersistAuth = () =>
  new Promise<{ user: User | undefined; token?: string }>((resolve, reject) => {
    onAuthStateChanged(
      auth,
      async (user) => {
        const payload = {
          user: user ?? undefined,
          token: user ? await user.getIdToken() : undefined,
        };
        resolve(payload);
      },
      reject
    );
  });

export const signOut = () => _signOut(auth);

export const currentUser = auth.currentUser;
