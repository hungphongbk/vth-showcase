import React from "react";
import { Control, useFieldArray } from "react-hook-form";
import { Stack } from "@mui/material";

export default function ImageListUploader({
  control,
}: {
  control: Control<any>;
}): JSX.Element {
  const { fields, append } = useFieldArray<any, any, "cid">({
    control,
    keyName: "cid",
    name: "imageLists.0.images",
  });

  return <Stack direction={"column"} alignItems={"stretch"} gap={1} />;
}
