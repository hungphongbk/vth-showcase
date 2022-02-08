import { createContext, PropsWithChildren } from "react";
import { Box } from "@mui/material";

export const ScrollableContext = createContext<HTMLElement | null | undefined>(
  undefined
);

const ScrollablePanel = function ScrollablePanel({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <ScrollableContext.Provider
      value={
        typeof document !== "undefined"
          ? document.getElementById("__next")
          : undefined
      }
    >
      <Box
        sx={{
          width: "100%",
          height: (theme) => `calc(100% - ${theme.variables.appBarHeight}px)`,
        }}
      >
        {children}
      </Box>
    </ScrollableContext.Provider>
  );
};

export default ScrollablePanel;
