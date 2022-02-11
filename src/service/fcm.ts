import { getMessaging, getToken as _getToken } from "@firebase/messaging";
import { firebaseApp } from "./firebase";
import * as Sentry from "@sentry/nextjs";

const publicKey = process.env.NEXT_APP_VAPID_KEY;

const messaging = getMessaging(firebaseApp);

export const getToken = async (setTokenFound: (arg0: boolean) => void) => {
  let currentToken = "";

  try {
    currentToken = await _getToken(messaging, { vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    Sentry.captureException(error);
  }

  return currentToken;
};
