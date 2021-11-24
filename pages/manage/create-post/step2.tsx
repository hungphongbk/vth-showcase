import React from "react";
import { Box, NoSsr } from "@mui/material";
import { NextSeo } from "next-seo";
import { getShowcaseCreationLayout } from "../../../src/layout/ShowcaseCreationLayout";
import SecondStep from "../../../src/components/ShowcaseCreation/SecondStep";

export default function CreatePostSecondStep(): JSX.Element {
  return (
    <Box>
      <NextSeo noindex={true} nofollow={true} />
      <NoSsr>
        <SecondStep />
      </NoSsr>
    </Box>
  );
}

CreatePostSecondStep.getLayout = getShowcaseCreationLayout;
