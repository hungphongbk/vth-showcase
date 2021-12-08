import dynamic from "next/dynamic";

export const AuthLoginHandler = dynamic(() => import("./AuthLoginHandler"), {
  ssr: false,
});

export const InvestorRegDialog = dynamic(
  () => import("./investor-reg-dialog"),
  { ssr: false }
);
