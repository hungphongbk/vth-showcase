import React, { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../store";
import { afterSignInFirebase } from "../../store/auth.reducer";
import { getPersistAuth } from "../../service/auth";

export default function AuthLoginHandler(): JSX.Element {
  const dispatch = useAppDispatch();

  const completeHandler = useCallback(
    (event: DocumentEventMap["readystatechange"]) => {
      // @ts-ignore
      if (event.target!.readyState === "complete") {
        getPersistAuth().then((payload) =>
          dispatch(afterSignInFirebase(payload))
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
