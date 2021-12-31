import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAppSelector } from "../store";
import { useRouter } from "next/router";
import { AnalyticsService } from "../service";
import { ReturnPromiseType } from "../types/util.type";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export function useOnClickOutside(ref: any, handler: any) {
  useEffect(
    () => {
      const listener = (event: any) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}

export function useLoginRequired() {
  const router = useRouter();
  const { initialized, token } = useAppSelector((state) => state.auth);
  const isLoggedIn = typeof token !== "undefined";

  useEffect(() => {
    if (initialized && !isLoggedIn) {
      // noinspection JSIgnoredPromiseFromCall
      router.replace("/");
    }
  }, [initialized, router, isLoggedIn]);

  return { loading: !initialized };
}

export function useGATrackView() {
  const serviceRef = useRef<ReturnPromiseType<typeof AnalyticsService>>();
  const router = useRouter();

  const load = useCallback(async () => {
    if (!serviceRef.current) serviceRef.current = await AnalyticsService();
  }, []);

  const handlerRef = useMemo(
    () => (url: string) => {
      load().then(() => {
        serviceRef.current?.default.logPage(url);
      });
    },
    [load]
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      handlerRef(window.location.pathname);
      router.events.on("routeChangeComplete", handlerRef);
      return () => {
        router.events.off("routeChangeComplete", handlerRef);
      };
    }
  }, [handlerRef, load, router.events]);
}
