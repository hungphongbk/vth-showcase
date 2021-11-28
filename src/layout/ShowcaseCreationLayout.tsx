import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useReducer,
} from "react";
import { ShowcaseCreateInputDto } from "../types/graphql";
import produce from "immer";
import { Theme, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

type AnAction = { type: "update"; payload: Partial<ShowcaseCreateInputDto> };
const ShowcaseCreationContext = createContext<
  | {
      showcase: Partial<ShowcaseCreateInputDto>;
      dispatch: React.Dispatch<AnAction>;
    }
  | undefined
>(undefined);
const reducer = (state: Partial<ShowcaseCreateInputDto>, action: AnAction) =>
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
    <ThemeProvider
      theme={(theme: Theme) => {
        // console.log(theme.typography);
        return createTheme({
          ...theme,
          typography: {
            ...theme.typography,
            body1: {
              ...theme.typography.body1,
              fontSize: "0.8125rem",
            },
          },
        });
      }}
    >
      <ShowcaseCreationContext.Provider value={{ showcase, dispatch }}>
        {children}
      </ShowcaseCreationContext.Provider>
    </ThemeProvider>
  );
}

export const useShowcaseCreation = () => {
  return useContext(ShowcaseCreationContext)!;
};

export function getShowcaseCreationLayout(page: ReactElement) {
  return <ShowcaseCreationLayout>{page}</ShowcaseCreationLayout>;
}
