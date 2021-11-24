import React from "react";
import { Box, Stack } from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import { TextInput } from "../TextInput";

export default function FirstStep(): JSX.Element {
  const { showcase, dispatch } = useShowcaseCreation();
  return (
    <Box sx={{ mt: 1, p: 1 }}>
      <Stack direction={"column"} gap={2}>
        <TextInput label={"Mục tiêu dự án của bạn là gì?"} />
        <Stack direction={"column"} gap={1}>
          <TextInput label={"Tình trạng của dự án?"} />
          <TextInput placeholder={"Link dự án (nếu có)?"} />
        </Stack>
      </Stack>
    </Box>
  );
}
