import React from "react";
import { Control, useFieldArray } from "react-hook-form";
import { Box } from "@mui/material";

type HighlightFeaturesProps = {
  control: Control<any>;
};
export default function HighlightFeatures({
  control,
}: HighlightFeaturesProps): JSX.Element {
  const fields = useFieldArray({ control, name: "highlightFeatures" });

  return <Box></Box>;
}
