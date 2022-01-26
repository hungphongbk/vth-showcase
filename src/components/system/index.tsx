import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

export const AuthLoginHandler = dynamic(() => import("./auth-login-handler"), {
  ssr: false,
});

const InvestorRegDialog = dynamic(() => import("./investor-reg-dialog"), {
  ssr: false,
});

export const CreatorAndInvestorActions = dynamic(
  () => import("../creator-and-investor-actions"),
  {
    ssr: false,
  }
);

export const PreorderButton = dynamic(() => import("./preorder-button"), {
  ssr: false,
});

export function useInvestorRegDialog() {
  const router = useRouter();
  const isOpen = useMemo(() => {
    return /#corporate/.test(router.asPath);
  }, [router]);
  const open = useCallback(async () => {
    await router.push({ hash: "corporate" }, undefined, { shallow: true });
  }, [router]);
  const close = useCallback(
    () =>
      router.push(router.asPath.replace(/#corporate/g, ""), undefined, {
        shallow: true,
      }),
    [router]
  );
  const renderDialog = useMemo<JSX.Element | null>(() => {
    if (isOpen) return <InvestorRegDialog close={close} />;
    return null;
  }, [isOpen, close]);

  return { renderDialog, close, open };
}
