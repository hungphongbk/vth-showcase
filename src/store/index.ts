import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  AsyncThunkOptions,
  AsyncThunkPayloadCreator,
} from "@reduxjs/toolkit/src/createAsyncThunk";
import universalStorage from "./universalStorage";
import reducer from "./reducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { PersistConfig } from "redux-persist/es/types";

const persistConfig: PersistConfig<any> = {
  timeout: 0,
  key: "root",
  storage: universalStorage,
  blacklist: ["auth"],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, reducer) as typeof reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function createAppAsyncThunk<
  Returned,
  ThunkArg = void,
  ThunkApiConfig = {
    state: RootState;
    dispatch?: AppDispatch;
  }
>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ThunkApiConfig>,
  options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>
) {
  return createAsyncThunk<Returned, ThunkArg, ThunkApiConfig>(
    typePrefix,
    // @ts-ignore
    payloadCreator,
    options
  );
}

//@ts-ignore
if (typeof window !== "undefined") {
  //@ts-ignore
  window.store = store;
}
