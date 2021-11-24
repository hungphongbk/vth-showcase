import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useReducer,
} from "react";
import { Showcase } from "../types/graphql";
import produce from "immer";

type AnAction = { type: "update"; payload: Partial<Showcase> };
const ShowcaseCreationContext = createContext<
  | {
      showcase: Partial<Showcase>;
      dispatch: React.Dispatch<AnAction>;
    }
  | undefined
>(undefined);
const reducer = (state: Partial<Showcase>, action: AnAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case "update":
        return { ...state, ...action.payload };
      default:
        return state;
    }
  });

export default function ShowcaseCreationLayout({
  children,
}: PropsWithChildren<unknown>): JSX.Element {
  const [showcase, dispatch] = useReducer(reducer, {});
  return (
    <ShowcaseCreationContext.Provider value={{ showcase, dispatch }}>
      {children}
    </ShowcaseCreationContext.Provider>
  );
}

export const useShowcaseCreation = () => {
  return useContext(ShowcaseCreationContext)!;
};

export function getShowcaseCreationLayout(page: ReactElement) {
  return <ShowcaseCreationLayout>{page}</ShowcaseCreationLayout>;
}
