import React, { useCallback, useEffect } from "react";
import { useAppDispatch } from "../../store";
import { afterSignInFirebase, loadUserInfo } from "../../store/auth.reducer";
import { useCurrentUserLazyQuery } from "../../types/graphql";
import { FirebaseAuthService } from "../../service";

export default function AuthLoginHandler(): JSX.Element {
  const dispatch = useAppDispatch(),
    [fetchCurrentUser, { loading, data, error }] = useCurrentUserLazyQuery();

  const completeHandler = useCallback(async () => {
    const { getPersistAuth } = await FirebaseAuthService();
    const payload = await getPersistAuth();
    dispatch(afterSignInFirebase(payload));
    if (payload.token) await fetchCurrentUser();
  }, [dispatch, fetchCurrentUser]);

  useEffect(() => {
    dispatch(loadUserInfo({ loading, data, error }));
  }, [loading, data, error, dispatch]);

  useEffect(() => {
    // noinspection JSIgnoredPromiseFromCall
    completeHandler();
    // return () => window.removeEventListener("load", completeHandler);
  }, [completeHandler]);

  return <></>;
}
