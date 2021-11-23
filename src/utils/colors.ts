import { ShowcaseStatus } from "../types/graphql";
import { memoize } from "lodash";

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
