import {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useAppSelector } from "../store";
import { useRouter } from "next/router";
import { AnalyticsService, FcmService } from "../service";
import { ReturnPromiseType } from "../types/util.type";
import { useSubscribeFcmMutation } from "../types/graphql";

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

export function useAuthInitialized() {
  const initialized = useAppSelector((state) => state.auth.initialized),
    token = useAppSelector((state) => state.auth.token);

  return {
    initialized,
    token,
    isLoggedIn: typeof token !== "undefined",
  };
}

export function useLoginRequired() {
  const router = useRouter();
  const { initialized, isLoggedIn } = useAuthInitialized();

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

async function checkNotificationClientGranted() {
  let granted = false;
  if (typeof Notification === "undefined") return false;
  if (Notification.permission === "granted") {
    granted = true;
  } else if (Notification.permission !== "denied") {
    let permission = await Notification.requestPermission();
    granted = permission === "granted";
  }
  return granted;
}
export function useNotificationRegister(topics: string[]) {
  const [isTokenFound, setTokenFound] = useState(false),
    getServicePromiseRef = useRef(FcmService()),
    [subscribe] = useSubscribeFcmMutation();
  return useCallback(async () => {
    const service = await getServicePromiseRef.current;
    const isGranted = await checkNotificationClientGranted();
    if (!isGranted) return false;
    const token = await service.getToken(setTokenFound);
    if (token) {
      await subscribe({ variables: { token, topic: topics } });
    }
    return true;
  }, [subscribe, topics]);
}

export function usePopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return { anchorEl, open, handleOpen, handleClose };
}
