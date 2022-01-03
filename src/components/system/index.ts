import dynamic from "next/dynamic";

export const AuthLoginHandler = dynamic(() => import("./AuthLoginHandler"), {
  ssr: false,
});

export const InvestorRegDialog = dynamic(
  () => import("./investor-reg-dialog"),
  { ssr: false }
);

export const CreatorAndInvestorActions = dynamic(
  () => import("../creator-and-investor-actions"),
  {
    ssr: false,
  }
);

export const PreorderDialog = dynamic(() => import("./preorder-dialog"), {
  ssr: false,
});
