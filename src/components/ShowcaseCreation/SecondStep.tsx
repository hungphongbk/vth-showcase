import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import { useRouter } from "next/router";
import { ShowcaseStatus } from "../../types/graphql";
import SecondStepShowcase from "./SecondStepShowcase";

export default function SecondStep(): JSX.Element {
  const { showcase, dispatch } = useShowcaseCreation();
  const router = useRouter();

  /**
   * If status not set, must go back to step 1
   * just convenience for developmemt process
   */
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      dispatch({
        type: "update",
        payload: { status: ShowcaseStatus.Idea, imageLists: [{ images: [] }] },
      });
    } else if (!showcase.status) {
      // noinspection JSIgnoredPromiseFromCall
      router.replace("/manage/create-post/step1");
    } else
      dispatch({ type: "update", payload: { imageLists: [{ images: [] }] } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ p: 1 }}>
      {showcase.status ===
      ShowcaseStatus.Coming ? /* TODO */ null : typeof showcase.status !==
        "undefined" ? (
        <SecondStepShowcase />
      ) : null}
    </Box>
  );
}
