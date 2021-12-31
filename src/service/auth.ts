// const analytics = getAnalytics(firebaseApp);
import { firebaseApp } from "./firebase";
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
