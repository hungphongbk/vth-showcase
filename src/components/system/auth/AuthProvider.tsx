import React, { PropsWithChildren, useContext, useState } from "react";
import { User } from "@firebase/auth";
import AuthContext from "./AuthContext";
import dynamic from "next/dynamic";

const AuthLoginHandler = dynamic(() => import("./AuthLoginHandler"), {
  ssr: false,
});

export function AuthProvider(props: PropsWithChildren<unknown>): JSX.Element {
  const [user, setUser] = useState<User | undefined>();

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {props.children}
      <AuthLoginHandler />
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const [user, setUser] = useContext(AuthContext);

  return { user, logout: () => setUser(undefined) };
};
