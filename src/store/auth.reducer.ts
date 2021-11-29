import { createAction, createReducer } from "@reduxjs/toolkit";
import { User } from "@firebase/auth";

type AuthState = {
  initialized: boolean;
  user?: User;
  token?: string;
};

export const afterSignInFirebase =
  createAction<{ user: User | undefined; token?: string }>("@@auth/signin");

export const afterSignOut = createAction("@@auth/signout");

export const authReducer = createReducer<AuthState>(
  { initialized: false },
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
      });
  }
);
