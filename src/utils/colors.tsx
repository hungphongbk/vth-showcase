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

export const usingShowcaseStatusIcon = memoize(
  (status: ShowcaseStatus, sx?: SxProps): ReactNode => {
    return (
      {
        [ShowcaseStatus.Idea]: (
          <IdeaBulbIcon sx={{ color: "red.main", ...sx }} />
        ),
        [ShowcaseStatus.Showcase]: (
          <LookupIcon sx={{ color: "yellow.main", ...sx }} />
        ),
        [ShowcaseStatus.Coming]: (
          <ComingSoonIcon sx={{ color: "green.main", ...sx }} />
        ),
      } as Record<ShowcaseStatus, ReactNode>
    )[status]!;
  }
);
