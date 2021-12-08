import dynamic from "next/dynamic";

export const InvestorInformation = dynamic(
  () => import("./investor-information"),
  { ssr: false }
);

export const CommentSection = dynamic(() => import("./comment-section"), {
  ssr: false,
});
