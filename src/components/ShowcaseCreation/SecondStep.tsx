import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import { useRouter } from "next/router";

export default function SecondStep(): JSX.Element {
  const { showcase, dispatch } = useShowcaseCreation();
  const router = useRouter();

  /**
   * If status not set, must go back to step 1
   * just convenience for developmemt process
   */
  useEffect(() => {
    if (!showcase.status) {
      // noinspection JSIgnoredPromiseFromCall
      router.replace("/manage/create-post/step1");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Box />;
}
