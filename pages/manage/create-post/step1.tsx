import React from "react";
import { Box, NoSsr } from "@mui/material";
import { NextSeo } from "next-seo";
import { getShowcaseCreationLayout } from "../../../src/layout/ShowcaseCreationLayout";
import FirstStep from "../../../src/components/showcase-creation/first-step";

export default function CreatePostFirstStep(): JSX.Element {
  return (
    <Box>
      <NextSeo noindex={true} nofollow={true} />
      <NoSsr>
        <FirstStep />
      </NoSsr>
    </Box>
  );
}

CreatePostFirstStep.getLayout = getShowcaseCreationLayout;
