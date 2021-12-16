import React, { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../store";
import { afterSignInFirebase, loadUserInfo } from "../../store/auth.reducer";
import { getPersistAuth } from "../../service/auth";
import { useCurrentUserLazyQuery } from "../../types/graphql";

export default function AuthLoginHandler(): JSX.Element {
  const dispatch = useAppDispatch(),
    [fetchCurrentUser, { loading, data, error }] = useCurrentUserLazyQuery();

  const completeHandler = useCallback(
    (event: DocumentEventMap["readystatechange"]) => {
      // @ts-ignore
      if (event.target!.readyState === "complete") {
        getPersistAuth().then((payload) => {
          console.log(payload);
          dispatch(afterSignInFirebase(payload));
          if (payload.token) fetchCurrentUser();
        });
      }
    },
    [dispatch, fetchCurrentUser]
  );

  useEffect(() => {
    dispatch(loadUserInfo({ loading, data, error }));
  }, [loading, data, error, dispatch]);

  useEffect(() => {
    document.addEventListener("readystatechange", completeHandler);

    return () =>
      document.removeEventListener("readystatechange", completeHandler);
  }, [completeHandler]);

  return <></>;
}
