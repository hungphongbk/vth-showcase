import React, { useCallback, useEffect } from "react";
import { FirebaseAuthService } from "../../service";
import { useAppDispatch } from "../../store";
import { afterSignInFirebase } from "../../store/auth.reducer";

export default function AuthLoginHandler(): JSX.Element {
  const dispatch = useAppDispatch();

  const completeHandler = useCallback(
    (event: DocumentEventMap["readystatechange"]) => {
      // @ts-ignore
      if (event.target!.readyState === "complete") {
        FirebaseAuthService().then(({ getPersistAuth }) =>
          getPersistAuth().then((payload) =>
            dispatch(afterSignInFirebase(payload))
          )
        );
      }
    },
    [dispatch]
  );

  useEffect(() => {
    document.addEventListener("readystatechange", completeHandler);

    return () =>
      document.removeEventListener("readystatechange", completeHandler);
  }, [completeHandler]);

  return <></>;
}
