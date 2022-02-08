import dynamic from "next/dynamic";

export const InvestorInformation = dynamic(
  () => import("./investor-information"),
  { ssr: false }
);

export const CommentSection = dynamic(
  () => import("./comments/comment-section"),
  {
    ssr: false,
  }
);

export const PrjUpdateDisplay = dynamic(() => import("./prj-update-display"), {
  ssr: false,
});
