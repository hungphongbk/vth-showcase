import React, { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../store";
import { afterSignInFirebase, loadUserInfo } from "../../store/auth.reducer";
import { useCurrentUserLazyQuery } from "../../types/graphql";
import { FirebaseAuthService } from "../../service";

export default function AuthLoginHandler(): JSX.Element {
  const dispatch = useAppDispatch(),
    [fetchCurrentUser, { loading, data, error }] = useCurrentUserLazyQuery();

  const completeHandler = useCallback(
    async (event: DocumentEventMap["readystatechange"]) => {
      console.log(event);
      // @ts-ignore
      if (event.target!.readyState === "complete") {
        try {
          const { getPersistAuth } = await FirebaseAuthService();
          const payload = await getPersistAuth();
          dispatch(afterSignInFirebase(payload));
          if (payload.token) await fetchCurrentUser();
        } catch (e) {
          console.error(e);
        }
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
