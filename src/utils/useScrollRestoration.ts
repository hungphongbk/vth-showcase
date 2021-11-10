import React, { useEffect } from "react";

import { NextRouter } from "next/router";

// Save the scroll position for the given url
function saveScrollPosition(
  url: string,
  savePosition: (url: string, pos: number) => void
) {
  savePosition(url, window.scrollY);
}

// Restore the scroll position for the given url is possible
function restoreScrollPosition(
  url: string,
  positions: React.RefObject<{ [key: string]: number }>
) {
  const position = positions.current![url];
  if (position) {
    window.scrollTo(0, position);
  }
}

export function useScrollRestoration(router: NextRouter) {
  const positions = React.useRef<{ [key: string]: number }>({});

  const updatePosition = (url: string, pos: number) => {
    positions.current = {
      ...positions.current,
      [url]: pos,
    };
  };

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      let shouldScrollRestore = false;
      window.history.scrollRestoration = "manual";

      const onBeforeUnload = (event: BeforeUnloadEvent) => {
        saveScrollPosition(router.asPath, updatePosition);
        delete event["returnValue"];
      };

      const onRouteChangeStart = (url: string) => {
        if (!shouldScrollRestore)
          saveScrollPosition(router.asPath, updatePosition);
      };

      const onRouteChangeComplete = (url: string) => {
        if (shouldScrollRestore) {
          shouldScrollRestore = false;
          restoreScrollPosition(url, positions);
        }
      };

      window.addEventListener("beforeunload", onBeforeUnload);
      router.events.on("routeChangeStart", onRouteChangeStart);
      router.events.on("routeChangeComplete", onRouteChangeComplete);
      router.beforePopState(() => {
        shouldScrollRestore = true;
        return true;
      });

      return () => {
        window.removeEventListener("beforeunload", onBeforeUnload);
        router.events.off("routeChangeStart", onRouteChangeStart);
        router.events.off("routeChangeComplete", onRouteChangeComplete);
        router.beforePopState(() => true);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
