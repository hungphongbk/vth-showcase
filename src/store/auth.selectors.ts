import { RootState } from "./index";

export const isLoggedInSelector = (state: RootState) =>
  typeof state.auth.user !== "undefined";

export const getLoggedInUserSelector = (state: RootState) => state.auth.user!;
