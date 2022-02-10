import { getMessaging } from "@firebase/messaging";
import { firebaseApp } from "./firebase";

const messaging = getMessaging(firebaseApp);
