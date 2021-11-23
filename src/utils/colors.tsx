import { ShowcaseStatus } from "../types/graphql";
import { memoize } from "lodash";
import { ReactNode } from "react";
import IdeaBulbIcon from "../assets/icons/IdeaBulbIcon";
import LookupIcon from "../assets/icons/LookupIcon";
import ComingSoonIcon from "../assets/icons/ComingSoonIcon";
import { SxProps } from "@mui/system";

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
