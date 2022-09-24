import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useTheme } from "@mui/system";

type ShowcaseLayoutContextProps = {
  isTopBarHidden: boolean;
  toggleTopBar(hide: boolean): void;
};

export const ShowcaseLayoutContext = createContext<ShowcaseLayoutContextProps>({
  isTopBarHidden: false,
  toggleTopBar(_) {},
});

export const ShowcaseLayoutProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [isTopBarHidden, toggleTopBar] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    document.body.style.paddingTop = isTopBarHidden
      ? "0px"
      : // @ts-ignore
        `${theme?.variables?.appBarHeight ?? 0}px`;
  }, [isTopBarHidden, theme]);

  return (
    <ShowcaseLayoutContext.Provider value={{ isTopBarHidden, toggleTopBar }}>
      {children}
    </ShowcaseLayoutContext.Provider>
  );
};
