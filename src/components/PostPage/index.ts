import dynamic from "next/dynamic";

export const InvestorInformation = dynamic(
  () => import("./InvestorInformation"),
  { ssr: false }
);
