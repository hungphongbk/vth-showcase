import React from "react";
import { Box } from "@mui/material";
import { NextSeo } from "next-seo";

export default function CreatePostFirstStep(): JSX.Element {
  return (
    <Box>
      <NextSeo noindex={true} nofollow={true} />
    </Box>
  );
}
