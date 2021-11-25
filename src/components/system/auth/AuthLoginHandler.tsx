import React, { useContext, useEffect } from "react";
import AuthContext from "./AuthContext";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../../service/firebase";

export default function AuthLoginHandler(): JSX.Element {
  const [, setUser] = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user ?? undefined);
    });
  }, [setUser]);

  return <></>;
}
