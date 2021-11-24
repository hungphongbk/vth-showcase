import React from "react";
import { Box } from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";

export default function SecondStep(): JSX.Element {
  const { showcase, dispatch } = useShowcaseCreation();
  console.log(showcase);
  return <Box />;
}
