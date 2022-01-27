import { ShowcaseStatus } from "../types/graphql";
import { memoize } from "lodash";
import { ReactNode } from "react";
import { SxProps } from "@mui/system";
import { ComingSoonIcon, IdeaBulbIcon, LookupIcon } from "@hungphongbk/vth-sdk";

export const usingShowcaseStatusColor = memoize(
  (status: ShowcaseStatus): string => {
    return (
      {
        [ShowcaseStatus.Idea]: "red.main",
        [ShowcaseStatus.Showcase]: "yellow.main",
        [ShowcaseStatus.Coming]: "green.main",
      } as Record<ShowcaseStatus, string>
    )[status]!;
  }
);

export const usingShowcaseStatusLabel = memoize(
  (status: ShowcaseStatus): string => {
    return (
      {
        [ShowcaseStatus.Idea]: "idea",
        [ShowcaseStatus.Showcase]: "showcase",
        [ShowcaseStatus.Coming]: "coming soon",
      } as Record<ShowcaseStatus, string>
    )[status]!;
  }
);

export const usingShowcaseStatusIcon = (
  status: ShowcaseStatus,
  sx?: SxProps
): ReactNode => {
  return (
    {
      [ShowcaseStatus.Idea]: (
        <IdeaBulbIcon color={"inherit"} sx={{ color: "red.main", ...sx }} />
      ),
      [ShowcaseStatus.Showcase]: (
        <LookupIcon color={"inherit"} sx={{ color: "yellow.main", ...sx }} />
      ),
      [ShowcaseStatus.Coming]: (
        <ComingSoonIcon color={"inherit"} sx={{ color: "green.main", ...sx }} />
      ),
    } as Record<ShowcaseStatus, ReactNode>
  )[status]!;
};
