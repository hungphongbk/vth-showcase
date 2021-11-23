import { ShowcaseStatus } from "../../types/graphql";
import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import {
  usingShowcaseStatusColor,
  usingShowcaseStatusLabel,
} from "../../utils/colors";

type SimpleFilterProps = {
  filter: ShowcaseStatus | undefined;
  onFilterChange: (value: ShowcaseStatus | undefined) => void | Promise<void>;
};

const FilterTag = styled(Box)`
  height: 27px;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 13.5px;
  display: flex;
  align-items: center;
  font-weight: 600;
  text-transform: capitalize;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15); ;
`;

export default function SimpleFilter(props: SimpleFilterProps): JSX.Element {
  return (
    <>
      {[
        ShowcaseStatus.Coming,
        ShowcaseStatus.Showcase,
        ShowcaseStatus.Idea,
      ].map((status) => (
        <FilterTag
          key={status as unknown as string}
          sx={
            props.filter === status
              ? { bgcolor: usingShowcaseStatusColor(status), color: "black" }
              : { bgcolor: "#d0d0d0", color: "white" }
          }
          onClick={() =>
            props.onFilterChange(props.filter === status ? undefined : status)
          }
        >
          {usingShowcaseStatusLabel(status)}
        </FilterTag>
      ))}
    </>
  );
}
