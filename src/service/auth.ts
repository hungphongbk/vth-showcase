import {
  browserLocalPersistence,
  GoogleAuthProvider,
  setPersistence,
  signInWithPopup,
} from "@firebase/auth";
import { auth } from "./firebase";

const provider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  try {
    await setPersistence(auth, browserLocalPersistence);
    await console.log(await signInWithPopup(auth, provider));
  } catch (e) {
    console.error(e);
  }
};
