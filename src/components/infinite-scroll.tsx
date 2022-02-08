import {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { ScrollableContext } from "./scrollable-panel";
import { throttle } from "lodash";

type Props = PropsWithChildren<{
  next: () => any;
  threshold: number;
  hasMore: boolean;
}>;

export function InfiniteScroll({ next, threshold, hasMore, children }: Props) {
  const scrollEl = useContext(ScrollableContext),
    actionTriggered = useRef<boolean>(false);

  const isElementAtBottom = useCallback(() => {
    const clientHeight = scrollEl?.clientHeight;
    if (!clientHeight) return false;
    return (
      scrollEl!.scrollTop + clientHeight >= scrollEl!.scrollHeight - threshold
    );
  }, [scrollEl, threshold]);

  const onScrollListener = useCallback(
    (event: MouseEvent) => {
      if (actionTriggered.current) return;
      if (isElementAtBottom() && hasMore) {
        actionTriggered.current = true;
        next?.();
      }
    },
    [hasMore, isElementAtBottom, next]
  );
  const throttledOnScrollListener = useMemo(
    () => throttle(onScrollListener, 150),
    [onScrollListener]
  );
  useEffect(() => {
    return () => {
      throttledOnScrollListener.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollEl?.addEventListener(
      "scroll",
      throttledOnScrollListener as unknown as EventListenerOrEventListenerObject
    );
    return () => {
      scrollEl?.removeEventListener(
        "scroll",
        throttledOnScrollListener as unknown as EventListenerOrEventListenerObject
      );
    };
  }, [throttledOnScrollListener, scrollEl]);
  return <>{children}</>;
}
