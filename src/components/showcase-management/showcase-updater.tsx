import { useShowcaseCreation } from "../../layout/ShowcaseCreationLayout";
import { Box, NoSsr } from "@mui/material";
import { useRouter } from "next/router";
import {
  ShowcaseCreateInputDto,
  useShowcaseForUpdateQuery,
} from "../../types/graphql";
import { useEffect } from "react";
import SecondStep from "../ShowcaseCreation/SecondStep";
import { isEmpty } from "lodash";

export default function ShowcaseUpdater() {
  const router = useRouter();
  const { showcase, dispatch } = useShowcaseCreation(),
    { data, loading: fetching } = useShowcaseForUpdateQuery({
      variables: { slug: router.query.slug as string },
    });

  useEffect(() => {
    dispatch({ type: "enterEditMode" });
  }, [dispatch]);
  useEffect(() => {
    if (!fetching && data?.showcase) {
      dispatch({
        type: "update",
        payload: data.showcase as unknown as ShowcaseCreateInputDto,
      });
    }
  }, [data, dispatch, fetching]);
  if (isEmpty(showcase)) return null;
  return (
    <Box>
      <NoSsr>
        <SecondStep />
      </NoSsr>
    </Box>
  );
}
