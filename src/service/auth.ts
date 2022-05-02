// const analytics = getAnalytics(firebaseApp);
import { firebaseApp } from "./firebase";
import {
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithCustomToken,
  signInWithPopup,
  signOut as _signOut,
  User,
} from "firebase/auth";

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  await setPersistence(auth, browserLocalPersistence);
  await signInWithPopup(auth, provider);
  return {
    user: auth.currentUser ?? undefined,
    token: auth.currentUser ? await auth.currentUser.getIdToken() : undefined,
  };
};

export const signInWithToken = async (token: string) => {
  await setPersistence(auth, browserLocalPersistence);
  await signInWithCustomToken(auth, token);
  return {
    user: auth.currentUser ?? undefined,
    token: auth.currentUser ? await auth.currentUser.getIdToken() : undefined,
  };
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

export const XcurrentUser = auth.currentUser;
