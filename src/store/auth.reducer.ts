import { createAction, createReducer } from "@reduxjs/toolkit";
import { User } from "@firebase/auth";
import { QueryResult } from "@apollo/client/react/types/types";
import { CurrentUserQuery } from "../types/graphql";

type UserInfo = Pick<
  QueryResult<CurrentUserQuery>,
  "loading" | "data" | "error"
>;

type AuthState = {
  initialized: boolean;
  user?: User;
  token?: string;
  userInfo: UserInfo;
};

export const afterSignInFirebase = createAction<{
  user: User | undefined;
  token?: string;
}>("@@auth/signin");

export const afterSignOut = createAction("@@auth/signout");

export const loadUserInfo = createAction<UserInfo>("@@auth/currentUser");

export const authReducer = createReducer<AuthState>(
  { initialized: false, userInfo: { loading: false, data: undefined } },
  (builder) => {
    builder
      .addCase(afterSignInFirebase, (state, { payload }) => {
        state.initialized = true;
        state.user = payload.user;
        state.token = payload.token;
      })
      .addCase(afterSignOut, (state) => {
        delete state.user;
        delete state.token;
        state.userInfo = { loading: false, data: undefined };
      })
      .addCase(loadUserInfo, (state, { payload }) => {
        // @ts-ignore
        state.userInfo = payload;
      });
  }
);
